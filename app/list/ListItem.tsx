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
          <span
            onClick={(e) => {
              fetch("/api/post/delete", {
                method: "POST",
                body: item._id,
              })
                .then((r) => r.json())
                .then(() => {
                   e.target.parentElement.style.opacity = 0;
                   setTimeout(() => {
                     e.target.parentElement.style.display = "none";
                   }, 1000);
                });
            }}
          >
            🗑️
          </span>
          <p>1월 1일</p>
        </div>
      ))}
    </div>
  );
}
