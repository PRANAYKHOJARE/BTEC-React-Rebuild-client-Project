import { storage } from "./firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export async function uploadImage(file: File) {
  const fileRef = ref(storage, `projects/${Date.now()}-${file.name}`);

  // Upload file
  await uploadBytes(fileRef, file);

  // Get file URL
  return await getDownloadURL(fileRef);
}
