# FormosaRenewTour

外國旅客來台「旅遊 + 醫療／醫美」網站（英文版）。純靜態網頁，不需要伺服器。

**目前版本：v1.0.0**（版本紀錄見 [CHANGELOG.md](CHANGELOG.md)）

## 網站內容
| 區塊 | 說明 |
|---|---|
| Tours | 10 套私人行程：4 套純旅遊（可加購醫療）＋ 6 套醫療／醫美＋旅遊 |
| Places To Go | 12 個景點，依恢復期友善度分級 |
| Travel Essentials | 簽證、季節、交通、付款等旅遊須知 |
| Why Taiwan | 強項科別數據、自費參考價格 |
| Aesthetics | 醫美項目恢復期與搭機時間 |
| Hospitals | 具國際醫療中心的醫院（可篩選） |
| How It Works / FAQ / Contact | 流程、常見問題、詢價表單 |

## 檔案結構
```
index.html     頁面結構
styles.css     樣式（玉綠＋金色主題，支援手機）
data.js        所有內容資料與版本號 SITE_VERSION ← 改內容只要改這裡
app.js         篩選、表單等互動
build.js       打包成單一 HTML 檔
build.bat      點兩下執行打包
docs/          分享與發布說明、資料來源
dist/          打包輸出（不進 git）
```

## 本機預覽
點兩下 `index.html`。

## 分享給合作夥伴
點兩下 `build.bat`，把產生的 `dist/FormosaRenewTour-v1.0.0.html` 傳給對方即可。
詳見 [docs/分享與發布.md](docs/分享與發布.md)。

## 發布新版本
1. 修改內容
2. `data.js` 的 `SITE_VERSION` 加版號，`CHANGELOG.md` 寫上這版改了什麼
3. 執行 `build.bat`
4. commit、打 tag、發 GitHub Release（步驟見 docs）

## 上線前待辦
- [ ] `app.js` 的 `CONTACT_EMAIL` 換成真實信箱（目前表單會開啟訪客的郵件程式，尚無後端）
- [ ] 逐一向醫院國際醫療中心確認：合作意願、科別、JCI 認證狀態、最新自費價格
- [ ] 核對各國免簽天數、太魯閣步道開放狀態
- [ ] 加入真實照片（目前用漸層與 emoji 代替）
- [ ] 旅行社執照字號、公司資訊放到頁尾
- [ ] 申請網域（例如 formosarenewtour.com）
