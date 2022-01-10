import { db } from './firebaseconfig';
import { getDocFromServer } from "firebase/firestore";
import { addDoc, collection, getDocs, doc, getDoc, deleteDoc, updateDoc } from 'firebase/firestore/lite';
interface Props {
    collectionName: string;
    data: object;
}

export async function addData( collectionName: string, data: object )  {
    
    try {
        await addDoc(collection(db, collectionName), data);
    } catch (error) {
        console.error("Erro : ", error);
    }

}

export async function getData( collectionName: string )  {
    
    try {
        const citiesRef = collection(db, collectionName);
        const data = await getDocs(citiesRef);
        return data.docs.map((doc) => ({...doc.data(), id: doc.id })   );
        
    } catch (error) {
        console.error("Erro : ", error);
    }

}

export async function getDocument( collectionName: string , docID: string) {
    const docItem = doc(db, collectionName, docID);
    
    try {
        const docData = await getDoc(docItem);
        return docData.data();
    } catch (error) {
        console.log("Erro : ", error);
    }

}

export async function updateClient( collectionName: string , docID: string, dataClient: object ) {
    const docItem = doc(db, collectionName, docID);
    
    try {
        const docData = await updateDoc(docItem, dataClient);
        console.log("Cliente Atualizado : ");
        
    } catch (error) {
        console.log("Erro : ", error);
    }
}

export async function deleteClient(collectionName: string , id: string ) {
    const docItem = doc(db, collectionName, id);
   
    try {
        await deleteDoc(docItem);
    } catch (error) {
        console.error("Erro : ", error);
    }

}
