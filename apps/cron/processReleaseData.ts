import { doc, setDoc } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js'
import { getReleases } from './getNewReleases.ts';

function persistRelease(db: any): any {
    return async (release) => { 
       //  await setDoc(doc(db, "releases", release.tag_name), release); 
        console.log("%cPersisted to Firestore DB:", "color: green; font-weight: bold;", release.tag_name);
    };
}


export async function processReleaseData(db, pageCount = 0) {
    const releases = await getReleases(pageCount);

    console.log("# of 'new' releases", releases.length)

    if (releases.length) {
        releases
        .filter(release => release.body?.match(/###/))
        .map(persistRelease(db))
        
        // Try another page:
        processReleaseData(db, ++pageCount)
    }

    return;
}