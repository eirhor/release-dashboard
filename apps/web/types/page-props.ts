import type { ParsedUrlQuery } from "querystring";

export interface IPageProps {
  params: ParsedUrlQuery;
  searchParams: ParsedUrlQuery;
}
