import React from "react";
import { getData } from "../one/page";
export default async function TwoPage(props: {}) {
  const data = await getData();
  console.log({ data });
  return <div>Two</div>;
}
