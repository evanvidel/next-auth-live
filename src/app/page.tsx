import Posts from "@/components/posts/page";

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Error fetching posts");
  }
  return res.json();
}
  
export default  async function Home() {
  const data = await getPosts()
  return <main className="mx-2 py-2">
    <Posts data={data}/>
  </main>;
}
