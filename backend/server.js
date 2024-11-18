import dotenv from 'dotenv';
import app from './app.js';

// Tải các biến môi trường từ file .env
dotenv.config();

const PORT = process.env.PORT || 6000;  // Port mặc định là 5000 nếu không có trong .env

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
