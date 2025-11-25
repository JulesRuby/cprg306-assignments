import { db } from "@app/firebase/config";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
  const items = [];

  try {
    // Reference to the items subcollection for this user
    const itemsCollectionRef = collection(db, "users", userId, "items");

    // Create a query (you can add ordering, filtering, etc. here if needed)
    const firestoreQuery = query(itemsCollectionRef);

    const querySnapshot = await getDocs(firestoreQuery);

    // For each document, add an object to items array with id and data
    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return items;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
}


export async function addItem(userId, item) {
  try {
    const itemsCollectionRef = collection(db, "users", userId, "items");

    // Add the item to the subcollection
    const docRef = await addDoc(itemsCollectionRef, item);

    return docRef.id;
  } catch (error) {
    console.error("Error adding item:", error);
    throw error;
  }
}
