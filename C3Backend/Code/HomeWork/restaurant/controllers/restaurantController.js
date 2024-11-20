const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/all', async (req, res) => {
  try {
    // 記錄控制器文件的絕對路徑
    console.log('Current controller file path:', __dirname);

    // 設置數據文件的相對路徑
    const relativePath = '../data/restaurant.json';

    // 使用 path.join() 生成絕對路徑
    const absolutePath = path.join(__dirname, relativePath);

    console.log('Attempting to read file from:', absolutePath);

    // 檢查文件是否存在
    fs.stat(absolutePath, (err, stats) => {
      if (err) {
        console.error('Error accessing file:', err);
        throw new Error('Failed to access restaurant data file');
      }
      
      console.log('File exists and is accessible');

      // 讀取文件內容
      fs.readFile(absolutePath, 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
          throw new Error('Failed to read restaurant data file');
        }
        
        console.log('File content read successfully');

        try {
          // 解析 JSON 內容
          const restaurants = JSON.parse(data);
          
          console.log('Parsed restaurants:', restaurants);

          // 發送響應
          res.json(restaurants);
        } catch (parseErr) {
          console.error('JSON parse error:', parseErr);
          throw new Error('Failed to parse restaurant data');
        }
      });
    });

  } catch (error) {
    console.error('Error fetching restaurants:', error);
    res.status(500).send('Error fetching all restaurants');
  }
});

module.exports = router;