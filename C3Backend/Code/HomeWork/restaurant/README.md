# 餐廳清單應用程序

## 介紹

本項目是一個使用 Node.js 和 Express 開發的餐廳清單應用程序。它允許用戶瀏覽、搜尋和查看餐廳詳細信息。

## 功能

- 顯示所有餐廳列表
- 展示單個餐廳的詳情頁面
- 搜尋餐廳（支持名稱和類別）

## 安裝指南

1. 安裝 Node.js 和 npm（已經安裝）
2. 克隆此倉庫到本地機器
3. 進入項目目錄
4. 安裝依賴項：
```
5. 啟動服務：
## 使用說明

1. 開啟瀏覽器，訪問 `http://localhost:3000`
2. 查看所有餐廳列表
3. 點擊單個餐廳可以查看詳情頁面
4. 在搜尋欄位輸入餐廳名稱或類別進行搜尋

## 開發指南

### 安裝依賴項

### 啟動開發環境

## 測試

我們使用 Jest 和 Supertest 進行單元測試和集成測試。請參閱 `test` 資料夾中的測試文件。

## 貢獻指南

歡迎對本項目進行貢獻！請遵循這些步驟：

1. Fork 本倉庫
2. 創建您的分支（git checkout -b feature/amazing-feature）
3. 確保所有的單元測試通過（make test）
4. 執行測試，確保沒有新錯誤被引入
5. 提交您的更改（git commit -am 'Add some amazing feature')
6. 推送您的分支（git push origin feature/amazing-feature）
7. 開始一個新的拉取請求（git pull --no-rebase origin main）

## 版本控制

我們使用 Git 來管理版本控制。請參閱 `.gitignore` 文件以了解我們忽略了哪些文件。

## 複製權限

本項目遵循 MIT 授權證書。請參閱 [LICENSE](LICENSE) 文件以獲得更多細節。

## 開發者

- Jay Wu (@jaywu)

## 特技

- 使用 Express 框架來建立後端服務
- 使用 EJS 作為模板引擎，製作動態網頁
- 直接使用 JSON 文件存儲數據
- 使用 Express-session 來管理會員登錄狀態
- 實施 HTTPS、CSRF 防護和 XSS 防護