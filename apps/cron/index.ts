import { processReleaseData } from './processReleaseData.ts';
import { createFirestore } from './setupFireStore.ts';
// import {cron, everyMinute, daily, monthly, weekly} from 'https://deno.land/x/deno_cron/cron.ts';

const db = createFirestore();

//  Cron this. Once a day is OK. Run at 3.37 AM or something
const count = await processReleaseData(db);
console.info(`%c${count}%c releases persisted to Firestore (collection: "releases").`, "color: green; font-weight: bold;", "color: unset; font-weight: unset;");




/* Cron example:
    hourly(()=>{console.log("Runs every hour")});
*/
