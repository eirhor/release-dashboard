import { doc, setDoc } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js'
import { getReleases } from './getNewReleases.ts';
import { newestReleaseDateInFirebase } from './newestReleaseDateInFirebase.ts';
import { log, logType } from './util/log.ts';

function persistRelease(db: any, newestTimestamp: number, id: number, count: number, setResume: (newValue: boolean)=>void): any {
    return async (release) => { 
        console.log("%cProcessing\t", "color: blue; font-weight: bold;", release.tag_name);
        
        if (new Date(release.published_at).getTime() > newestTimestamp && release.id !== id) {
           //  await setDoc(doc(db, "releases", release.tag_name), release); 
            console.log("%cPersisted:\t", "color: lightgreen; font-weight: bold;", release.tag_name);
            setResume(true)
            return ++count;
        } 

        console.info(`%cTerminating%c\tRelease %c${release.tag_name}%c has already been imported.`, "color: green; font-weight: bold;", "color: unset; font-weight: unset;","color: blue;","color: unset;");
        setResume(false);
        return count;
    };
}


export async function processReleaseData(db, currentPage = 0, persistedCount = 0) {
    const releases = await getReleases(currentPage);
    const [published_at, id] = await newestReleaseDateInFirebase(db);
    const timestamp = new Date(published_at).getTime();

    let resume = false;
    const setResume = (newValue: boolean) => resume = newValue;

    console.info(`%cIteration #${currentPage + 1}%c\tFetched data on ${releases.length} fresh releases from Github API.`, "color: green; font-weight: bold;", "color: unset; font-weight: unset;");

    if (releases.length) {
        [persistedCount] = await releases
            .filter(release => release.body?.match(/###/))
            .map(async () => await persistRelease(db, timestamp, id, persistedCount, setResume))
        
        if (resume) { // Try another page:
            console.info(`%cIteration #${currentPage + 1}%c\tComplete. Data on ${releases.length} releases was processed; ${persistedCount} have been persisted.`, "color: green; font-weight: bold;", "color: unset; font-weight: unset;");            
            processReleaseData(db, ++currentPage, persistedCount);
        } else {
            log(logType.success, `Data on ${persistedCount} releases were persisted to firestore.`);
            return persistedCount;
        }
    }
}