
import { doc, getDoc, getDocs, collection, updateDoc } from "firebase/firestore";
import { db, auth } from "../firebase/configFirebase";
import { setSub01, setSub02, setSub03, setSub04, setSub05, setSub06, setSub09, setSub10, sumTotalResults } from "./getSubScores";

export async function getFirebaseData() {
  const userUid = auth.currentUser.uid;

  const docRef = doc(db, "users", userUid);
  const docSnap = await getDoc(docRef);

  return docSnap.get('admin');
}

export async function getListStudentsAllAnswers() {

  var studentList = [];
  const querySnapshot = await getDocs(collection(db, "users"));

  querySnapshot.forEach((doc) => {
    var tempArray = doc.data().data


    if(typeof tempArray != "undefined"){
      if(vaidateAllAnswers(tempArray)){
        studentList.push(doc.data())
      }
      
    }

  });
  console.log("Lenght => ",studentList.length)
  return studentList;
}

export async function getListStudents() {

  var studentList = [];
  const querySnapshot = await getDocs(collection(db, "users"));

  querySnapshot.forEach((doc) => {
    var item = doc.data()
    var tempArray = item.data

    if(typeof tempArray != "undefined"){
      if(item.admin === undefined){
        studentList.push(doc.data())
        console.log(typeof doc.data())
        setEmail(doc.id)
        setSub01(doc.id)
        setSub02(doc.id)
        setSub03(doc.id)
        setSub04(doc.id)
        setSub05(doc.id)
        setSub06(doc.id)
        setSub09(doc.id)
        setSub10(doc.id)
        sumTotalResults(doc.id)
      }
      
    }

  });
  console.log("Lenght => ",studentList.length)
  return studentList;
}

const vaidateAllAnswers = (item) => {
  if(typeof item.pregunta1 != "undefined"
  && typeof item.pregunta2 != "undefined"
  && typeof item.pregunta3 != "undefined"
  && typeof item.pregunta4 != "undefined"
  && typeof item.pregunta5 != "undefined"
  && typeof item.pregunta5p2 != "undefined"
  && typeof item.pregunta6 != "undefined"
  && typeof item.pregunta6p2 != "undefined"
  && typeof item.pregunta6p3 != "undefined"){
  return true

}
return false
}

export async function setEmail(item){
  await updateDoc(doc(db, "users", item), {
    email: item
  });
}

