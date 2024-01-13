export async function getData():Promise<any> {
    const res:any = await fetch("https://jsonplaceholder.typicode.com/todos/1", { cache: "no-store" });
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }