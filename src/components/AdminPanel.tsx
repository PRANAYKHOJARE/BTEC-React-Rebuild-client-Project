import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Upload, X, Image as ImageIcon } from "lucide-react";
import { toast } from "sonner";

// Firebase
import { db, storage } from "@/lib/firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

// Upload image and also return the storagePath
async function uploadImage(file: File) {
  const storagePath = `projectImages/${Date.now()}-${file.name}`;
  const storageRef = ref(storage, storagePath);

  await uploadBytes(storageRef, file);
  const downloadUrl = await getDownloadURL(storageRef);

  return { downloadUrl, storagePath };
}

interface ProjectPhoto {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  storagePath: string;
}

const AdminPanel = () => {
  const [photos, setPhotos] = useState<ProjectPhoto[]>([]);
  const [newPhoto, setNewPhoto] = useState({
    title: "",
    description: "",
  });
  const [previewImage, setPreviewImage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Load projects from Firestore
  useEffect(() => {
    const loadProjects = async () => {
      const snap = await getDocs(collection(db, "projects"));
      const firebaseData = snap.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      })) as ProjectPhoto[];

      setPhotos(firebaseData);
    };

    loadProjects();
  }, []);

  // Image preview
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSelectedFile(file);

    const reader = new FileReader();
    reader.onloadend = () => setPreviewImage(reader.result as string);
    reader.readAsDataURL(file);

    toast.success("Image selected!");
  };

  // Add project
  const addPhoto = async () => {
    if (!newPhoto.title || !selectedFile) {
      toast.error("Please enter title and choose image");
      return;
    }

    try {
      // Upload image
      const { downloadUrl, storagePath } = await uploadImage(selectedFile);

      // Save in Firestore with storagePath included
      const docRef = await addDoc(collection(db, "projects"), {
        title: newPhoto.title,
        description: newPhoto.description,
        imageUrl: downloadUrl,
        storagePath: storagePath,
      });

      // Update UI
      setPhotos((prev) => [
        ...prev,
        {
          id: docRef.id,
          title: newPhoto.title,
          description: newPhoto.description,
          imageUrl: downloadUrl,
          storagePath,
        },
      ]);

      toast.success("Project added!");

      // Reset fields
      setNewPhoto({ title: "", description: "" });
      setPreviewImage("");
      setSelectedFile(null);
      (document.getElementById("image-upload") as HTMLInputElement).value = "";
    } catch (err) {
      console.error(err);
      toast.error("Failed to add project");
    }
  };

  // Delete project
  const removePhoto = async (id: string, storagePath: string) => {
    try {
      // Delete Firestore entry
      await deleteDoc(doc(db, "projects", id));

      // Delete image using storagePath (CORRECT)
      const imgRef = ref(storage, storagePath);
      await deleteObject(imgRef);

      // Update UI
      setPhotos((prev) => prev.filter((p) => p.id !== id));

      toast.success("Project removed");
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete project");
    }
  };

  return (
    <div className="py-6">
      <Card className="p-8 shadow-card mb-12">
        <h3 className="text-2xl font-bold mb-6">Add New Project Photo</h3>

        <div className="space-y-4">
          <Input
            placeholder="Project Title"
            value={newPhoto.title}
            onChange={(e) =>
              setNewPhoto({ ...newPhoto, title: e.target.value })
            }
          />

          <Textarea
            placeholder="Project Description"
            value={newPhoto.description}
            onChange={(e) =>
              setNewPhoto({ ...newPhoto, description: e.target.value })
            }
          />

          <div className="border-2 border-dashed p-6 rounded-xl text-center">
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />

            <label htmlFor="image-upload" className="cursor-pointer">
              {previewImage ? (
                <img
                  src={previewImage}
                  className="max-h-64 mx-auto rounded-lg shadow"
                />
              ) : (
                <div className="flex flex-col items-center">
                  <ImageIcon className="w-12 h-12 mb-3 text-muted-foreground" />
                  <p>Click to upload image</p>
                </div>
              )}
            </label>
          </div>

          <Button onClick={addPhoto} className="w-full py-6 text-lg">
            <Upload className="mr-2" /> Add Project Photo
          </Button>
        </div>
      </Card>

      {photos.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold mb-6">Added Projects</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <Card key={photo.id} className="shadow relative group">
                <img
                  src={photo.imageUrl}
                  className="h-48 w-full object-cover"
                />

                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition"
                  onClick={() => removePhoto(photo.id, photo.storagePath)}
                >
                  <X />
                </Button>

                <div className="p-4">
                  <h4 className="font-bold">{photo.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {photo.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
