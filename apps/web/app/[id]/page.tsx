import Image from "next/image";
import { BsTag } from "react-icons/bs";
import { FiGitCommit } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import { getReleaseDetails } from "../../utils/get-release-details";
import { IPageProps } from "../../types/page-props";

export default async function Page({ params }: IPageProps) {
  const data = await getReleaseDetails(params["id"] as string);

  return (
    <section>
      <h1>{data.tag_name}</h1>
      <div>
        <span>
          <Image
            src={data.author.avatar_url}
            alt={data.author.login}
            width={20}
            height={20}
          />
          <p>
            <strong>{data.author.login}</strong> released this{" "}
            {data.published_at}
          </p>
        </span>
        <p>
          <BsTag />
          <span>{data.tag_name}</span>
        </p>
        <p>
          <FiGitCommit />
          <span>{data.target_commitish}</span>
        </p>
      </div>
      <div>
        <ReactMarkdown>{data.body}</ReactMarkdown>
      </div>
    </section>
  );
}
