"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DarkMode() {
  let router = useRouter();

  useEffect(() => {
    let changeMode = ("; " + document.cookie)
      .split(`; mode=`)
      .pop()
      .split(";")[0];
    if (changeMode == "") {
      document.cookie = "mode=light; max-age=" + 3600 * 24 * 400;
    }
  }, []);

  return (
    <span
      onClick={() => {
        let changeMode = ("; " + document.cookie)
          .split(`; mode=`)
          .pop()
          .split(";")[0];
        if (changeMode == "light") {
          document.cookie = "mode=dark; max-age=" + 3600 * 24 * 4000;
          router.refresh();
        } else {
          document.cookie = "mode=light; max-age=" + 3600 * 24 * 4000;
          router.refresh();
        }
      }}
    >
      {" "}
      🌙{" "}
    </span>
  );
}
