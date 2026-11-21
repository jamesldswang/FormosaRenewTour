# FormosaRenewTour

外國旅客來台「旅遊 + 醫療／醫美」網站（英文／繁體中文／簡體中文）。純靜態網頁，不需要伺服器。

**目前版本：v1.1.0**　·　語言：English／繁體中文／简体中文（版本紀錄見 [CHANGELOG.md](CHANGELOG.md)）

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
data.js        版本號 SITE_VERSION、語言清單
lang/en.js       英文：介面文字 + 所有內容   ← 改內容改這裡
lang/zh-Hant.js  繁體中文                    ← 改內容改這裡
lang/zh-Hans.js  簡體中文（自動產生，勿手改）
app.js         語言切換、篩選、表單等互動
tools/make_zh_hans.py  由繁體產生簡體
build.js       打包成單一 HTML 檔
build.bat      點兩下執行打包
docs/          分享與發布說明、資料來源
dist/          打包輸出（不進 git）
```

## 本機預覽
點兩下 `index.html`。

## 分享給合作夥伴
點兩下 `build.bat`，把產生的 `dist/FormosaRenewTour-v版本號.html` 傳給對方即可。
詳見 [docs/分享與發布.md](docs/分享與發布.md)。

## 修改內容／翻譯
- 每種語言一個檔案，結構相同：`ui`（按鈕、標題等介面文字）＋ packages、destinations、hospitals、faqs 等內容。
- 改英文 → 改 `lang/en.js`；改中文 → 改 `lang/zh-Hant.js`，再執行：
  ```
  pip install opencc-python-reimplemented   # 第一次才需要
  python tools/make_zh_hans.py              # 重新產生簡體中文
  ```
- 新增行程、醫院時，**每個語言檔都要加**，而且 `id`、`tag`、`pace`、`region`、醫院 `tags` 的值要跟英文版一模一樣（篩選靠這些值）。
- 簡體用語不滿意，就在 `tools/make_zh_hans.py` 的 `FIXES` 加一組「轉換後 → 想要的」。
- 指定語言的網址：`index.html?lang=en`、`?lang=zh-Hant`、`?lang=zh-Hans`

## 新增其他語言（例如日文）
1. 複製 `lang/en.js` 成 `lang/ja.js`，第一行改成 `LANGS.ja = {`，`name: "日本語"`、`htmlLang: "ja"`，翻譯所有文字
2. `index.html` 在 `app.js` 前面加 `<script src="lang/ja.js"></script>`
3. `data.js` 的 `LANG_ORDER` 加上 `"ja"`

## 發布新版本
1. 修改內容
2. `data.js` 的 `SITE_VERSION` 加版號，`CHANGELOG.md` 寫上這版改了什麼
3. 執行 `build.bat`
4. commit、打 tag、發 GitHub Release（步驟見 docs）

## 上線前待辦
- [ ] `app.js` 的 `CONTACT_EMAIL` 換成真實信箱（目前表單會開啟訪客的郵件程式，尚無後端）
- [ ] 逐一向醫院國際醫療中心確認：合作意願、科別、JCI 認證狀態、最新自費價格
- [ ] 核對各國免簽天數、太魯閣步道開放狀態
- [ ] 請母語人士校對繁中／簡中，特別是醫療用語
- [ ] 加入真實照片（目前用漸層與 emoji 代替）
- [ ] 旅行社執照字號、公司資訊放到頁尾
- [ ] 申請網域（例如 formosarenewtour.com）
