import { processReleaseData } from './processReleaseData.ts';
import { createFirestore } from './setupFireStore.ts';
// import {cron, everyMinute, daily, monthly, weekly} from 'https://deno.land/x/deno_cron/cron.ts';

const db = createFirestore();

//  Cron this. Once a day is OK. Run at 3.37 AM or something
console.info(`%cInitiating%c\tPreparing to fetch release data from Github and store new releases to Firestore.`, "color: green; font-weight: bold;", "color: yellow; font-weight: unset;");
processReleaseData(db);




/* Cron example:
    hourly(()=>{console.log("Runs every hour")});
*/
