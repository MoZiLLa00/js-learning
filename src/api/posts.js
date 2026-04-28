// src/api/posts.js
const API_URL = "https://jsonplaceholder.typicode.com/posts?_limit=5";

export async function fetchPosts() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error(`Сервер вернул ошибку: ${res.status}`);
  return res.json();
}
