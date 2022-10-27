export async function processReleaseData(releaseData) {
    const filteredReleases = releaseData.filter(release => release.body?.match(/###/))

    filteredReleases.map(release => {
        console.log({tag_name: release.tag_name, body: release.body})
    });

    console.info("%c------------------------------------------------------", "color: yellow;")

    // put the filtered releases in firestore

    return true;

    


}