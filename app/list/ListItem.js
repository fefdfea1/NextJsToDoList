"use client";
import Link from "next/link";
import DetailLink from "./DetailLink";
export default function ListItem(props) {
  return (
    <div className="list-bg">
      {props.result.map((item, index) => (
        <div className="list-item" key={index}>
          <Link href={`/detail/${index + 1}`}>
            <h4>{item.name}</h4>
          </Link>
          <span
            onClick={(e) => {
              fetch("/api/abc/data", {
                method: "GET",
              })
                .then((e) => e.json())
                .then((data) => {
                  console.log(data);
                  e.target.parentElement.style.opacity = 0;
                  setTimeout(() => {
                    e.target.parentElement.style.display = "none";
                  }, 1000);
                });
            }}
          >
            🗑️
          </span>
          <p>이히힝</p>
          <DetailLink />
        </div>
      ))}
    </div>
  );
}
