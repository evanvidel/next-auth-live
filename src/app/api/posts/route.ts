import client from "../../../../prisma/client";

export async function GET(request: Request) {
  const allPosts = await client.post.findMany();
  return Response.json(allPosts);
}
