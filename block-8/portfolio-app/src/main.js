// src/main.js
import { addTask, getTasks, toggleTask, removeTask } from "./tasks/state.js";
import { renderTasks } from "./tasks/render.js";
import { fetchPosts } from "./api/posts.js";
import { renderPosts } from "./tasks/render.js";

// 🎯 Элементы DOM
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const priority = document.getElementById("priority-select");
const list = document.getElementById("task-list");
const count = document.getElementById("count");

// 🔄 Функция обновления интерфейса
function refreshUI() {
  renderTasks(
    list,
    count,
    getTasks(),
    // Колбэк для чекбокса
    (id) => {
      toggleTask(id);
      refreshUI();
    },
    // Колбэк для кнопки удаления
    (id) => {
      removeTask(id);
      refreshUI();
    },
  );
}

// 📝 Обработка формы
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = input.value.trim();
  if (!title) return;

  addTask(title, priority.value);
  input.value = "";
  input.focus();
  refreshUI();
});

// 🚀 Первичная отрисовка
refreshUI();
console.log("✅ Интерфейс подключён к модулям");

// 🆕 Логика загрузки постов
const loadPostsBtn = document.getElementById("load-posts-btn");
const postsStatus = document.getElementById("posts-status");
const postsList = document.getElementById("posts-list");

loadPostsBtn.addEventListener("click", async () => {
  // Блокируем кнопку и показываем статус
  loadPostsBtn.disabled = true;
  postsStatus.textContent = "⏳ Загрузка...";
  postsStatus.className = "status loading";

  try {
    const posts = await fetchPosts();
    renderPosts(postsList, posts);
    postsStatus.textContent = `✅ Загружено ${posts.length} постов`;
    postsStatus.className = "status success";
  } catch (error) {
    postsStatus.textContent = "❌ Ошибка загрузки. Проверьте интернет.";
    postsStatus.className = "status error";
    console.error(error);
  } finally {
    loadPostsBtn.disabled = false;
    loadPostsBtn.textContent = "🔄 Обновить";
  }
});
