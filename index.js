const fs = require("fs");

// ================== Create ==================
fs.writeFile(
  "employees.json",
  '{ "name": "Employee 1 Name", "salary": 2000 }',
  "utf8",
  (err) => {
    if (err) console.error(err);
  }
);
// ================== Create ==================

// ============================================

// =================== Read ===================
fs.readFile("employees.json", "utf8", (err, data) => {
  if (err) console.error(err);
  console.log(data);
});
// =================== Read ===================

// ============================================

// ================== Update ==================
fs.appendFile("employees.json", "\nYeni text", "utf8", (err) => {
  if (err) console.error(err);
});
// ================== Update ==================

// ============================================

// ================== Delete ==================
fs.unlink("employees.json", (err) => {
  if (err) console.error(err);
});
// ================== Delete ==================
