"use client";

export default function Posts({ data }: any) {
  console.log(data);

  return (
    <ul>
      {data.map((post:any) => (
        <li className="m-2 border border-yellow-700 rounded-md ">
          key={post.id}
          {post.content}
        </li>
      ))}
      
    </ul>
  );
}
