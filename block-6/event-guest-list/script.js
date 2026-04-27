"use strict";

let guests = [];
let currentFilter = "all";
let nextId = 1;

const form = document.querySelector("#guest-form");
const nameInput = document.querySelector("#name-input");
const roleSelect = document.querySelector("#role-select");
const guestList = document.querySelector("#guest-list");
const counterEl = document.querySelector("#present-count");
const filterBtns = document.querySelectorAll("[data-role]");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  if (!name) return;

  guests.unshift({
    id: nextId++,
    name,
    role: roleSelect.value,
    isPresent: roleSelect.value === "Гость" ? false : true,
  });
  nameInput.value = "";
  nameInput.focus();
  renderGuests();
});

function getFilteredGuests() {
  if (currentFilter === "all") return guests;
  // Оставляем только тех, чья роль совпадает с выбранным фильтром
  return guests.filter((guest) => guest.role === currentFilter);
}

function renderGuests() {
  guestList.innerHTML = "";
  const filtered = getFilteredGuests();

  if (filtered.length === 0) {
    guestList.innerHTML =
      '<p class="empty-msg">Пока нет гостей. Добавьте первого!</p>';
  } else {
    filtered.forEach((guest) => {
      const li = document.createElement("li");
      li.dataset.id = guest.id;

      // Чекбокс
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.checked = guest.isPresent;
      cb.addEventListener("change", () => togglePresence(guest.id));

      // Текст (имя + роль)
      const nameSpan = document.createElement("span");
      nameSpan.classList.add("guest-name");
      nameSpan.textContent = guest.name;

      const roleSpan = document.createElement("span");
      roleSpan.classList.add("guest-role");
      roleSpan.textContent = `(${guest.role})`;

      const textWrapper = document.createElement("span");
      textWrapper.append(nameSpan, roleSpan);

      // Кнопка удаления
      const delBtn = document.createElement("button");
      delBtn.textContent = "✖";
      delBtn.classList.add("delete-btn");
      delBtn.addEventListener("click", () => removeGuest(guest.id));

      li.append(cb, textWrapper, delBtn);
      guestList.append(li);
    });
  }
  updateCounter();
}

function togglePresence(id) {
  const guest = guests.find((g) => g.id === id);
  if (guest) guest.isPresent = !guest.isPresent; // Инвертируем статус
  renderGuests();
}

function removeGuest(id) {
  guests = guests.filter((g) => g.id !== id);
  renderGuests();
}

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.role;
    updateFilterUI();
    renderGuests();
  });
});

function updateFilterUI() {
  filterBtns.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.role === currentFilter);
  });
}

function updateCounter() {
  const presentCount = guests.filter((g) => g.isPresent).length;
  counterEl.textContent = presentCount;
}

// 🚀 Первичная отрисовка
renderGuests();
