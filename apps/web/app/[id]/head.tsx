import { IPageProps } from "../../types/page-props";
import { getReleaseDetails } from "../../utils/get-release-details";

export default async function Head({ params }: IPageProps) {
  const data = await getReleaseDetails(params.id as string);

  return (
    <>
      <title>{data.tag_name}</title>
    </>
  );
}
