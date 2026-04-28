const btn = document.querySelector("#load-btn");
const status = document.querySelector("#status");
const list = document.querySelector("#posts-list");

btn.addEventListener("click", function (e) {
  btn.disabled = true;
  status.textContent = "⏳ Загрузка...";
  loadPosts();
});

async function loadPosts() {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5",
    );
    if (!res.ok) throw new Error(`Ошибка HTTP: ${res.status}`);
    const posts = await res.json();
    renderPosts(posts);
    status.textContent = `✅ Загружено ${posts.length} постов`;
    status.classList.remove("error");
    return posts;
  } catch (error) {
    console.error("Что-то пошло не так:", error);
    status.textContent = "❌ Не удалось загрузить. Проверьте интернет.";
    status.classList.add("error");
  } finally {
    btn.disabled = false;
    btn.textContent = "🔄 Обновить";
  }
}

function renderPosts(posts) {
  list.innerHTML = "";
  posts.forEach((post) => {
    const li = document.createElement("li");
    li.classList.add("post-item");

    const h3 = document.createElement("h3");
    h3.textContent = post.title;

    const p = document.createElement("p");
    p.textContent = post.body;

    li.append(h3, p);
    list.append(li);
  });
}
