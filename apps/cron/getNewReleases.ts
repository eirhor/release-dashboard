import { config } from "https://deno.land/x/dotenv/mod.ts";

const GITHUB_TOKEN = config().GITHUB_TOKEN;

export async function getReleases(page = 0, per_page = 100) {
    const releases = await fetch(`https://api.github.com/repos/Geta/component-libraries/releases?page=${page}&per_page=${per_page}`, {
        headers: { 
            Authorization: `bearer ${GITHUB_TOKEN}` },
    }).then(response => response.json());
    return releases;
}