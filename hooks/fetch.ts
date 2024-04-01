export async function fetchData({ url }: { url: string }) {
  const res = await fetch(url);
  return res.json();
}
