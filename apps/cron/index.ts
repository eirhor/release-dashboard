import { getReleases } from './getNewReleases.ts';
import { processReleaseData } from './processReleaseData.ts';
// import {cron, everyMinute, daily, monthly, weekly} from 'https://deno.land/x/deno_cron/cron.ts';


// This should be cron'ed:
const processednewReleases =  await processReleaseData(
    await getReleases()

    // Remember to also step through the github pagination so we get all releases!
);




// Run getNewReleases once a day, using a cron job.

/* Cron example:
    everyMinute(()=>{console.log("Runs every minute")});
*/



/* 
Get data about the releases
    ✔️ Authenticate with a github API token
    ✔️ Get new releases (from the relevant Git API endpoint)
        Remember! Step through the pagination

✔️ Process release data
    Filter out any releases 
        ✔️ without a body, and/or
        ✔️ no MD H3 tag in body

Save (push) the new releases in FireStore:
    body
    date
    version
    ...rest (?) - could potentially push all of it. 

Make a cron job that does this:
    once a day?
    once an hour?

Deploy with Deno Deploy. Let it simmer.
*/