import { config } from "https://deno.land/x/dotenv/mod.ts";

const GITHUB_TOKEN = config().GITHUB_TOKEN;

export async function getReleases() {
    const releases = await fetch('https://api.github.com/repos/Geta/component-libraries/releases', {
        headers: { 
            Authorization: `bearer ${GITHUB_TOKEN}` },
    }).then(response => response.json());
    return releases;
}