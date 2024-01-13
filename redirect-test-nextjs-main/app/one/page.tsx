import React from "react";
import { getData } from "../component/holder";

export default async function OnePage(props: any) {
  const data = await getData();
  console.log(data);
  return <div>userId: {data?.userId}</div>;
}

