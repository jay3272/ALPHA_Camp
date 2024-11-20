const express = require('express');
const path = require('path');
const morgan = require('morgan');
const dotenv = require('dotenv');

const indexRouter = require('./routes/index');
const searchRouter = require('./routes/search');
const restaurantController = require('./controllers/restaurantController');
const searchController = require('./controllers/searchController');

dotenv.config();

const app = express();

// 應用程序設置
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 路由設置
app.use('/', indexRouter);
app.use('/search', searchRouter);

// 啟動服務
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});