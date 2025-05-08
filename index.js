const express = require('express');
const app = express();
const port = 3000;

// Middleware để đọc dữ liệu JSON từ body
app.use(express.json());

// Biến toàn cục lưu dữ liệu
let userData = {
  name: "John Doe",
  age: 25
};

// GET: trả về dữ liệu hiện tại
app.get('/api/user', (req, res) => {
  res.json(userData);
});

// PUT: cập nhật dữ liệu mới
app.put('/api/user', (req, res) => {
  const { name, age } = req.body;

  // Kiểm tra dữ liệu hợp lệ
  if (typeof name !== 'string' || typeof age !== 'number') {
    return res.status(400).json({ error: "Dữ liệu không hợp lệ" });
  }

  // Cập nhật biến toàn cục
  userData.name = name;
  userData.age = age;

  res.json({ message: "Cập nhật thành công", userData });
});

app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});
