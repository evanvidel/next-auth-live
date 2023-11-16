import client from "../../../prisma/client";

export async function GET(request: Request) {
  const allPosts = await client.user.findMany();

  return new Response(JSON.stringify(allPosts));
}
