"use strict";

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Прошло &{ms}ms`), ms);
  });
}

function fetchMock(url, delayMs) {
  return delay(delayMs).then(() => {
    if (url.includes("error")) {
      return Promise.reject(new Error(`Ошибка загрузки: ${url}`));
    }
    return { url, status: "ok", message: `Данные с ${url}` };
  });
}

function loadSequentially(urls) {
  let chain = Promise.resolve();

  urls.forEach((url) => {
    chain = chain
      .then(() => fetchMock(url, 1000))
      .then((res) => console.log("[Seq]", res))
      .catch((err) => console.error(err));
  });

  return chain;
}

function loadParallel(urls) {
  const promises = urls.map((url) => fetchMock(url, 1500));

  return Promise.all(promises)
    .then((results) => console.log("[Parallel] Все загружены:", results))
    .catch((err) => console.error("[Parallel] Ошибка в цепочке:", err.message));
}

console.log("--- ЗАПУСК ПОСЛЕДОВАТЕЛЬНО ---");
loadSequentially(["/api/users", "/api/posts", "/api/error"]);

console.log("\n--- ЗАПУСК ПАРАЛЛЕЛЬНО ---");
loadParallel(["/api/users", "/api/posts", "/api/settings"]);

console.log("\n--- ЦЕПОЧКА С ПАУЗАМИ ---");
delay(500)
  .then(() => fetchMock("/api/step1", 0))
  .then((res) => {
    console.log("Шаг 1:", res);
    return delay(1000);
  })
  .then(() => fetchMock("/api/step2", 0))
  .then((res) => console.log("Шаг 2:", res))
  .catch((err) => console.error(err));
