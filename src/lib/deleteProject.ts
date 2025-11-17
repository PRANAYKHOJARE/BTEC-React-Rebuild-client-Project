import { db } from "./firebase";
import { doc, deleteDoc } from "firebase/firestore";

export async function deleteProject(id: string) {
  await deleteDoc(doc(db, "projects", id));
}
