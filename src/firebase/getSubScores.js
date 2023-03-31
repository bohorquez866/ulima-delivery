import {
  doc,
  getDoc,
  getDocs,
  collection,
  updateDoc,
} from 'firebase/firestore';
import { db } from './configFirebase';

export async function setSub01(item) {
  const item_id = item;

  var dict = {
    '1a': 0,
    '1b': 0,
    '1c': 0,
    '2a': 1,
    '2b': 1,
    '2c': 0,
  };
  const docRef = doc(db, 'users', item_id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.get('data');

  var borrador = 0;
  var solucion = 0;

  /////////////// get 1a
  try {
    const pregunta1 = data['pregunta1'];
    if (pregunta1.length === 1) {
      dict['1a'] = 1;
    } else if (pregunta1.length > 1) {
      borrador = 0;
      solucion = 0;
      pregunta1.forEach((element) => {
        if (element['solucion'] === 'solucion') {
          solucion += 1;
        } else {
          borrador += 1;
        }
      });
      if (borrador == 1 && solucion == 1) {
        dict['1a'] = 3;
      } else if ((borrador > 1) & (solucion == 1)) {
        dict['1a'] = 5;
      }
    }
    /////////////// get 1b
    const pregunta2 = data['pregunta2'];
    if (pregunta2.length === 1) {
      dict['1b'] = 1;
    } else if (pregunta2.length > 1) {
      borrador = 0;
      solucion = 0;
      pregunta2.forEach((element) => {
        if (element['solucion'] === 'solucion') {
          solucion += 1;
        } else {
          borrador += 1;
        }
      });

      if (borrador == 1 && solucion == 1) {
        dict['1b'] = 3;
      } else if ((borrador > 1) & (solucion == 1)) {
        dict['1b'] = 5;
      }
    }
    /////////////// get 1c
    const pregunta3 = data['pregunta3'];
    if (pregunta3.length === 1) {
      dict['1c'] = 1;
    } else if (pregunta3.length > 1) {
      borrador = 0;
      solucion = 0;
      pregunta3.forEach((element) => {
        if (element['solucion'] === 'solucion') {
          solucion += 1;
        } else {
          borrador += 1;
        }
      });

      if (borrador == 1 && solucion == 1) {
        dict['1c'] = 3;
      } else if ((borrador > 1) & (solucion == 1)) {
        dict['1c'] = 5;
      }
    }
    ////////////// get 2a
    const pregunta4 = data['pregunta4'];
    if (pregunta4.length === 1) {
      if (pregunta4[0]['cumplio'] === 'si') {
        dict['2a'] = 5;
      } else {
        dict['2a'] = 3;
      }
    }
    ////////////// get 2a
    const pregunta5 = data['pregunta5'];
    if (pregunta5.length === 1) {
      if (pregunta5[0]['cumplio'] === 'si') {
        dict['2b'] = 5;
      } else {
        dict['2b'] = 3;
      }
    }
    await updateDoc(doc(db, 'subs', item), {
      sub01: dict,
    });
  } catch (error) {
    await updateDoc(doc(db, 'subs', item), {
      sub01: dict,
    });
  }

  await updateDoc(doc(db, 'users', item), {
    process: true,
  });
}

function getIndiceMejora(respuestas, item, prevQuestionAnswers, valorOptimo) {
  respuestas = respuestas.sort((x, y) =>
    x.solucion !== 'solución' ? -1 : y !== 'solucion' ? 1 : 0,
  );
  let pesos = respuestas.map(({ peso }) => peso);
  let lastQuestionSolution = prevQuestionAnswers.find(
    ({ solucion }) => solucion === 'solucion',
  );
  let lasQuestionWeight = lastQuestionSolution ? lastQuestionSolution.peso : 0;
  pesos.unshift(lasQuestionWeight);
  let variaciones = [];
  for (let index = 0; index < pesos.length - 1; index++) {
    const peso = pesos[index];
    let uno = peso - valorOptimo;
    let dos = pesos[index + 1] - peso;
    let tres = uno + dos;
    variaciones.push(tres);
  }
  let res = [];
  for (let index = 0; index < variaciones.length - 1; index++) {
    const elem = variaciones[index];
    const count = variaciones[index + 1] - elem;
    res.push(count);
  }
  let IM = res.reduce((partialSum, a) => partialSum + a, 0);
  if (item === 'ljpm4@gmail.com') {
    console.log('-------------------identificador---------------------');
    console.log(item);
    console.log('Pesos: ', pesos);
    console.log('Variaciones: ', variaciones);
    console.log('Res: ', res);
    console.log('IM: ', IM);
  }
  return IM;
}

function getIMScore(IM) {
  return IM < -4 || IM > 4
    ? 1
    : (IM >= -4 && IM < -2) || (IM > 2 && IM > 4)
    ? 3
    : IM >= -2 && IM <= 2
    ? 5
    : 0;
}

export async function setSub02(item) {
  // const item_id = item;

  var dict = {
    '1a': 0,
    '1b': 0,
    '1c': 0,
    '2a': 0,
    '2b': 0,
    '2c': 0,
  };
  const docRef = doc(db, 'users', item);
  const docSnap = await getDoc(docRef);
  const data = docSnap.get('data');

  // var borrador = 0
  // var solucion = 0

  /////////////// get 1a
  try {
    const pregunta2 = data['pregunta2'];
    const pregunta1 = data['pregunta1'];
    let IM = getIndiceMejora(pregunta2, item, pregunta1, 24);
    dict['1b'] = getIMScore(IM);
    console.log('Score: ', dict['1b']);
    const pregunta3 = data['pregunta3'];
    IM = getIndiceMejora(pregunta3, item, pregunta2, 25);
    dict['1c'] = getIMScore(IM);
    await updateDoc(doc(db, 'subs', item), {
      sub02: dict,
    });
  } catch (error) {
    await updateDoc(doc(db, 'subs', item), {
      sub02: dict,
    });
  }
  await updateDoc(doc(db, 'users', item), {
    process: true,
  });
}

export async function setSub03(item) {
  const item_id = item;

  var dict = {
    '1a': 0,
    '1b': 0,
    '1c': 0,
    '2a': 1,
    '2b': 1,
    '2c': 0,
  };
  const docRef = doc(db, 'users', item_id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.get('data');
  var borrador = 0;
  var solucion = 0;
  /////////////// get 1a
  try {
    const pregunta1 = data['pregunta1'];
    if (pregunta1.length === 1) {
      dict['1a'] = 1;
    } else if (pregunta1.length > 1) {
      borrador = 0;
      solucion = 0;
      pregunta1.forEach((element) => {
        if (element['solucion'] === 'solucion') {
          solucion += 1;
        } else {
          borrador += 1;
        }
      });
      if (borrador == 1 && solucion == 1) {
        dict['1a'] = 3;
      } else if ((borrador > 1) & (solucion == 1)) {
        dict['1a'] = 5;
      }
    }
    /////////////// get 1b
    const pregunta2 = data['pregunta2'];
    if (pregunta2.length === 1) {
      dict['1b'] = 1;
    } else if (pregunta2.length > 1) {
      borrador = 0;
      solucion = 0;
      pregunta2.forEach((element) => {
        if (element['solucion'] === 'solucion') {
          solucion += 1;
        } else {
          borrador += 1;
        }
      });

      if (borrador == 1 && solucion == 1) {
        dict['1b'] = 3;
      } else if ((borrador > 1) & (solucion == 1)) {
        dict['1b'] = 5;
      }
    }
    /////////////// get 1c
    const pregunta3 = data['pregunta3'];
    if (pregunta3.length === 1) {
      dict['1c'] = 1;
    } else if (pregunta3.length > 1) {
      borrador = 0;
      solucion = 0;
      pregunta3.forEach((element) => {
        if (element['solucion'] === 'solucion') {
          solucion += 1;
        } else {
          borrador += 1;
        }
      });

      if (borrador == 1 && solucion == 1) {
        dict['1c'] = 3;
      } else if ((borrador > 1) & (solucion == 1)) {
        dict['1c'] = 5;
      }
    }
    ////////////// get 2a
    const pregunta4 = data['pregunta4'];
    if (pregunta4.length === 1) {
      if (pregunta4[0]['cumplio'] === 'si') {
        dict['2a'] = 5;
      } else {
        dict['2a'] = 3;
      }
    }
    ////////////// get 2a
    const pregunta5 = data['pregunta5'];
    if (pregunta5.length === 1) {
      if (pregunta5[0]['cumplio'] === 'si') {
        dict['2b'] = 5;
      } else {
        dict['2b'] = 3;
      }
    }
    await updateDoc(doc(db, 'subs', item), {
      sub03: dict,
    });
  } catch (error) {
    await updateDoc(doc(db, 'subs', item), {
      sub03: dict,
    });
  }

  return docSnap.get('admin');
}

export async function setSub04(item) {
  const item_id = item;

  var dict = {
    '1a': 0,
    '1b': 0,
    '1c': 0,
    '2a': 0,
    '2b': 1,
    '2c': 1,
  };
  const docRef = doc(db, 'users', item_id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.get('data');

  try {
    /////////////// get 5
    const pregunta5 = data['pregunta5'];
    const errores = pregunta5[0].error;

    if (errores == 0) {
      dict['2b'] = 5;
    } else if (errores > 0) {
      dict['2b'] = 3;
    }
    /////////////// get 6
    const pregunta6 = data['pregunta6'];
    const pregunta6p2 = data['pregunta6p2'];
    const errorTot = pregunta6[0].error + pregunta6p2[0].error;
    if (errorTot == 0) {
      dict['2c'] = 5;
    } else if (errorTot > 0) {
      dict['2c'] = 3;
    }

    await updateDoc(doc(db, 'subs', item), {
      sub04: dict,
    });
  } catch (error) {
    await updateDoc(doc(db, 'subs', item), {
      sub04: dict,
    });
  }
}

export async function setSub05(item) {
  const item_id = item;

  var dict = {
    '1a': 0,
    '1b': 0,
    '1c': 0,
    '2a': 0,
    '2b': 0,
    '2c': 1,
  };
  const docRef = doc(db, 'users', item_id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.get('data');

  /////////////// get 5p2
  try {
    const pregunta5p2 = data['pregunta5p2'];
    const condicional = pregunta5p2[0].condicional;
    const repetir = pregunta5p2[0].for;
    const cumplio = pregunta5p2[0].cumplio;

    if (condicional < 2) {
      dict['2b'] = 1;
    } else if (condicional >= 2 && cumplio != 'si') {
      dict['2b'] = 3;
    } else if (cumplio === 'si' && condicional > 0 && repetir > 0) {
      dict['2b'] = 5;
    }
    /////////////// get 6
    const pregunta6 = data['pregunta6'];
    const cumplioP6 = pregunta6[0].cumplio;
    if (condicional < 2) {
      dict['2c'] = 1;
    } else if (cumplioP6 != 'si') {
      dict['2c'] = 3;
    } else if (cumplioP6 === 'si' && condicional > 0 && repetir > 0) {
      dict['2c'] = 5;
    }

    await updateDoc(doc(db, 'subs', item), {
      sub05: dict,
    });
  } catch (error) {
    await updateDoc(doc(db, 'subs', item), {
      sub05: dict,
    });
  }
}

export async function setSub06(item) {
  const item_id = item;

  var dict = {
    '1a': 0,
    '1b': 0,
    '1c': 0,
    '2a': 0,
    '2b': 0,
    '2c': 1,
  };
  const docRef = doc(db, 'users', item_id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.get('data');

  /////////////// get 5p2
  try {
    /////////////// get 5p2
    const pregunta5p2 = data['pregunta5p2'];
    const condicional = pregunta5p2[0].condicional;
    const repetir = pregunta5p2[0].for;
    const cumplio = pregunta5p2[0].cumplio;

    if (condicional < 2) {
      dict['2b'] = 1;
    } else if (repetir >= 2 && cumplio != 'si') {
      dict['2b'] = 3;
    } else if (cumplio === 'si' && condicional > 0 && repetir > 0) {
      dict['2b'] = 5;
    }
    /////////////// get 6p2
    const pregunta6p2 = data['pregunta6p2'];
    const cumplioP6 = pregunta6p2[0].cumplio;
    if (condicional < 2) {
      dict['2c'] = 1;
    } else if (cumplioP6 != 'si') {
      dict['2c'] = 3;
    } else if (cumplioP6 === 'si' && repetir > 0) {
      dict['2c'] = 5;
    }

    await updateDoc(doc(db, 'subs', item), {
      sub06: dict,
    });
  } catch (error) {
    await updateDoc(doc(db, 'subs', item), {
      sub06: dict,
    });
  }
}

export async function setSub09(item) {
  const item_id = item;

  var dict = {
    '1a': 0,
    '1b': 0,
    '1c': 0,
    '2a': 1,
    '2b': 1,
    '2c': 1,
  };
  const docRef = doc(db, 'users', item_id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.get('data');

  try {
    /////////////// get 1
    const pregunta1 = data['pregunta1'];
    var errores = pregunta1[0].error;
    var cumplio = pregunta1[0].cumplio;

    if (errores > 2 && cumplio === 'si') {
      dict['2b'] = 1;
    } else if (errores > 0 && cumplio === 'si') {
      dict['2b'] = 3;
    } else if (cumplio === 'si') {
      dict['2b'] = 5;
    }
    /////////////// get 2
    const pregunta2 = data['pregunta2'];
    errores = pregunta2[0].error;
    cumplio = pregunta2[0].cumplio;

    if (errores > 2 && cumplio === 'si') {
      dict['2b'] = 1;
    } else if (errores > 0 && cumplio === 'si') {
      dict['2b'] = 3;
    } else if (cumplio === 'si') {
      dict['2b'] = 5;
    }

    /////////////// get 4
    const pregunta4 = data['pregunta4'];
    errores = pregunta4[0].error;
    cumplio = pregunta4[0].cumplio;

    if (errores > 2 && cumplio === 'si') {
      dict['2b'] = 3;
    } else if (errores > 0 && cumplio === 'si') {
      dict['2b'] = 5;
    }

    /////////////// get 5
    const pregunta2b = data['pregunta5'];
    errores = pregunta2b[0].error;
    cumplio = pregunta2b[0].cumplio;

    if (errores > 3 && cumplio === 'si') {
      dict['2b'] = 1;
    } else if (errores > 0 && cumplio === 'si') {
      dict['2b'] = 3;
    }

    /////////////// get 6
    const pregunta2c = data['pregunta6'];
    errores = pregunta2c[0].error;
    cumplio = pregunta2c[0].cumplio;

    if (errores > 2 && cumplio === 'si') {
      dict['2b'] = 1;
    } else if (errores > 0 && cumplio === 'si') {
      dict['2b'] = 3;
    } else if (cumplio === 'si') {
      dict['2b'] = 5;
    }
    await updateDoc(doc(db, 'subs', item), {
      sub09: dict,
    });
  } catch (error) {
    await updateDoc(doc(db, 'subs', item), {
      sub09: dict,
    });
  }
}

export async function setSub(item, subName) {
  var dict = {
    '1a': 1,
    '1b': 0,
    '1c': 1,
    '2a': 1,
    '2b': 1,
    '2c': 1,
  };
  var dictUpdate = {};
  dictUpdate[subName] = dict;

  //console.log('imprimio: ', dictUpdate);

  try {
    await updateDoc(doc(db, 'subs', item), dictUpdate);
    //console.log('Se guardo');
  } catch (error) {
    console.log('no se guardo');
  }
}

export async function setSub10(item) {
  const item_id = item;

  var dict = {
    '1a': 1,
    '1b': 0,
    '1c': 1,
    '2a': 1,
    '2b': 1,
    '2c': 1,
  };
  const docRef = doc(db, 'users', item_id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.get('data');

  try {
    /////////////// get 1
    const pregunta1 = data['pregunta1'];
    var cumplio = pregunta1[0].cumplio;
    var borrador = 0;

    pregunta1.forEach((element) => {
      if (element['solucion'] === 'borrador') {
        borrador += 1;
      }
    });

    if (borrador >= 3 && cumplio === 'si') {
      dict['2b'] = 3;
    } else if (cumplio === 'si') {
      dict['2b'] = 5;
    }
    /////////////// get 3
    const pregunta3 = data['pregunta3'];
    cumplio = pregunta3[0].cumplio;
    borrador = 0;

    pregunta3.forEach((element) => {
      if (element['solucion'] === 'borrador') {
        borrador += 1;
      }
    });

    if (borrador >= 3 && cumplio === 'si') {
      dict['2b'] = 3;
    } else if (cumplio === 'si') {
      dict['2b'] = 5;
    }

    /////////////// get 4
    const pregunta4 = data['pregunta4'];
    cumplio = pregunta4[0].cumplio;
    var tiempo = pregunta4[0].tiempo;

    if (tiempo <= 180 && cumplio != 'si') {
      dict['2b'] = 3;
    } else if (cumplio === 'si') {
      dict['2b'] = 5;
    }

    /////////////// get 5
    const pregunta5 = data['pregunta5'];
    cumplio = pregunta5[0].cumplio;
    tiempo = pregunta5[0].tiempo;

    if (tiempo <= 180 && cumplio != 'si') {
      dict['2b'] = 3;
    } else if (cumplio === 'si') {
      dict['2b'] = 5;
    }

    /////////////// get 6
    const pregunta6 = data['pregunta6'];
    const pregunta6p2 = data['pregunta6p2'];
    cumplio = pregunta6[0].cumplio;
    tiempo = pregunta6[0].tiempo;
    var cumplio2 = pregunta6p2[0].cumplio;
    var tiempo2 = pregunta6p2[0].tiempo;

    if (
      tiempo <= 180 &&
      cumplio != 'si' &&
      tiempo2 <= 180 &&
      cumplio2 != 'si'
    ) {
      dict['2b'] = 3;
    } else if (cumplio === 'si' && cumplio2 === 'si') {
      dict['2b'] = 5;
    }

    await updateDoc(doc(db, 'subs', item), {
      sub10: dict,
    });
  } catch (error) {
    await updateDoc(doc(db, 'subs', item), {
      sub10: dict,
    });
  }
}

export async function getListStudents() {
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
  return studentList;
}
export async function setSubText(item, subName) {
  var dictItems = {};
  dictItems['V1a'] = 0;
  dictItems['V1b'] = 0;
  dictItems['V1c'] = 0;
  dictItems['V2a'] = 0;
  dictItems['V2b'] = 0;
  dictItems['V2c'] = 0;
  const docRef = doc(db, 'subs', item);
  const docSnap = await getDoc(docRef);
  const dataV1a = docSnap.get(subName)['1a'];
  const dataV1b = docSnap.get(subName)['1b'];
  const dataV1c = docSnap.get(subName)['1c'];
  const dataV2a = docSnap.get(subName)['2a'];
  const dataV2b = docSnap.get(subName)['2b'];
  const dataV2c = docSnap.get(subName)['2c'];

  dictItems['V1a'] = dataV1a;
  dictItems['V1b'] = dataV1b;
  dictItems['V1c'] = dataV1c;
  dictItems['V2a'] = dataV2a;
  dictItems['V2b'] = dataV2b;
  dictItems['V2c'] = dataV2c;

  return dictItems;
}

export async function saveSubText(item, subName, dict) {
  var dictUpdate = {};
  dictUpdate[subName] = dict;

  //console.log('imprimio: ', dictUpdate);

  await updateDoc(doc(db, 'subs', item), dictUpdate);
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

export async function getSubData(user) {
  const docRef = doc(db, 'users', user);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data().data;
  var contId = 1;
  var preguntas = [];
  if (data === undefined) return preguntas;

  for (var key in data) {
    var aspectos = [];
    var identificacion = [];
    var sustenta = [];

    if (typeof data[key][0] != 'undefined') {
      //console.log('------------------');
      //console.log('pasoif: ', typeof data[key][0].aspectos);
      if (typeof data[key][0].aspectos != 'string') {
        for (var i in data[key][0].aspectos) {
          var dictA = {};
          dictA.id = contId * 10 + 1;
          dictA.name = data[key][0].aspectos[i];
          aspectos.push(dictA);
          contId = contId + 100;
        }
      } else {
        var dictA1 = {};
        dictA1.id = contId * 10 + 1;
        dictA1.name = data[key][0].aspectos;
        aspectos.push(dictA1);
      }
      if (typeof data[key][0].identProblema != 'string') {
        for (var j in data[key][0].identProblema) {
          var dictI = {};
          dictI.id = contId * 10 + 2;
          dictI.name = data[key][0].identProblema[j];
          identificacion.push(dictI);
          contId = contId + 1000;
        }
      } else {
        var dictI1 = {};
        dictI1.id = contId * 10 + 2;
        dictI1.name = data[key][0].identProblema;
        identificacion.push(dictI1);
      }
      if (typeof data[key][0].identProblema != 'string') {
        for (var k in data[key][0].sustentar) {
          var dictS = {};
          dictS.id = contId * 10 + 3;
          dictS.name = data[key][0].sustentar[k];
          sustenta.push(dictS);
          contId = contId + 10000;
        }
      } else {
        var dictS1 = {};
        dictS1.id = contId * 10 + 3;
        dictS1.name = data[key][0].sustentar[k];
        sustenta.push(dictS1);
      }
    }

    var dictPre = {};
    dictPre.id = contId;
    dictPre.name = key;
    dictPre.children = [
      { id: contId + 1, name: 'aspectos', children: aspectos },
      { id: contId + 2, name: 'identificacion', children: identificacion },
      { id: contId + 3, name: 'sustenta', children: sustenta },
    ];
    contId = contId + 5;
    preguntas.push(dictPre);
    // console.log(dictPre)
  }
  return preguntas;
}

export async function sumTotalResults(item) {
  console.log(item);
  //const docRef = doc(db, 'subs', item);
  //const docSnap = await getDoc(docRef);
  // const sub01 = docSnap.get('sub01')
  // const arrSubs = [
  //   'sub01',
  //   'sub02',
  //   'sub03',
  //   'sub04',
  //   'sub05',
  //   'sub06',
  //   'sub07',
  //   'sub08',
  //   'sub09',
  //   'sub10',
  //   'sub11',
  //   'sub12',
  //   'sub13',
  //   'sub14',
  // ];

  // arrSubs.forEach((element) => {
  //   //console.log(element, ': ', docSnap.get(element));
  // });

  //console.log('---------------------------------');
}
