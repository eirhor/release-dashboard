import { processReleaseData } from './processReleaseData.ts';
import { createFirestore } from './setupFireStore.ts';
// import {cron, everyMinute, daily, monthly, weekly} from 'https://deno.land/x/deno_cron/cron.ts';

const db = createFirestore();

//  Cron this. Once a day is OK. Run at 3.37 AM or something
await processReleaseData(db);




/* Cron example:
    everyMinute(()=>{console.log("Runs every minute")});
*/



/* 
❗ Get data about the releases
    ✔️ Authenticate with GitHub API access token
    ✔️ Get releases from GitHub API, but...
    ❗  Only for NEW releases
       Step through the pagination

✔️ Process release data
    Filter out any releases 
        ✔️ without a body, and/or
        ✔️ no MD H3 tag in body

✔️ Save (push) the new releases to FireStore:
   ✔️ just include all of the data.

❗ Only do it for new releases! 
    Get the timestamp from the newest (first) release in DB
    Only fetch releases newer than that timestamp

❗ Make a cron job that does this:
    once a day
    at 3.37 in the night

❗ Deploy with Deno Deploy
    Let it simmer. Forever.

*/