"use client";

import Link from "next/link";

export default function ListItem({ result }: any) {
  return (
    <div>
      {result.map((a: any, i: number) => (
        <div className="list-item" key={i}>
          <Link href={"/detail/" + result[i]._id}>
            <h4>{result[i].title}</h4>
          </Link>
          <Link href={"/edit/" + result[i]._id} className="list-btn">
            ✏️
          </Link>
          <span
            onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
              const parent = e.currentTarget.parentElement;
              fetch(`/api/delete/delete?id=${result[i]._id}`, {});

              if (parent) {
                parent.style.opacity = "0";
                setTimeout(() => {
                  if (parent) {
                    parent.style.display = "none";
                  }
                }, 1000);
              }
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
