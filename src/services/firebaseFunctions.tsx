import { db } from './firebaseconfig';
import { addDoc, collection } from 'firebase/firestore/lite';

interface Props {
    collectionName: string;
    data: object;
}

export async function addData( collectionName: string, data: object )  {
    console.log(collectionName);
    console.log(data);
    
    
    try {
        await addDoc(collection(db, collectionName), data);
    } catch (error) {
        console.error("Porra mermão, deu merda!", error);
        
    }
}

