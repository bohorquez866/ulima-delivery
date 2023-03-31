import {
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  updateDoc,
} from 'firebase/firestore';
import { db, auth } from '../firebase/configFirebase';
import {
  setSub01,
  setSub02,
  setSub03,
  setSub04,
  setSub05,
  setSub06,
  setSub09,
  setSub10,
  // sumTotalResults,
} from './getSubScores';

export async function getFirebaseData() {
  const userUid = auth.currentUser.uid;

  const docRef = doc(db, 'users', userUid);
  const docSnap = await getDoc(docRef);

  return docSnap.get('admin');
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

export async function setScoresBySubs() {
  const querySnapshot = await getDocs(collection(db, 'subs'));
  let subsInfo = {
    AE1: [5, 0.05],
    AE2: [3, 0.06],
    AE3: [6, 0.02],
    AE4: [3, 0.06],
    AE5: [2, 0.03],
    AE6: [2, 0.05],
    AE7: [6, 0.07],
    AE8: [4, 0.04],
    AE9: [5, 0.06],
    AE10: [5, 0.03],
    AE11: [5, 0.05],
    AE12: [2, 0.14],
    AE13: [6, 0.18],
    AE14: [5, 0.14],
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
    studentListScores[docItem.id] = {};
    Object.keys(subs).forEach((sub) => {
      scores[subs[sub]] = parseFloat(
        (
          (Object.values(item[sub] || {}).reduce((a, b) => a + b, 0) /
            subsInfo[subs[sub]][0]) *
          subsInfo[subs[sub]][1]
        ).toFixed(2),
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

function getAspAndJustScore(asp, just) {
  let isAspFull = [3, 4, 5].includes(asp);
  let isJustFull = just === 5;
  return isJustFull && isAspFull ? 5 : isJustFull ? 3 : 1;
}

function getSub13Escenary1Score(answers, asp) {
  let isSolved = answers.filter(({ cumplio }) => cumplio === 'T').length > 0;
  let borradores = answers.length;
  let mistakes = answers[answers.length - 1].errores;
  let isAspFull = [3, 4, 5].includes(asp);
  return isSolved && borradores >= 2 && mistakes === 0 && isAspFull
    ? 5
    : borradores === 1 && isSolved
    ? 3
    : isSolved
    ? 1
    : 0;
}

export async function setStudentGrades(id, grades) {
  const usersRef = doc(db, 'users', id);
  const subsRef = doc(db, 'subs', id);
  const docSnap = await getDoc(usersRef);
  let student = docSnap.data();
  let subs = {
    subs07: {
      '1a': parseInt(grades.pregunta1.aspecto || 0),
      '1b': parseInt(grades.pregunta2.aspecto || 0),
      '1c': parseInt(grades.pregunta3.aspecto || 0),
      '2a': parseInt(grades.pregunta4.aspecto || 0),
      '2b': parseInt(grades.pregunta5.aspecto || 0),
      '2c': parseInt(grades.pregunta6p3.aspecto || 0),
    },
    subs08: {
      '1a': parseInt(grades.pregunta1.aspecto || 0),
      '1b': 0,
      '1c': 0,
      '2a': parseInt(grades.pregunta4.aspecto || 0),
      '2b': parseInt(grades.pregunta5.aspecto || 0),
      '2c': parseInt(grades.pregunta6p3.aspecto || 0),
    },
    subs11: {
      '1a': 0,
      '1b': getAspAndJustScore(
        parseInt(grades.pregunta2.aspecto || 0),
        parseInt(grades.pregunta2.justificacion || 0),
      ),
      '1c': getAspAndJustScore(
        parseInt(grades.pregunta3.aspecto || 0),
        parseInt(grades.pregunta3.justificacion || 0),
      ),
      '2a': getAspAndJustScore(
        parseInt(grades.pregunta4.aspecto || 0),
        parseInt(grades.pregunta4.justificacion || 0),
      ),
      '2b': getAspAndJustScore(
        parseInt(grades.pregunta5.aspecto || 0),
        parseInt(grades.pregunta5.justificacion || 0),
      ),
      '2c': getAspAndJustScore(
        parseInt(grades.pregunta6p3.aspecto || 0),
        parseInt(grades.pregunta6p3.justificacion || 0),
      ),
    },
    subs12: {
      '1a': 0,
      '1b': 0,
      '1c': 0,
      '2a': parseInt(grades.pregunta4.identificacion || 0),
      '2b': parseInt(grades.pregunta5.identificacion || 0),
      '2c': 0,
    },
    subs13: {
      '1a': getSub13Escenary1Score(
        student.data.pregunta1,
        parseInt(grades.pregunta1.aspecto || 0),
      ),
      '1b': getSub13Escenary1Score(
        student.data.pregunta2,
        parseInt(grades.pregunta2.aspecto || 0),
      ),
      '1c': getSub13Escenary1Score(
        student.data.pregunta3,
        parseInt(grades.pregunta3.aspecto || 0),
      ),
      '2a':
        [3, 4, 5].includes(parseInt(grades.pregunta4.aspecto || 0)) &&
        student.data.pregunta4.errores <= 2 &&
        student.data.pregunta4.cumplio === 'T'
          ? 5
          : [3, 4, 5].includes(parseInt(grades.pregunta4.aspecto || 0)) &&
            student.data.pregunta4.cumplio === 'T' &&
            student.data.pregunta4.errores > 2
          ? 3
          : [3, 4, 5].includes(parseInt(grades.pregunta4.aspecto || 0))
          ? 1
          : 0,
      '2b':
        [3, 4, 5].includes(parseInt(grades.pregunta5.aspecto || 0)) &&
        student.data.pregunta4.cumplio === 'si' &&
        student.data.pregunta4.errores === 0
          ? 5
          : student.data.pregunta4.cumplio === 'si' &&
            student.data.pregunta4.errores >= 0
          ? 3
          : 1,
      '2c': parseInt(grades.pregunta6p3.aspecto || 0),
    },
    subs14: {
      '1a': 0,
      '1b': parseInt(grades.pregunta2.justificacion || 0),
      '1c': parseInt(grades.pregunta3.justificacion || 0),
      '2a': parseInt(grades.pregunta4.justificacion || 0),
      '2b': parseInt(grades.pregunta5.justificacion || 0),
      '2c': parseInt(grades.pregunta6p3.justificacion || 0),
    },
  };
  await setDoc(
    usersRef,
    {
      grades,
    },
    { merge: true },
  );

  await setDoc(
    subsRef,
    {
      ...subs,
    },
    { merge: true },
  );
}

export async function getListStudents() {
  var studentList = [];
  const querySnapshot = await getDocs(collection(db, 'users'));

  querySnapshot.forEach(async (docu) => {
    var item = docu.data();
    var tempArray = item.data;

    // var dict = {
    //   '1a': 0,
    //   '1b': 0,
    //   '1c': 0,
    //   '2a': 0,
    //   '2b': 0,
    //   '2c': 0,
    // };

    // let subs = {
    //   sub01: dict,
    //   sub02: dict,
    //   sub03: dict,
    //   sub04: dict,
    //   sub05: dict,
    //   sub06: dict,
    //   sub07: dict,
    //   sub08: dict,
    //   sub09: dict,
    //   sub10: dict,
    //   sub11: dict,
    //   sub12: dict,
    //   sub13: dict,
    //   sub14: dict,
    // };
    // const subsRef = doc(db, 'subs', docu.id);
    // await setDoc(
    //   subsRef,
    //   {
    //     subs,
    //   },
    //   { merge: true },
    // );
    if (typeof tempArray != 'undefined') {
      if (item.admin === undefined) {
        studentList.push(docu.data());
        //console.log(typeof doc.data());
        try {
          setEmail(docu.id);
          setSub01(docu.id);
          setSub02(docu.id);
          setSub03(docu.id);
          setSub04(docu.id);
          setSub05(docu.id);
          setSub06(docu.id);
          setSub09(docu.id);
          setSub10(docu.id);
          // sumTotalResults(docu.id);
        } catch (error) {
          console.log(error);
        }
      }
    }
  });
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
