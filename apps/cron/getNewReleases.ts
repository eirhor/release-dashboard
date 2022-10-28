import { config } from "https://deno.land/x/dotenv/mod.ts";

const GITHUB_TOKEN = config().GITHUB_TOKEN;

export async function getReleases(currentPage = 0, per_page = 30) {
    console.log("%cFetching data\t", "color: blue; font-weight: bold;", `Getting batch #${currentPage + 1} of release data from Github (${per_page} releases per request).`);
    const releases = await fetch(`https://api.github.com/repos/Geta/component-libraries/releases?page=${currentPage}&per_page=${per_page}`, {
        headers: { 
            Authorization: `bearer ${GITHUB_TOKEN}` },
    }).then(response => response.json());
    return releases;
}