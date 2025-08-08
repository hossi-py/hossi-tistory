import { githubFetch } from "@/lib/github";

export default async function ProjectsPage() {
  const user = await githubFetch("/user");

  return (
    <div>
      {JSON.stringify(user)}
      {/* <h1>Projects</h1> */}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {/* <h1>Page</h1> */}
    </div>
  );
}
