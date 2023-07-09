"use client";

import Link from "next/link";

export default function ListItem(props:any) {
  return (
    <div>
      {props.result.map((a:any, i:number) => (
        <div className="list-item" key={i}>
          <Link href={"/detail/" + props.result[i]._id}>
            <h4>{props.result[i].title}</h4>
          </Link>
          <Link href={"/edit/" + props.result[i]._id} className="list-btn">
            ✏️
          </Link>
          <p>1월 1일</p>
        </div>
      ))}
    </div>
  );
}
