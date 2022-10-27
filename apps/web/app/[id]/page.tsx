import type { ParsedUrlQuery } from "querystring";

export const fetchReleaseDetails = (id: string) => {
  return fetch(
    `https://api.github.com/repos/Geta/component-libraries/releases/${id}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: "Bearer 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",
      },
    }
  ).then((r) => r.json());
};

export interface IPageProps {
  params: ParsedUrlQuery;
  searchParams: ParsedUrlQuery;
}

export default async function Page({ params }: IPageProps) {
  const data = await fetchReleaseDetails(params["id"] as string);

  return <section>Release details here</section>;
}
