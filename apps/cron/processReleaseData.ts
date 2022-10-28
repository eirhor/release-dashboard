import { doc, setDoc } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js'
import { getReleases } from './getNewReleases.ts';
import { newestReleaseDateInFirebase } from './newestReleaseDateInFirebase.ts';

function persistRelease(db: any, newestTimestamp: number, id: number, count: number): any {
    return async (release) => { 
        
        if (new Date(release.published_at).getTime() > newestTimestamp  && release.id !== id) {
           //  await setDoc(doc(db, "releases", release.tag_name), release); 
            console.log("%cPersisted to Firestore DB:", "color: green; font-weight: bold;", release.tag_name);
            return [true, ++count];
        }

        if (release.id === id) {
            console.info(`%cTerminating%c Release %c${release.tag_name}%c has already been imported.\tRelease data import terminated.`, "color: green; font-weight: bold;", "color: unset; font-weight: unset;","color: blue;","color: unset;");
        }
        
        return [false, count];
    };
}


export async function processReleaseData(db, currentPage = 0, persistedCount = 0) {
    const releases = await getReleases(currentPage);
    const [published_at, id] = await newestReleaseDateInFirebase(db);
    const timestamp = new Date(published_at).getTime();
    let resume = true;

    if (releases.length && resume) {
        [resume, persistedCount] = releases
        .filter(release => release.body?.match(/###/))
        .map(persistRelease(db, timestamp, id, persistedCount))

        
        if (resume) { // Try another page:
            processReleaseData(db, ++currentPage, persistedCount);
        } else {
            return persistedCount;
        }
    }

    return persistedCount;
}