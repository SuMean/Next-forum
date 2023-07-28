"use client";

import { useEffect, useState } from "react";

interface CommentData {
  content: string;
}

export default function Comment(props: any) {
  let [comment, setComment] = useState("");
  let [data, setData] = useState<CommentData[]>([]);

  useEffect(() => {
    fetch(`/api/comment/list?id=${props._id}`)
      .then((r) => r.json())
      .then((result) => {
        console.log(result);
        setData(result);
      });
  }, []);
  return (
    <div>
      {data.length > 0
        ? data.map((a, i) => <p key={i}>{a.content}</p>)
        : "댓글없음"}

      <input
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          fetch("/api/comment/new", {
            method: "post",
            body: JSON.stringify({ comment: comment, _id: props._id }),
          });
        }}
      >
        댓글전송
      </button>
    </div>
  );
}
