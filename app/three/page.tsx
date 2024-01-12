import React from "react";
import { getData } from "../one/page";
export default async function ThreePage(props: {}) {
  const data = await getData();
  return <div>Three</div>;
}
