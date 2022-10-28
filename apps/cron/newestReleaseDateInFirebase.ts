import { collection, getDocs, query, orderBy, limit } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js'

export async function newestReleaseDateInFirebase(db) {
    const releasesRef = collection(db, "releases");
    let lastPublishedDateInFirestore = null;
    
    const q = query(releasesRef, orderBy("published_at", "desc"), limit(1));
    
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        lastPublishedDateInFirestore = doc.data().published_at;
    });

    return lastPublishedDateInFirestore;
}
