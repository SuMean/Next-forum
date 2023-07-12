"use client";

import Link from "next/link";

interface Item {
  _id: string;
  title: string;
}
interface ListItemProps {
  result: Item[];
}

export default function ListItem({ result }: ListItemProps) {
  return (
    <div>
      {result.map((item, i: number) => (
        <div className="list-item" key={i}>
          <Link href={"/detail/" + item._id}>
            <h4>{item.title}</h4>
          </Link>
          <Link href={"/edit/" + item._id} className="list-btn">
            ✏️
          </Link>
          <span
            onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
              fetch("/api/post/delete", {
                method: "POST",
                body: item._id,
              })
                .then((r) => r.json())
                .then(() => {
                 e.currentTarget.parentElement!.style.opacity = "0";
                 setTimeout(() => {
                   e.currentTarget.parentElement!.style.display = "none";
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
