import { collection, getDocs, query, orderBy, limit } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js'

export async function newestReleaseDateInFirebase(db) {
    let published_at, id = null;
    const releasesRef = collection(db, "releases");
    const q = query(releasesRef, orderBy("published_at", "desc"), limit(1));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        published_at  = doc.data().published_at;
        id = doc.data().id;
    });

    return [published_at, id];
}
