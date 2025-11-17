import { db } from "./firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export async function saveProject(project: {
  title: string;
  description: string;
  imageUrl: string;
}) {
  await addDoc(collection(db, "projects"), {
    ...project,
    createdAt: Timestamp.now(),
  });
}
