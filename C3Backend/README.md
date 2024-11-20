## C3 後端應用實務

### M1 管理程式碼:Git & GitHub
* 登錄專案
```bash
git init
```
* 登記更動，準備提交
指令可以把檔案登記起來，意思是程式碼更動已告一段落，把這些處理好的內容挑出來，做最後的查看。若沒有問題，就會提交成正式的版本節點。
```bash
git add index.html
```
指令後可加上檔案名稱，若使用 . 則可以一口氣選出路徑內的所有檔案。
```bash
git add .
```
* 建立版本節點
若確認登記起來的內容無誤，就可以為這包程式碼更動定義一個 commit message，將其提交成一筆完成的版本
```bash
git commit --message "Initialize Project"
```
其中的副指令 --message 可以縮寫成 -m
```bash
git commit --m "Initialize Project"
```
* 查看狀態
如果沒有圖形介面的輔助，在指令列中你不知道專案當下的狀態，就需要用 git status 指令來查看。這個指令會列出「有程式碼變動」的檔案，並且用顏色區分不同的狀態：
綠色（Changes to be committed）：已經被登記起來，準備要提交
紅色（Changes not staged for commit）：有程式碼更動，但還沒登記起來（可能仍在工作中）
```bash
git status 
```
* 查看歷史
```bash
git log
```
```bash
git log --oneline
```
* 對照差異
```bash
git diff
```
* 重設版本
```bash
git reset
```
* 修改 commits 的呈現
```bash
git rebase
```
* 查看遠端
```bash
git remote origin
```
* 新增遠端儲存庫
```bash
git remote add <name> <url>
```
* 刪除遠端儲存庫
```bash
git remote remove origin
```
* 推送分支
```bash
git branch -M main
```
### M2 網路概論與 Node.js
* 
### M3 建立第一個網路應用程式
* 
### M4 非同步處理.觀念入門
* 
### M5 關聯式資料庫與 SQL 入門
* 
### M6 工程師要懂的產品設計
* 
### 【挑戰】Mini Capstone Project
* 
### M7 前後端選課引導
* 
### M8 驗收與展望
* 