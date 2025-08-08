import { githubFetch } from "@/lib/github";
import Image from "next/image";

export default async function ProjectsPage() {
  const user = (await githubFetch("/user")) as any;

  return (
    <div>
      <Image
        src={user?.avatar_url}
        width={50}
        height={50}
        alt="Github User Icon"
      />
      {JSON.stringify(user)}
      {/* <h1>Projects</h1> */}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {/* <h1>Page</h1> */}
    </div>
  );
}
