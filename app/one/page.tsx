import { NextResponse } from "next/server";
import React from "react";
export async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", { cache: "no-cache" });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function OnePage(props: {}) {
  const data = await getData();
  console.log(data);
  return <div>userId: {data?.userId}</div>;
}
