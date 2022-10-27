export const getReleaseDetails = (id: string) => {
  return fetch(
    `https://api.github.com/repos/Geta/component-libraries/releases/${id}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GH_ACCESS_TOKEN}`,
      },
    }
  ).then((r) => {
    if (r.status !== 200) {
      throw Error(r.statusText);
    }

    return r.json();
  });
};
