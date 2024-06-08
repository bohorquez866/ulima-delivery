import {
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  updateDoc,
} from 'firebase/firestore';
import { db, auth } from '../firebase/configFirebase';

export async function getFirebaseData() {
  // const userUid = auth.currentUser.uid; // This didn't work. Changed to email instead
  const userEmail = auth.currentUser.email;
  const docRef = doc(db, 'users', userEmail);
  const docSnap = await getDoc(docRef);
  const isAdmin = docSnap.get('admin');

  return isAdmin;
}

export async function getListStudentsAllAnswers() {
  var studentList = [];
  const querySnapshot = await getDocs(collection(db, 'users'));

  querySnapshot.forEach((doc) => {
    var tempArray = doc.data().data;

    if (typeof tempArray != 'undefined') {
      if (vaidateAllAnswers(tempArray)) {
        studentList.push(doc.data());
      }
    }
  });
  console.log('Lenght => ', studentList.length);
  return studentList;
}

function getAspAndJustScore(asp, just) {
  let isAspFull = [3, 4, 5].includes(asp);
  let isJustFull = just === 5;
  return isJustFull && isAspFull ? 5 : isJustFull ? 3 : 1;
}

function getSub13Escenary1Score(answers, asp) {
  if (answers == undefined) return 0;
  let solution = answers.find(({ solucion }) => solucion === 'solucion');
  // let isSolved = answers.filter(({ cumplio }) => cumplio === 'T').length > 0; // TODO: Preguntar si es que la sol debe haber sido seleccionada como "solucion"
  // let borradores = answers.length;
  let drafts = answers.filter(({ solucion }) => solucion === 'borrador').length; // Nuevo
  // let mistakes = answers[answers.length - 1].errores;
  let mistakes = solution ? solution.errores : 0;
  let isAspFull = [3, 4, 5].includes(asp);

  if (solution) {
    return solution.cumplio === "T" && drafts >= 2 && mistakes === 0 && isAspFull
    ? 5
    : drafts <= 1 && solution.cumplio === "T" && mistakes > 0
    ? 3
    : solution.cumplio === "T"
    ? 1
    : 0;
  } else return 0;
  // return solution.cumplio === "T" && drafts >= 2 && mistakes === 0 && isAspFull
  //   ? 5
  //   : drafts === 1 && isSolved
  //   ? 3
  //   : isSolved
  //   ? 1
  //   : 0;
}

const subs08_1a = (student, subs07Obj) => {
  if (subs07Obj['1a'] == 1) return 1;
  let resp = undefined;
  for (let i = 0; i < student.data.pregunta1.length; i++) {
    if(student.data.pregunta1[i].solucion == 'solucion') {
      resp = student.data.pregunta1[i];
    }
  }
  if(resp == undefined) return 3;
  else return 5;
}

const subs08_2a = (student, subs07Obj) => {
  if (subs07Obj['2a'] == 1) return 1;
  else {
    if (student.data.pregunta4.length >= 1) {
      if (student.data.pregunta4[0].cumplio == "no") return 1;
      else {
        if (student.data.pregunta4[0].errores >= 5) return 3; // TODO: Preguntar a Amadeo pq dice mayor a y menor a pero no igual en el excel
        else return 5;
      }
    } else return 1;
  }
}

const subs08_2b = (student, subs07Obj) => {
  if (subs07Obj['2b'] == 1) return 1;
  else {
    if (student.data.pregunta5.length >= 1) {
      if (student.data.pregunta5[0].cumplio == "no") return 1;
      else {
        if (student.data.pregunta5[0].errores >= 5) return 3;
        else return 5;
      }
    } else return 1;
  }
}

const subs08_2c = (student, subs07Obj) => {
  if (subs07Obj['2c'] == 1) return 1;
  else {
    if (student.data.pregunta6p3.length >= 1) {
      if (student.data.pregunta6p3[0].cumplio == "no") return 1;
      else {
        if (student.data.pregunta6p3[0].optima == "no") return 3;
        else return 5;
      }
    } else return 1;
  }
}

export async function setStudentGrades(id, grades) {
  const usersRef = doc(db, 'users', id);
  const subsRef = doc(db, 'subs', id);
  const docSnap = await getDoc(usersRef);
  let student = docSnap.data();
  const subs07Obj = {
    '1a': parseInt(grades.pregunta1.aspecto || 0), // P.ASP01
    '1b': parseInt(grades.pregunta2.aspecto || 0), // P.ASP02
    '1c': parseInt(grades.pregunta3.aspecto || 0), // P.ASP03
    '2a': parseInt(grades.pregunta4.aspecto || 0), // P.ASP04
    '2b': parseInt(grades.pregunta5.aspecto || 0), // P.ASP05
    '2c': parseInt(grades.pregunta6p3.aspecto || 0), // P.ASP06
  };
  let subs = {
    sub07: subs07Obj,
    sub08: {
      '1a': subs08_1a(student, subs07Obj),
      '1b': 0,
      '1c': 0,
      '2a': subs08_2a(student, subs07Obj),
      '2b': subs08_2b(student, subs07Obj),
      '2c': subs08_2c(student, subs07Obj),
    },
    sub11: {
      '1a': 0,
      '1b': getAspAndJustScore(
        subs07Obj['1b'],
        parseInt(grades.pregunta2.justificacion || 0),
      ),
      '1c': getAspAndJustScore(
        subs07Obj['1c'],
        parseInt(grades.pregunta3.justificacion || 0),
      ),
      '2a': getAspAndJustScore(
        subs07Obj['2a'],
        parseInt(grades.pregunta4.justificacion || 0),
      ),
      '2b': getAspAndJustScore(
        subs07Obj['2b'],
        parseInt(grades.pregunta5.justificacion || 0),
      ),
      '2c': getAspAndJustScore(
        subs07Obj['2c'],
        parseInt(grades.pregunta6p3.justificacion || 0),
      ),
    },
    sub12: {
      '1a': 0,
      '1b': 0,
      '1c': 0,
      '2a': parseInt(grades.pregunta4.identificacion || 0),
      '2b': parseInt(grades.pregunta5.identificacion || 0),
      '2c': 0,
    },
    sub13: {
      '1a': getSub13Escenary1Score(
        student.data.pregunta1,
        subs07Obj['1a'],
      ),
      '1b': getSub13Escenary1Score(
        student.data.pregunta2,
        subs07Obj['1b'],
      ),
      '1c': getSub13Escenary1Score(
        student.data.pregunta3,
        subs07Obj['1c'],
      ),
      '2a':
        [3, 4, 5].includes(subs07Obj['2a']) &&
        student.data.pregunta4[0].errores <= 2 &&
        student.data.pregunta4[0].cumplio === 'si'
          ? 5
          : [3, 4, 5].includes(subs07Obj['2a']) &&
            student.data.pregunta4[0].cumplio === 'si' &&
            student.data.pregunta4[0].errores > 2
          ? 3
          : [3, 4, 5].includes(subs07Obj['2a']) // TODO: Patrón descubierto o no o solo Aspectos importantes lleno ?
          ? 1
          : 0,
      '2b':
        [3, 4, 5].includes(subs07Obj['2b']) &&
        student.data.pregunta5[0].cumplio === 'si' &&
        student.data.pregunta5[0].errores === 0
          ? 5
          : student.data.pregunta5[0].cumplio === 'si' &&
            student.data.pregunta5[0].errores >= 0
          ? 3
          : 1,
      '2c': 
        [3, 4, 5].includes(subs07Obj['2c']) &&
        student.data.pregunta6[0].cumplio === 'si' && 
        student.data.pregunta6p2[0].cumplio === 'si' && 
        student.data.pregunta6p3[0].optima === 'si' 
          ? 5 
          : [3, 4, 5].includes(subs07Obj['2c']) &&
            (student.data.pregunta6[0].cumplio === 'si' ||
            student.data.pregunta6p2[0].cumplio === 'si')
          ? 3
          : 1,
    },
    sub14: {
      '1a': 0,
      '1b': 
        parseInt(grades.pregunta2.justificacion || 0) === 5 &&
        student.data.pregunta2.find(({ solucion }) => solucion === 'solucion').cumplio === 'T' 
          ? 5 
          : (parseInt(grades.pregunta2.justificacion || 0) === 3 || parseInt(grades.pregunta2.justificacion || 0) === 1) &&
            student.data.pregunta2.find(({ solucion }) => solucion === 'solucion').cumplio === 'T'
          ? 3
          : 1,
      '1c': 
        parseInt(grades.pregunta3.justificacion || 0) === 5 &&
        student.data.pregunta3.find(({ solucion }) => solucion === 'solucion').cumplio === 'T' 
          ? 5 
          : (parseInt(grades.pregunta3.justificacion || 0) === 3 || parseInt(grades.pregunta3.justificacion || 0) === 1) &&
            student.data.pregunta3.find(({ solucion }) => solucion === 'solucion').cumplio === 'T'
          ? 3
          : 1,
      '2a': 
        parseInt(grades.pregunta4.justificacion || 0) === 5 &&
        student.data.pregunta4[0].cumplio === 'si' 
          ? 5 
          : (parseInt(grades.pregunta4.justificacion || 0) === 3 || parseInt(grades.pregunta4.justificacion || 0) === 1) &&
          student.data.pregunta4[0].cumplio === 'si'
          ? 3
          : 1,
      '2b':
        parseInt(grades.pregunta5.justificacion || 0) === 5 &&
        student.data.pregunta5[0].cumplio === 'si' 
          ? 5 
          : (parseInt(grades.pregunta5.justificacion || 0) === 3 || parseInt(grades.pregunta5.justificacion || 0) === 1) &&
          student.data.pregunta5[0].cumplio === 'si'
          ? 3
          : 1,
      '2c': 
        parseInt(grades.pregunta6p3.justificacion || 0) === 5 &&
        student.data.pregunta6p3[0].cumplio === 'si' 
          ? 5 
          : (parseInt(grades.pregunta6p3.justificacion || 0) === 3 || parseInt(grades.pregunta6p3.justificacion || 0) === 1) &&
          student.data.pregunta6p3[0].cumplio === 'si'
          ? 3
          : 1,
    },
  };
  await setDoc(
    usersRef,
    {
      grades,
    },
    { merge: true },
  );
  console.log("Grades saved")
  
  await setDoc(
    subsRef,
    {
      ...subs,
    },
    { merge: true },
  );
  console.log("subs saved")
}

export async function setScoresBySubs() {
  const querySnapshot = await getDocs(collection(db, 'subs'));
  let subsInfo = {
    AE1: [5, 0.0513],
    AE2: [3, 0.0627],
    AE3: [6, 0.0233],
    AE4: [2, 0.05825],
    AE5: [2, 0.03495],
    AE6: [2, 0.0466],
    AE7: [6, 0.0699],
    AE8: [4, 0.043425],
    AE9: [5, 0.062725],
    AE10: [5, 0.033775],
    AE11: [5, 0.053075],
    AE12: [2, 0.138],
    AE13: [6, 0.184],
    AE14: [5, 0.138],
  };

  let subs = {
    sub01: 'AE1',
    sub02: 'AE2',
    sub03: 'AE3',
    sub04: 'AE4',
    sub05: 'AE5',
    sub06: 'AE6',
    sub07: 'AE7',
    sub08: 'AE8',
    sub09: 'AE9',
    sub10: 'AE10',
    sub11: 'AE11',
    sub12: 'AE12',
    sub13: 'AE13',
    sub14: 'AE14',
  };

  let studentListScores = {};
  querySnapshot.forEach(async (docItem) => {
    let scores = {};
    var item = docItem.data();
    // studentListScores[docItem.id] = {};
    Object.keys(subs).forEach((sub) => {
      scores[subs[sub]] = parseFloat(
        (
          (Object.values(item[sub] || {}).reduce((a, b) => a + b, 0) /
            subsInfo[subs[sub]][0]) *
          subsInfo[subs[sub]][1]
        ).toFixed(3),
      );
    });
    scores.creatividad = scores.AE1 + (scores.AE2 || 0);
    scores.pensAlg =
      scores.AE3 + scores.AE4 + scores.AE5 + scores.AE6 + (scores.AE7 || 0);
    scores.pensCrit =
      (scores.AE8 || 0) + scores.AE9 + scores.AE10 + (scores.AE11 || 0);
    scores.ResProbl =
      (scores.AE12 || 0) + (scores.AE13 || 0) + (scores.AE14 || 0);
    scores.CT =
      scores.creatividad + scores.pensAlg + scores.pensCrit + scores.ResProbl;
    studentListScores[docItem.id] = scores;

    // console.log('scores', scores)

    const subsRef = doc(db, 'users', docItem.id);
    await setDoc(
      subsRef,
      {
        scores,
      },
      { merge: true },
    );
  });
  return studentListScores;
}

export async function getListStudents() {
  var studentList = [];
  const querySnapshot = await getDocs(collection(db, 'users'));

  querySnapshot.forEach(async (docu) => {
    var item = docu.data();
    var tempArray = item.data;

    if (typeof tempArray != 'undefined') {
      if (item.admin === undefined) {
        studentList.push(docu.data());
      }
    }
  });
  
  console.log("studentList", studentList)
  console.log('Lenght => ', studentList.length);
  return studentList;
}

export async function getStudentById(id) {
  const docSnap = await getDoc(doc(db, 'users', id));
  return docSnap.data();
}

const vaidateAllAnswers = (item) => {
  if (
    typeof item.pregunta1 != 'undefined' &&
    typeof item.pregunta2 != 'undefined' &&
    typeof item.pregunta3 != 'undefined' &&
    typeof item.pregunta4 != 'undefined' &&
    typeof item.pregunta5 != 'undefined' &&
    typeof item.pregunta5p2 != 'undefined' &&
    typeof item.pregunta6 != 'undefined' &&
    typeof item.pregunta6p2 != 'undefined' &&
    typeof item.pregunta6p3 != 'undefined'
  ) {
    return true;
  }
  return false;
};

export async function setEmail(item) {
  await updateDoc(doc(db, 'users', item), {
    email: item,
  });
}
