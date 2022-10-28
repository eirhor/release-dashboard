## Deno Cron Job:
# Persist Release Data in Firestore DB

On the regular, this app fetches release data from Github API and stores that data in Firebase (Firestore DB, "releases" collection).

It repeats this every hour.

## Usage
1. Go to [Deno Deploy](https://deno.com/deploy).
   - Sign up/in.
   - Select this repo
   - select the Deno.json file in this folder as index,
   - select master as the branch to deploy from
3. In **Deno Deploy dashboard**:  
   Add a valid Github ABP access token as the environment variable **GITHUB_TOKEN**
4. Run the deploy


## Processes / logic 
✔️  **Get data about the releases**
- ✔️ Authenticate with GitHub API access token
- ✔️ Get releases from GitHub API, but...
- ✔️ Only for NEW releases  
    ⬆️ Except, this is not supported by Github API. Instead, we:
    * ✔️ Get the newest release stored in database
    * ✔️ compare released_at date and id, and
    * ✔️ terminate on first duplicate id
- ✔️ Step through the pagination

✔️ **Process release data** Filter out any releases:
- ✔️ without a body, and/or
- ✔️ no MD H3 tag in body

✔️ **Save data in FireStore**
   - ✔️ just include all of the data
   - ❓  We could strip out the "author" details, tho

❗ **Make it a cron job**
- Do this **once a day**
- Or once an hour, maybe
- Could also use a webhook/callback, probably...

❗ **Deploy**
- Set it free, with **Deno Deploy**
- Let it run. Forever.