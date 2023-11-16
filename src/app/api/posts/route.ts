import client from "../../../../prisma/client";

export async function GET(request: Request) {

  
  /* await client.post.create({
    data:{
      content: "bis error reiciendis numquam, at architecto dolor quae eveniet maiores.",
      authorId:userId
    }
  })
  await client.post.create({
    data:{
      content: "bis error reiciendis numquam, at architecto dolor quae eveniet maiores.",
      authorId:userId
    }
  })
  await client.post.create({
    data:{
      content: "bis error reiciendis numquam, at architecto dolor quae eveniet maiores.",
      authorId:userId
    }
  }) */
  const allPosts = await client.post.findMany();
  return new Response(JSON.stringify(allPosts));
}
