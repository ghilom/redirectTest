import React from "react";
import { getData } from "../component/holder";
 
export default async function ThreePage(props: {}) {
  const data = await getData();
  return <div>Three</div>;
}
