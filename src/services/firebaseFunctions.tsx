import { db } from './firebaseconfig';
import { addDoc, collection,getDocs } from 'firebase/firestore/lite';

interface Props {
    collectionName: string;
    data: object;
}

export async function addData( collectionName: string, data: object )  {
    
    try {
        await addDoc(collection(db, collectionName), data);
    } catch (error) {
        console.error("Porra mermão, deu merda!", error);
        
    }
}

export async function getData( collectionName: string )  {
    
    try {
        const citiesRef = collection(db, collectionName);
        const data = await getDocs(citiesRef);

        return data.docs.map((doc) => ({...doc.data(), id: doc.id })   );
    } catch (error) {
        console.error("Porra mermão, deu merda!", error);
        
    }
}