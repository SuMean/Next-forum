"use client";

import Link from "next/link";

export default function ListItem({ result }: any) {
  return (
    <div>
      {result.map((item: any, i: number) => (
        <div className="list-item" key={i}>
          <Link href={"/detail/" + item._id}>
            <h4>{item.title}</h4>
          </Link>
          <Link href={"/edit/" + item._id} className="list-btn">
            ✏️
          </Link>
          <button
            onClick={() => {
              fetch("/api/post/delete", {
                method: "POST",
                body: item._id,
              });
            }}
          >
            🗑️
          </button>
          <p>1월 1일</p>
        </div>
      ))}
    </div>
  );
}
