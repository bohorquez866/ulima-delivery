import {
  doc,
  getFirestore,
  setDoc,
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { db } from './configFirebase';

export const saveFirebaseData = (data) => {
  const db = getFirestore();
  const auth = getAuth();

  const userEmail = auth.currentUser.email;
  const docRef = doc(db, 'users', userEmail);

  setDoc(docRef, { data }, { merge: true });
};

export async function setDefaultSubs() {
  const auth = getAuth();
  const item_id = auth.currentUser.email;
  let questions = {
    '1a': 0,
    '1b': 0,
    '1c': 0,
    '2a': 0,
    '2b': 0,
    '2c': 0,
  };
  let defaultSubs = {};
  for (let index = 1; index <= 14; index++) {
    defaultSubs[`sub${index < 10 ? 0 : ''}${index}`] = questions;
  }
  await setDoc(doc(db, 'subs', item_id), defaultSubs, { merge: true });
}

// export async function setSub01() {
//   const auth = getAuth();
//   const item_id = auth.currentUser.email;

//   var dict = {
//     '1a': 0,
//     '1b': 0,
//     '1c': 0,
//     '2a': 1,
//     '2b': 1,
//     '2c': 0,
//   };
//   const docRef = doc(db, 'users', item_id);
//   const docSnap = await getDoc(docRef);
//   const data = docSnap.get('data');
//   var borrador = 0;
//   var solucion = 0;

//   /////////////// get 1a
//   try {
//     const pregunta1 = data['pregunta1'];
//     if (pregunta1.length === 1) {
//       dict['1a'] = 1;
//     } else if (pregunta1.length > 1) {
//       borrador = 0;
//       solucion = 0;
//       pregunta1.forEach((element) => {
//         if (element['solucion'] === 'solucion') {
//           solucion += 1;
//         } else {
//           borrador += 1;
//         }
//       });
//       if (borrador == 1 && solucion == 1) {
//         dict['1a'] = 3;
//       } else if ((borrador > 1) & (solucion == 1)) {
//         dict['1a'] = 5;
//       }
//     }
//     /////////////// get 1b
//     const pregunta2 = data['pregunta2'];
//     if (pregunta2.length === 1) {
//       dict['1b'] = 1;
//     } else if (pregunta2.length > 1) {
//       borrador = 0;
//       solucion = 0;
//       pregunta2.forEach((element) => {
//         if (element['solucion'] === 'solucion') {
//           solucion += 1;
//         } else {
//           borrador += 1;
//         }
//       });

//       if (borrador == 1 && solucion == 1) {
//         dict['1b'] = 3;
//       } else if ((borrador > 1) & (solucion == 1)) {
//         dict['1b'] = 5;
//       }
//     }
//     /////////////// get 1c
//     const pregunta3 = data['pregunta3'];
//     if (pregunta3.length === 1) {
//       dict['1c'] = 1;
//     } else if (pregunta3.length > 1) {
//       borrador = 0;
//       solucion = 0;
//       pregunta3.forEach((element) => {
//         if (element['solucion'] === 'solucion') {
//           solucion += 1;
//         } else {
//           borrador += 1;
//         }
//       });

//       if (borrador == 1 && solucion == 1) {
//         dict['1c'] = 3;
//       } else if ((borrador > 1) & (solucion == 1)) {
//         dict['1c'] = 5;
//       }
//     }
//     ////////////// get 2a
//     const pregunta4 = data['pregunta4'];
//     if (pregunta4.length === 1) {
//       if (pregunta4[0]['cumplio'] === 'si') {
//         dict['2a'] = 5;
//       } else {
//         dict['2a'] = 3;
//       }
//     }
//     ////////////// get 2a
//     const pregunta5 = data['pregunta5'];
//     if (pregunta5.length === 1) {
//       if (pregunta5[0]['cumplio'] === 'si') {
//         dict['2b'] = 5;
//       } else {
//         dict['2b'] = 3;
//       }
//     }

//     const subsRef = doc(db, 'subs', item_id);
//     await setDoc(subsRef, { sub01: dict }, { merge: true });
//   } catch (error) {
//     const subsRef = doc(db, 'subs', item_id);
//     await setDoc(subsRef, { sub01: dict }, { merge: true });
//     console.log('');
//   }

//   const subsRef = doc(db, 'subs', item_id);
//   await setDoc(
//     subsRef,
//     {
//       process: true,
//     },
//     { merge: true },
//   );
// }

// //falta IM
// export async function setSub02() {
//   const auth = getAuth();
//   const item = auth.currentUser.email;

//   var dict = {
//     '1a': 0,
//     '1b': 0,
//     '1c': 0,
//     '2a': 0,
//     '2b': 0,
//     '2c': 0,
//   };
//   const docRef = doc(db, 'users', item);
//   const docSnap = await getDoc(docRef);
//   const data = docSnap.get('data');

//   // var borrador = 0
//   // var solucion = 0

//   /////////////// get 1a
//   try {
//     const pregunta1 = data['pregunta1'];

//     console.log(pregunta1);
//   } catch (error) {
//     await updateDoc(doc(db, 'subs', item), {
//       sub02: dict,
//     });
//   }
//   await updateDoc(doc(db, 'users', item), {
//     process: true,
//   });
// }

// export async function setSub03() {
//   const auth = getAuth();
//   const item = auth.currentUser.email;
//   const item_id = item;

//   var dict = {
//     '1a': 0,
//     '1b': 0,
//     '1c': 0,
//     '2a': 1,
//     '2b': 1,
//     '2c': 1,
//   };
//   const docRef = doc(db, 'users', item_id);
//   const docSnap = await getDoc(docRef);
//   const data = docSnap.get('data');

//   /////////////// get 1a
//   try {
//     const pregunta1 = data['pregunta1'];
//     if (pregunta1.length === 1) {
//       dict['1a'] = 1;
//     } else if (pregunta1.length > 1) {
//       let optima = false;
//       pregunta1.forEach((element) => {
//         if (element.optima === 'T') optima = true;
//       });
//       if (!optima) {
//         dict['1a'] = 3;
//       } else {
//         dict['1a'] = 5;
//       }
//     }
//     /////////////// get 1b
//     const pregunta2 = data['pregunta2'];
//     if (pregunta2.length === 1) {
//       dict['1b'] = 1;
//     } else if (pregunta2.length > 1) {
//       let optima = false;
//       pregunta2.forEach((element) => {
//         if (element.optima === 'T') optima = true;
//       });
//       if (!optima) {
//         dict['1b'] = 3;
//       } else {
//         dict['1b'] = 5;
//       }
//     }
//     /////////////// get 1c
//     const pregunta3 = data['pregunta3'];
//     if (pregunta3.length === 1) {
//       dict['1c'] = 1;
//     } else if (pregunta3.length > 1) {
//       let optima = false;
//       pregunta3.forEach((element) => {
//         if (element.optima === 'T') optima = true;
//       });
//       if (!optima) {
//         dict['1c'] = 3;
//       } else {
//         dict['1c'] = 5;
//       }
//     }
//     ////////////// get 2a
//     const pregunta4 = data['pregunta4'];
//     if (pregunta4.length === 1) {
//       if (pregunta4[0]['cumplio'] === 'si') {
//         if (pregunta4[0].errores === 0) dict['2a'] = 5;
//         else dict['2a'] = 3;
//       }
//     }
//     ////////////// get 2b
//     const pregunta5 = data['pregunta5'];
//     if (pregunta5.length === 1) {
//       if (pregunta5[0]['cumplio'] === 'si') {
//         if (pregunta5[0].errores === 0) dict['2b'] = 5;
//         else dict['2b'] = 3;
//       }
//     }

//     ////////////// get 2c falta nose de que parte es es de la 6 pero cual aprte
//     // const pregunta5p2 = data['pregunta5p2'];
//     // if (pregunta5.length === 1) {
//     //   if (pregunta5[0]['cumplio'] === 'si') {
//     //     if (pregunta5[0].errores === 0) dict['2b'] = 5;
//     //     else dict['2b'] = 3;
//     //   }
//     // }
//     await updateDoc(doc(db, 'subs', item), {
//       sub03: dict,
//     });
//   } catch (error) {
//     await updateDoc(doc(db, 'subs', item), {
//       sub03: dict,
//     });
//   }

//   return docSnap.get('admin');
// }

// export async function setSub04() {
//   const auth = getAuth();
//   const item = auth.currentUser.email;
//   const item_id = item;

//   var dict = {
//     '1a': 0,
//     '1b': 0,
//     '1c': 0,
//     '2a': 0,
//     '2b': 1,
//     '2c': 1,
//   };
//   const docRef = doc(db, 'users', item_id);
//   const docSnap = await getDoc(docRef);
//   const data = docSnap.get('data');

//   try {
//     /////////////// get 5
//     const pregunta5 = data['pregunta5'];
//     const errores = pregunta5[0].error;

//     if (errores == 0) {
//       dict['2b'] = 5;
//     } else if (errores > 0) {
//       dict['2b'] = 3;
//     }
//     /////////////// get 6
//     const pregunta6 = data['pregunta6'];
//     const pregunta6p2 = data['pregunta6p2'];
//     if (pregunta6[0].cumplio === 'si' && pregunta6p2[0].cumplio === 'si') {
//       dict['2c'] = 5;
//     } else if (
//       pregunta6[0].cumplio === 'si' ||
//       pregunta6p2[0].cumplio === 'si'
//     ) {
//       dict['2c'] = 3;
//     }

//     await updateDoc(doc(db, 'subs', item), {
//       sub04: dict,
//     });
//   } catch (error) {
//     await updateDoc(doc(db, 'subs', item), {
//       sub04: dict,
//     });
//   }
// }

// export async function setSub05() {
//   const auth = getAuth();
//   const item = auth.currentUser.email;
//   const item_id = item;

//   var dict = {
//     '1a': 0,
//     '1b': 0,
//     '1c': 0,
//     '2a': 0,
//     '2b': 0,
//     '2c': 1,
//   };
//   const docRef = doc(db, 'users', item_id);
//   const docSnap = await getDoc(docRef);
//   const data = docSnap.get('data');

//   /////////////// get 5p2
//   try {
//     const pregunta5p2 = data['pregunta5p2'];
//     const condicional = pregunta5p2[0].condicional;
//     const repetir = pregunta5p2[0].for;
//     const cumplio = pregunta5p2[0].cumplio;

//     if (condicional < 2) {
//       dict['2b'] = 1;
//     } else if (condicional >= 2 && cumplio != 'si') {
//       dict['2b'] = 3;
//     } else if (cumplio === 'si' && condicional > 0 && repetir > 0) {
//       dict['2b'] = 5;
//     }
//     /////////////// get 6
//     const pregunta6 = data['pregunta6'];
//     const cumplioP6 = pregunta6[0].cumplio;
//     if (condicional < 2) {
//       dict['2c'] = 1;
//     } else if (cumplioP6 != 'si') {
//       dict['2c'] = 3;
//     } else if (cumplioP6 === 'si' && condicional > 0 && repetir > 0) {
//       dict['2c'] = 5;
//     }

//     await updateDoc(doc(db, 'subs', item), {
//       sub05: dict,
//     });
//   } catch (error) {
//     await updateDoc(doc(db, 'subs', item), {
//       sub05: dict,
//     });
//   }
// }

// export async function setSub06() {
//   const auth = getAuth();
//   const item = auth.currentUser.email;
//   const item_id = item;

//   var dict = {
//     '1a': 0,
//     '1b': 0,
//     '1c': 0,
//     '2a': 0,
//     '2b': 0,
//     '2c': 1,
//   };
//   const docRef = doc(db, 'users', item_id);
//   const docSnap = await getDoc(docRef);
//   const data = docSnap.get('data');

//   /////////////// get 5p2
//   try {
//     /////////////// get 5p2
//     const pregunta5p2 = data['pregunta5p2'];
//     const condicional = pregunta5p2[0].condicional;
//     const repetir = pregunta5p2[0].for;
//     const cumplio = pregunta5p2[0].cumplio;

//     if (condicional < 2) {
//       dict['2b'] = 1;
//     } else if (repetir >= 2 && cumplio != 'si') {
//       dict['2b'] = 3;
//     } else if (cumplio === 'si' && condicional > 0 && repetir > 0) {
//       dict['2b'] = 5;
//     }
//     /////////////// get 6p2
//     const pregunta6p2 = data['pregunta6p2'];
//     const cumplioP6 = pregunta6p2[0].cumplio;
//     if (condicional < 2) {
//       dict['2c'] = 1;
//     } else if (cumplioP6 != 'si') {
//       dict['2c'] = 3;
//     } else if (cumplioP6 === 'si' && repetir > 0) {
//       dict['2c'] = 5;
//     }

//     await updateDoc(doc(db, 'subs', item), {
//       sub06: dict,
//     });
//   } catch (error) {
//     await updateDoc(doc(db, 'subs', item), {
//       sub06: dict,
//     });
//   }
// }

// export async function setSub09() {
//   const auth = getAuth();
//   const item = auth.currentUser.email;
//   const item_id = item;

//   var dict = {
//     '1a': 0,
//     '1b': 0,
//     '1c': 0,
//     '2a': 1,
//     '2b': 1,
//     '2c': 1,
//   };
//   const docRef = doc(db, 'users', item_id);
//   const docSnap = await getDoc(docRef);
//   const data = docSnap.get('data');

//   try {
//     /////////////// get 1
//     const pregunta1 = data['pregunta1'];
//     var errores = pregunta1[0].error;
//     var cumplio = pregunta1[0].cumplio;

//     if (errores > 2 && cumplio === 'si') {
//       dict['2b'] = 1;
//     } else if (errores > 0 && cumplio === 'si') {
//       dict['2b'] = 3;
//     } else if (cumplio === 'si') {
//       dict['2b'] = 5;
//     }
//     /////////////// get 2
//     const pregunta2 = data['pregunta2'];
//     errores = pregunta2[0].error;
//     cumplio = pregunta2[0].cumplio;

//     if (errores > 2 && cumplio === 'si') {
//       dict['2b'] = 1;
//     } else if (errores > 0 && cumplio === 'si') {
//       dict['2b'] = 3;
//     } else if (cumplio === 'si') {
//       dict['2b'] = 5;
//     }

//     /////////////// get 4
//     const pregunta4 = data['pregunta4'];
//     errores = pregunta4[0].error;
//     cumplio = pregunta4[0].cumplio;

//     if (errores > 2 && cumplio === 'si') {
//       dict['2b'] = 3;
//     } else if (errores > 0 && cumplio === 'si') {
//       dict['2b'] = 5;
//     }

//     /////////////// get 5
//     const pregunta2b = data['pregunta5'];
//     errores = pregunta2b[0].error;
//     cumplio = pregunta2b[0].cumplio;

//     if (errores > 3 && cumplio === 'si') {
//       dict['2b'] = 1;
//     } else if (errores > 0 && cumplio === 'si') {
//       dict['2b'] = 3;
//     }

//     /////////////// get 6
//     const pregunta2c = data['pregunta6'];
//     errores = pregunta2c[0].error;
//     cumplio = pregunta2c[0].cumplio;

//     if (errores > 2 && cumplio === 'si') {
//       dict['2b'] = 1;
//     } else if (errores > 0 && cumplio === 'si') {
//       dict['2b'] = 3;
//     } else if (cumplio === 'si') {
//       dict['2b'] = 5;
//     }
//     await updateDoc(doc(db, 'subs', item), {
//       sub09: dict,
//     });
//   } catch (error) {
//     await updateDoc(doc(db, 'subs', item), {
//       sub09: dict,
//     });
//   }
// }

// export async function setSub10() {
//   const auth = getAuth();
//   const item = auth.currentUser.email;
//   const item_id = item;

//   var dict = {
//     '1a': 1,
//     '1b': 0,
//     '1c': 1,
//     '2a': 1,
//     '2b': 1,
//     '2c': 1,
//   };
//   const docRef = doc(db, 'users', item_id);
//   const docSnap = await getDoc(docRef);
//   const data = docSnap.get('data');

//   try {
//     /////////////// get 1
//     const pregunta1 = data['pregunta1'];
//     var cumplio = pregunta1[0].cumplio;
//     var borrador = 0;

//     pregunta1.forEach((element) => {
//       if (element['solucion'] === 'borrador') {
//         borrador += 1;
//       }
//     });

//     if (borrador >= 3 && cumplio === 'si') {
//       dict['2b'] = 3;
//     } else if (cumplio === 'si') {
//       dict['2b'] = 5;
//     }
//     /////////////// get 3
//     const pregunta3 = data['pregunta3'];
//     cumplio = pregunta3[0].cumplio;
//     borrador = 0;

//     pregunta3.forEach((element) => {
//       if (element['solucion'] === 'borrador') {
//         borrador += 1;
//       }
//     });

//     if (borrador >= 3 && cumplio === 'si') {
//       dict['2b'] = 3;
//     } else if (cumplio === 'si') {
//       dict['2b'] = 5;
//     }

//     /////////////// get 4
//     const pregunta4 = data['pregunta4'];
//     cumplio = pregunta4[0].cumplio;
//     var tiempo = pregunta4[0].tiempo;

//     if (tiempo <= 180 && cumplio != 'si') {
//       dict['2b'] = 3;
//     } else if (cumplio === 'si') {
//       dict['2b'] = 5;
//     }

//     /////////////// get 5
//     const pregunta5 = data['pregunta5'];
//     cumplio = pregunta5[0].cumplio;
//     tiempo = pregunta5[0].tiempo;

//     if (tiempo <= 180 && cumplio != 'si') {
//       dict['2b'] = 3;
//     } else if (cumplio === 'si') {
//       dict['2b'] = 5;
//     }

//     /////////////// get 6
//     const pregunta6 = data['pregunta6'];
//     const pregunta6p2 = data['pregunta6p2'];
//     cumplio = pregunta6[0].cumplio;
//     tiempo = pregunta6[0].tiempo;
//     var cumplio2 = pregunta6p2[0].cumplio;
//     var tiempo2 = pregunta6p2[0].tiempo;

//     if (
//       tiempo <= 180 &&
//       cumplio != 'si' &&
//       tiempo2 <= 180 &&
//       cumplio2 != 'si'
//     ) {
//       dict['2b'] = 3;
//     } else if (cumplio === 'si' && cumplio2 === 'si') {
//       dict['2b'] = 5;
//     }

//     await updateDoc(doc(db, 'subs', item), {
//       sub10: dict,
//     });
//   } catch (error) {
//     await updateDoc(doc(db, 'subs', item), {
//       sub10: dict,
//     });
//   }
// }
