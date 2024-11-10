import { auth, db } from './firebase'; 
import { doc, getDoc } from 'firebase/firestore';

export const fetchUserData = async () => {
  try {
    const user = auth.currentUser;
    if (!user) {
      console.log("User is not authenticated.");
      return null;
    }

    const docRef = doc(db, "Users", user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("User document does not exist.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    throw error;
  }
};
