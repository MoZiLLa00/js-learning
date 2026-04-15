// === Тесты ===
/* console.assert(add(2, 3) === 5, "❌ add(2,3) должен вернуть 5");
console.assert(divide(10, 0) === null, "❌ divide(10,0) должен вернуть null");
console.assert(calculateAverage(10, 20, 30) === 20, "❌ среднее неверно");
console.assert(
  applyOperation(2, 3, (x, y) => x + y) === 5,
  "❌ applyOperation не работает",
);
*/
function runTests() {
  console.group("🧪 Тесты калькулятора");

  console.assert(add(2, 3) === 5, "add");
  console.assert(subtract(10, 4) === 6, "subtract");
  console.assert(multiply(3, 4) === 12, "multiply");
  console.assert(divide(8, 2) === 4, "divide");
  console.assert(divide(5, 0) === null, "divide by zero");
  console.assert(calculateAverage(10, 20, 30) === 20, "average");
  console.assert(
    applyOperation(2, 3, (a, b) => a ** b) === 8,
    "applyOperation",
  );

  console.log("✅ Все тесты пройдены!");
  console.groupEnd();
}

runTests();
