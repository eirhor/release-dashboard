import Image from "next/image";
import { BsTag, BsArrowLeft } from "react-icons/bs";
import { FiGitCommit } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import { getReleaseDetails } from "../../utils/get-release-details";
import { IPageProps } from "../../types/page-props";
import { formatDate } from "../../utils/format-date";
import Link from "next/link";

export default async function Page({ params }: IPageProps) {
  const data = await getReleaseDetails(params["id"] as string);

  return (
    <section className={"grid p-6 lg:grid-cols-3"}>
      <Link
        href={"/"}
        className={"mb-6 flex flex-nowrap items-center hover:underline"}
      >
        <BsArrowLeft className={"mr-2"} />
        <span>Back to list</span>
      </Link>
      <h1
        className={
          "mb-3 text-5xl font-bold tracking-wide lg:col-span-3 lg:col-start-1"
        }
      >
        {data.tag_name}
      </h1>
      <span className={"flex flex-nowrap items-center lg:col-start-1"}>
        <Image
          className={"mr-1 object-contain"}
          src={data.author.avatar_url}
          alt={data.author.login}
          width={20}
          height={20}
        />
        <p>
          <strong>{data.author.login}</strong> released this{" "}
          {formatDate(data.published_at)}
        </p>
      </span>
      <p className={"flex flex-nowrap items-center lg:col-start-2"}>
        <BsTag className={"mr-1"} />
        <span>{data.tag_name}</span>
      </p>
      <p className={"flex flex-nowrap items-center lg:col-start-3"}>
        <FiGitCommit className={"mr-1"} />
        <span>{data.target_commitish}</span>
      </p>
      <div
        className={
          "mt-6 border-t-2 border-slate-500 pt-6 lg:col-span-3 lg:col-start-1"
        }
      >
        <ReactMarkdown className={"markdown"}>{data.body}</ReactMarkdown>
      </div>
    </section>
  );
}
