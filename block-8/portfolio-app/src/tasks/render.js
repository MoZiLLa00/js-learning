// src/tasks/render.js

// Принимаем колбэки как аргументы. Никаких глобальных переменных.
export function renderTasks(listEl, countEl, tasks, onToggle, onDelete) {
  listEl.innerHTML = "";
  countEl.textContent = tasks.length;

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.dataset.id = task.id;
    if (task.done) li.classList.add("done");

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = task.done;
    cb.addEventListener("change", () => onToggle(task.id));

    const span = document.createElement("span");
    span.textContent = `${task.title} [${task.priority}]`;

    const delBtn = document.createElement("button");
    delBtn.textContent = "🗑️";
    delBtn.classList.add("del-btn");
    delBtn.addEventListener("click", () => onDelete(task.id));

    li.append(cb, span, delBtn);
    listEl.append(li);
  });
}

export function renderPosts(listEl, posts) {
  listEl.innerHTML = "";
  posts.forEach((post) => {
    const li = document.createElement("li");
    li.classList.add("post-item");

    const h4 = document.createElement("h4");
    h4.textContent = post.title;

    const p = document.createElement("p");
    p.textContent = post.body;

    li.append(h4, p);
    listEl.append(li);
  });
}
