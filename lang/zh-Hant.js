// 繁體中文 — FormosaRenewTour
// 結構與 en.js 相同。id、tag、pace、region、醫院 tags 的值請保持英文（篩選用），只翻譯顯示文字。
// 簡體中文 zh-Hans.js 由本檔自動轉換產生：改完本檔後執行 python tools/make_zh_hans.py（需先 pip install opencc-python-reimplemented）
LANGS["zh-Hant"] = {
  name: "繁體中文",
  htmlLang: "zh-Hant",

  ui: {
    "meta.title": "FormosaRenewTour — 台灣醫療、醫美與旅遊",
    "meta.desc": "台灣私人訂製旅遊行程，結合頂尖醫院的健康檢查、醫學美容與專科醫療服務。",

    "nav.tours": "旅遊行程",
    "nav.places": "熱門景點",
    "nav.essentials": "旅遊須知",
    "nav.why": "為什麼選台灣",
    "nav.aesthetics": "醫學美容",
    "nav.hospitals": "合作醫院",
    "nav.how": "服務流程",
    "nav.faq": "常見問題",
    "nav.cta": "免費諮詢",

    "hero.eyebrow": "醫療・醫美・旅遊 · 台灣",
    "hero.title": "療癒、煥亮、探索<br>美麗之島",
    "hero.lead": "台灣私人訂製旅遊——經典觀光、美食、自然與文化，並可加選台灣世界級醫院與診所的健康檢查、醫學美容或專科醫療。",
    "hero.cta1": "開始規劃您的旅程",
    "hero.cta2": "查看行程",
    "hero.b1n": "17", "hero.b1": "家 JCI 國際認證醫療機構",
    "hero.b2n": "90+", "hero.b2": "家醫院提供國際醫療服務",
    "hero.b3n": "最高 80%", "hero.b3": "相較美國可節省的費用",

    "pkg.eyebrow": "私人行程",
    "pkg.title": "精選旅程",
    "pkg.lead": "純旅遊，或旅遊＋療程——每段旅程都是私人訂製。療程內容由醫院或診所審閱您的病歷後確認。",
    "filter.all": "全部",
    "tag.Travel": "旅遊", "tag.Medical": "醫療", "tag.Aesthetic": "醫美", "tag.Dental": "牙科",
    "card.days": "{n} 天 · 私人行程",
    "card.custom": "天數依需求 · 私人行程",
    "card.treatment": "療程：",
    "card.addon": "可加選：",
    "card.itinerary": "參考行程",
    "card.enquire": "詢問此行程 »",

    "dest.eyebrow": "熱門景點",
    "dest.title": "探索美麗之島",
    "dest.lead": "每個景點都依行程強度分級，讓觀光配合您的療程——體力型行程排在療程前，輕鬆行程留在恢復期。",
    "pace.Easy": "輕鬆", "pace.Moderate": "中等", "pace.Active": "體力",
    "paceChip.Easy": "🟢 輕鬆——恢復期適合",
    "paceChip.Moderate": "🟡 中等",
    "paceChip.Active": "🔴 體力——建議療程前",
    "region.North": "北台灣", "region.Central": "中台灣", "region.South": "南台灣", "region.East": "東台灣",

    "ess.eyebrow": "旅遊須知",
    "ess.title": "出發前須知",

    "why.eyebrow": "為什麼選台灣",
    "why.title": "世界級醫療，合理價格",
    "why.lead": "台灣對國際病患的自費價格有明確規範，您拿到的是透明報價，不是觀光客價格。",
    "why.sub": "自費參考價格",
    "th.item": "項目", "th.taiwan": "台灣（新台幣）", "th.usd": "美元", "th.note": "備註",
    "why.fine": "以上為醫院公告之參考價格，僅供參考（1 美元 ≈ 新台幣 32 元）。實際費用依個人狀況而定，以醫院國際醫療中心報價為準。",

    "aes.eyebrow": "醫學美容",
    "aes.title": "依療程安排您的旅程",
    "aes.lead": "恢復期決定行程。以下是常見療程與觀光的安排方式，最終以醫師判斷為準。",
    "aes.downtime": "恢復期", "aes.fly": "可搭機返國",

    "hosp.eyebrow": "合作網絡",
    "hosp.title": "設有國際醫療中心的醫院",
    "hosp.allRegions": "全部地區",
    "hosp.allTags": "全部科別",
    "hosp.fine": "列表為提供國際病患服務的醫院，科別僅列出重點。認證與服務內容請以各醫院確認為準。",
    "hosp.empty": "沒有符合條件的醫院——歡迎與我們聯絡，我們會為您找到合適的專科。",
    "htag.Transplant": "器官移植", "htag.Fertility": "生殖醫學", "htag.Cancer": "癌症治療", "htag.Health Check": "健康檢查",
    "htag.Cardiology": "心臟科", "htag.Dental": "牙科", "htag.Aesthetic": "醫學美容", "htag.JCI": "JCI 認證",
    "htag.Orthopaedics": "骨科", "htag.Chinese Medicine": "中醫",

    "how.eyebrow": "服務流程",
    "how.title": "五個簡單步驟",
    "how.s1t": "免費諮詢", "how.s1": "告訴我們您的需求、病史與旅遊日期。",
    "how.s2t": "醫院評估", "how.s2": "我們將您轉介至合適的國際醫療中心，由醫院審閱病歷並提供報價。",
    "how.s3t": "簽證與規劃", "how.s3": "如有需要，醫院會開立邀請函。我們依療程為您設計私人行程。",
    "how.s4t": "療程與旅遊", "how.s4": "機場接送、專屬司機、翻譯、恢復期住宿與導覽行程。",
    "how.s5t": "術後照護", "how.s5": "返國前完成回診，並提供病歷供您的家庭醫師參考。",
    "how.r1t": "🏥 醫院負責", "how.r1": "醫療評估、門診預約、治療、報價、醫療簽證邀請函。",
    "how.r2t": "🧳 FormosaRenewTour 負責", "how.r2": "機票、住宿、交通、翻譯、觀光行程、陪同家屬旅遊。",

    "faq.eyebrow": "常見問題",
    "faq.title": "大家常問的問題",

    "contact.eyebrow": "免費諮詢",
    "contact.title": "開始規劃您的旅程",
    "contact.lead": "我們會在一個工作天內回覆。",
    "form.name": "姓名", "form.email": "電子郵件", "form.country": "國家／地區", "form.interest": "感興趣的行程",
    "form.month": "預計出發月份", "form.travelers": "人數", "form.message": "請告訴我們您的需求",
    "form.submit": "送出詢問",
    "form.other": "其他／尚未決定",
    "form.thanks": "謝謝您！郵件程式即將開啟，按下傳送即可。",
    "form.subject": "詢問",

    "footer.tagline": "台灣醫療、醫美與旅遊。",
    "footer.explore": "網站導覽",
    "footer.official": "官方資源",
    "footer.mohw": "衛福部國際醫療網",
    "footer.tourism": "交通部觀光署",
    "footer.boca": "外交部領事事務局（簽證）",
    "footer.disclaimer": "FormosaRenewTour 為旅遊服務業者，不提供醫療建議或治療；所有醫療服務皆由台灣合法立案之醫院與診所提供。"
  },

  packages: [
    {
      id: "classic",
      title: "經典台灣環島之旅",
      days: 8,
      tag: "Travel",
      icon: "🏯",
      summary: "搭高鐵與專車走一圈必遊台灣：台北、太魯閣、日月潭、台南古蹟與高雄港灣。",
      medical: "第 2 天可在台北加選一日高階健檢，離台前即可拿到報告。",
      itinerary: [
        "第 1 天 — 抵達台北，西門町、龍山寺",
        "第 2 天 — 台北 101、故宮博物院、士林夜市",
        "第 3 天 — 九份、十分放天燈",
        "第 4 天 — 搭火車到花蓮，太魯閣（僅限開放步道）",
        "第 5 天 — 搭火車到台中，彩虹眷村、逢甲夜市",
        "第 6 天 — 日月潭遊湖、纜車",
        "第 7 天 — 台南：安平、孔廟、街頭小吃",
        "第 8 天 — 高雄駁二、蓮池潭，由高雄出境或返回台北"
      ]
    },
    {
      id: "food",
      title: "台灣美食與夜市之旅",
      days: 5,
      tag: "Travel",
      icon: "🥟",
      summary: "小籠包、牛肉麵、珍珠奶茶與十幾個夜市——台北、台南在地美食嚮導帶路，還有料理課。",
      medical: "適合第 1 天搭配牙齒美容或非侵入式皮膚療程。",
      itinerary: [
        "第 1 天 — 抵達，鼎泰豐、饒河夜市",
        "第 2 天 — 傳統早市巡禮、台灣料理課",
        "第 3 天 — 珍珠奶茶 DIY、大稻埕南北貨老街",
        "第 4 天 — 搭高鐵到台南：虱目魚、棺材板、蝦捲",
        "第 5 天 — 台南早餐巡禮，返回並出境"
      ]
    },
    {
      id: "nature",
      title: "山岳、峽谷與海岸自然之旅",
      days: 7,
      tag: "Travel",
      icon: "⛰️",
      summary: "阿里山雲海日出、東海岸大理石斷崖、墾丁熱帶海灘。建議安排在任何療程之前。",
      medical: "先完成體力型行程，最後回台北做健檢或醫美療程。",
      itinerary: [
        "第 1 天 — 抵達，陽明山溫泉",
        "第 2 天 — 花蓮東海岸、清水斷崖",
        "第 3 天 — 太魯閣步道（視國家公園開放狀況）",
        "第 4 天 — 南迴公路到台東，池上稻田",
        "第 5 天 — 墾丁國家公園海灘",
        "第 6 天 — 阿里山森林鐵路與日出",
        "第 7 天 — 搭高鐵返回台北，出境"
      ]
    },
    {
      id: "culture",
      title: "寺廟、茶與文化之旅",
      days: 6,
      tag: "Travel",
      icon: "🍵",
      summary: "慢步調、低強度：坪林與貓空品茶、廟宇慶典、原住民文化與老街。很適合安排在恢復期。",
      medical: "行程輕鬆——多數醫美療程的恢復期都適合參加。",
      itinerary: [
        "第 1 天 — 抵達台北，保安宮、迪化街",
        "第 2 天 — 貓空纜車、茶館午後",
        "第 3 天 — 坪林茶鄉、宜蘭溫泉",
        "第 4 天 — 鹿港老街、彰化廟宇",
        "第 5 天 — 日月潭邵族文化、南投茶園",
        "第 6 天 — 返回台北，出境"
      ]
    },
    {
      id: "health-check",
      title: "高階健檢＋台北精華遊",
      days: 4,
      tag: "Medical",
      icon: "🩺",
      summary: "在醫學中心完成一整天高階健康檢查，接著三天輕鬆遊覽台北 101、夜市、北投溫泉與九份。",
      medical: "全身健康檢查（抽血、影像檢查，可選內視鏡），返國前由英語醫師解說報告。",
      itinerary: [
        "第 1 天 — 機場接機、入住飯店、歡迎晚餐（晚間開始禁食）",
        "第 2 天 — 合作醫院健檢，下午休息，饒河夜市",
        "第 3 天 — 九份老街、十分放天燈",
        "第 4 天 — 醫師說明報告，北投溫泉，出境"
      ]
    },
    {
      id: "glow",
      title: "煥膚之旅——皮膚療程＋日月潭",
      days: 6,
      tag: "Aesthetic",
      icon: "✨",
      summary: "幾乎不需恢復期的非侵入式醫美療程，搭配中台灣茶鄉、遊湖與慢旅行。",
      medical: "雷射煥膚、皮膚緊緻、針劑注射——透過線上預先諮詢，與醫師確認療程內容。",
      itinerary: [
        "第 1 天 — 抵達台北，休息",
        "第 2 天 — 診所諮詢與療程，下午輕鬆逛華山 1914",
        "第 3 天 — 搭高鐵到台中，彩虹眷村、逢甲",
        "第 4 天 — 日月潭遊湖、伊達邵（提供帽子與防曬）",
        "第 5 天 — 阿里山或南投茶園體驗",
        "第 6 天 — 回診（現場或視訊），出境"
      ]
    },
    {
      id: "fresh-look",
      title: "煥然一新——整形手術＋輕鬆恢復",
      days: 10,
      tag: "Aesthetic",
      icon: "🌸",
      summary: "雙眼皮、隆鼻等整形手術，搭配以恢復為優先的行程：專車接送、安靜飯店，醫師同意後才安排輕度外出。",
      medical: "醫師諮詢、手術、術後回診與拆線皆在返國前完成，停留期間提供護理師專線。",
      itinerary: [
        "第 1 天 — 抵達，專車接送，入住適合休養的飯店",
        "第 2 天 — 醫師諮詢、術前檢查",
        "第 3 天 — 手術日",
        "第 4–6 天 — 飯店休養、送餐服務，第 5 天回診",
        "第 7–8 天 — 輕度外出：博物館、茶館、大稻埕（經醫師同意）",
        "第 9 天 — 拆線／最終檢查",
        "第 10 天 — 出境"
      ]
    },
    {
      id: "smile",
      title: "美齒計畫＋台灣美食之旅",
      days: 7,
      tag: "Dental",
      icon: "😁",
      summary: "陶瓷貼片、美白或植牙第一階段，穿插台北、台南美食導覽。",
      medical: "數位微笑設計，分 2–3 次看診完成。植牙可能需等癒合後再來台一次。",
      itinerary: [
        "第 1 天 — 抵達台北",
        "第 2 天 — 牙科檢查、口掃與微笑設計",
        "第 3 天 — 台北美食散步（有軟食選擇）",
        "第 4 天 — 療程看診",
        "第 5 天 — 搭高鐵到台南：廟宇與小吃",
        "第 6 天 — 返回台北，最終試戴",
        "第 7 天 — 出境"
      ]
    },
    {
      id: "fertility",
      title: "求子之旅（試管嬰兒）",
      days: 21,
      tag: "Medical",
      icon: "🤍",
      summary: "配合醫院生殖中心的試管嬰兒療程安排長住——服務式公寓、專屬司機，以及適合夫妻的輕鬆一日遊。",
      medical: "與醫院規劃療程、追蹤看診、取卵與植入。參考費用約新台幣 23–25 萬元／單純療程（台大醫院參考價）。",
      itinerary: [
        "第 1 週 — 抵達、諮詢、開始促排卵，輕鬆市區走走",
        "第 2 週 — 追蹤看診，陽明山、淡水夕陽",
        "第 3 週 — 取卵與植入，以休息為主，醫師同意後出境"
      ]
    },
    {
      id: "specialist",
      title: "專科醫療＋家屬陪同旅遊",
      days: 0,
      tag: "Medical",
      icon: "🏥",
      summary: "心臟、骨科與關節置換、癌症治療、質子治療或肝臟移植——我們安排交通與住宿，所有醫療由醫院主導。",
      medical: "由醫院國際醫療中心審閱病歷、提供報價，並開立醫療簽證邀請函。",
      itinerary: [
        "出發前 — 將病歷寄給醫院，取得報價與邀請函",
        "抵達 — 機場接機，入住醫院附近飯店或服務式公寓",
        "治療期間 — 翻譯協助，家屬可另外安排觀光",
        "治療後 — 恢復期住宿，與您的家庭醫師銜接後續追蹤"
      ]
    }
  ],

  destinations: [
    { name: "台北", region: "North", pace: "Easy", icon: "🏙️", desc: "台北 101、故宮博物院、夜市、北投溫泉——多數合作醫院也在這裡。" },
    { name: "九份與十分", region: "North", pace: "Moderate", icon: "🏮", desc: "燈籠點點的山城茶樓、放天燈與十分瀑布。階梯較多。" },
    { name: "陽明山", region: "North", pace: "Moderate", icon: "🌋", desc: "離台北市區不遠的火山國家公園：硫氣孔、季節花海、溫泉。" },
    { name: "宜蘭", region: "North", pace: "Easy", icon: "♨️", desc: "礁溪溫泉、農場民宿與蘭陽博物館——離台北一小時的放鬆好去處。" },
    { name: "花蓮與太魯閣", region: "East", pace: "Active", icon: "🏞️", desc: "大理石峽谷與太平洋斷崖。2024 年地震後部分步道仍未開放，預訂前我們會先確認。" },
    { name: "台東", region: "East", pace: "Moderate", icon: "🎈", desc: "池上稻田、熱氣球嘉年華與原住民文化。" },
    { name: "日月潭", region: "Central", pace: "Easy", icon: "🛶", desc: "台灣最知名的湖泊：遊湖、環湖自行車道、邵族文化與湖畔度假飯店。" },
    { name: "阿里山", region: "Central", pace: "Active", icon: "🌄", desc: "森林鐵路、巨木群、雲海日出與高山烏龍茶。" },
    { name: "台中", region: "Central", pace: "Easy", icon: "🎨", desc: "彩虹眷村、國家歌劇院、逢甲夜市與珍珠奶茶創始店。" },
    { name: "台南", region: "South", pace: "Easy", icon: "⛩️", desc: "台灣古都：四百年歷史、上百座廟宇，以及全台最好吃的小吃。" },
    { name: "高雄", region: "South", pace: "Easy", icon: "⚓", desc: "港灣城市：駁二藝術特區、蓮池潭與佛陀紀念館。" },
    { name: "墾丁", region: "South", pace: "Moderate", icon: "🏖️", desc: "熱帶海灘、珊瑚礁與台灣最南端。雷射療程後請避免日曬。" }
  ],

  essentials: [
    { icon: "🛂", title: "簽證", text: "許多國家（美、英、歐盟、日、韓、澳等）可免簽入境 14–90 天。請至外交部領事事務局網站查詢您的國籍。" },
    { icon: "🌤️", title: "最佳旅遊季節", text: "10 月至 4 月涼爽乾燥；5–6 月為梅雨季；7–9 月炎熱，可能有颱風。" },
    { icon: "🚄", title: "交通", text: "高鐵從台北到高雄只要 1.5 小時。悠遊卡可搭捷運、公車，也能在便利商店付款。" },
    { icon: "💳", title: "貨幣與付款", text: "使用新台幣（NT$）。飯店與醫院可刷卡，夜市只收現金。每家 7-Eleven 都有提款機。" },
    { icon: "📶", title: "網路", text: "可在機場購買旅客 SIM 卡或 eSIM。許多公共場所提供免費 iTaiwan Wi-Fi。" },
    { icon: "🛡️", title: "治安", text: "亞洲最安全的旅遊地之一：犯罪率低，緊急醫療品質優良。" }
  ],

  prices: [
    { item: "試管嬰兒——單純療程一次", taiwan: "NT$230,000–250,000", usd: "≈ US$7,200–7,800", note: "台大醫院參考價；不含胚胎冷凍／顯微注射" },
    { item: "活體肝臟移植", taiwan: "NT$200–300 萬", usd: "≈ US$62,000–94,000", note: "含捐贈者與受贈者（台大／馬偕案例）" },
    { item: "質子治療（強度調控）每次", taiwan: "NT$21,700–34,500", usd: "≈ US$680–1,080", note: "台大癌醫；不含治療規劃與模擬攝影" },
    { item: "腦部立體定位放射手術一療程（≤3 次）", taiwan: "≈ NT$280,000", usd: "≈ US$8,750", note: "僅處置費" },
    { item: "脊椎手術（案例）", taiwan: "≈ NT$150,000", usd: "≈ US$4,700", note: "美國同類手術超過新台幣 100 萬元" },
    { item: "國際病患掛號費", taiwan: "NT$2,000／次", usd: "≈ US$63", note: "台大癌醫行政掛號費" }
  ],

  strengths: [
    { title: "肝臟移植", stat: "93.5%", label: "五年存活率——高於日本與美國" },
    { title: "心臟血管", stat: "99%", label: "冠狀動脈支架成功率；心房顫動電燒「台北方法」" },
    { title: "人工生殖", stat: "~50%", label: "費用約為全球平均的一半；胚胎植入成功率約 36.7%" },
    { title: "癌症與質子治療", stat: "73%", label: "癌症五年存活率，優於歐美平均 67%" },
    { title: "關節置換", stat: "20,000+", label: "每年手術例數；機器手臂輔助手術普及" }
  ],

  aesthetics: [
    { name: "雷射與淡斑", downtime: "0–3 天", fly: "隔天", icon: "💡" },
    { name: "皮膚緊緻（音波／電波）", downtime: "0–2 天", fly: "隔天", icon: "🌟" },
    { name: "肉毒與玻尿酸", downtime: "0–2 天", fly: "1–2 天", icon: "💉" },
    { name: "雙眼皮手術", downtime: "5–7 天", fly: "拆線後", icon: "👁️" },
    { name: "隆鼻", downtime: "7–14 天", fly: "拆除鼻夾板後", icon: "👃" },
    { name: "抽脂／身體雕塑", downtime: "7–14 天", fly: "經醫師同意", icon: "🩱" },
    { name: "陶瓷貼片與美白", downtime: "0 天", fly: "隔天", icon: "🦷" },
    { name: "近視雷射", downtime: "1–3 天", fly: "術後第一天回診後", icon: "👓" }
  ],

  hospitals: [
    { name: "國立臺灣大學醫學院附設醫院", city: "台北", region: "North", tags: ["Transplant", "Fertility", "Cancer", "Health Check"] },
    { name: "臺北榮民總醫院", city: "台北", region: "North", tags: ["Cardiology", "Cancer", "Health Check"] },
    { name: "臺北醫學大學附設醫院", city: "台北", region: "North", tags: ["Fertility", "Dental", "Aesthetic", "JCI"] },
    { name: "馬偕紀念醫院", city: "台北", region: "North", tags: ["Transplant", "Health Check"] },
    { name: "國泰綜合醫院", city: "台北", region: "North", tags: ["Health Check", "Cardiology"] },
    { name: "臺安醫院", city: "台北", region: "North", tags: ["Health Check", "JCI"] },
    { name: "林口長庚紀念醫院", city: "桃園", region: "North", tags: ["Aesthetic", "Cancer", "Transplant", "Orthopaedics"] },
    { name: "敏盛綜合醫院", city: "桃園", region: "North", tags: ["Health Check", "Orthopaedics"] },
    { name: "臺中榮民總醫院", city: "台中", region: "Central", tags: ["Cardiology", "Cancer", "Health Check"] },
    { name: "中國醫藥大學附設醫院", city: "台中", region: "Central", tags: ["Cancer", "Chinese Medicine", "Health Check"] },
    { name: "彰化基督教醫院", city: "彰化", region: "Central", tags: ["Cardiology", "Orthopaedics"] },
    { name: "秀傳紀念醫院", city: "彰化", region: "Central", tags: ["Health Check", "Orthopaedics"] },
    { name: "國立成功大學醫學院附設醫院", city: "台南", region: "South", tags: ["Cancer", "Cardiology"] },
    { name: "高雄長庚紀念醫院", city: "高雄", region: "South", tags: ["Transplant", "Cancer"] },
    { name: "高雄醫學大學附設中和紀念醫院", city: "高雄", region: "South", tags: ["Health Check", "Dental"] },
    { name: "義大醫院", city: "高雄", region: "South", tags: ["Health Check", "Aesthetic"] }
  ],

  faqs: [
    { q: "你們會幫我掛號嗎？", a: "醫院的國際醫療中心是所有醫療事務的單一窗口——病歷審閱、門診預約、報價與簽證邀請函都由醫院處理。我們負責把您轉介給合適的國際醫療中心，讓旅遊日期配合療程，並處理醫院以外的一切：機票、住宿、交通、翻譯與觀光。" },
    { q: "我需要醫療簽證嗎？", a: "許多國籍可短期免簽入境台灣。如需簽證或療程較長，醫院可開立診斷書、治療計畫與邀請函，協助您申請「就醫停留簽證」。所需文件：效期 6 個月以上的護照、照片與醫院邀請函。請洽詢您所在地的台灣駐外館處。" },
    { q: "我付的是台灣本地價格嗎？", a: "國際病患適用自費價格，且受到規範：醫院以健保或地方衛生局核定價格乘上一定倍數收費。掛號與檢查費會比本地健保價格高，但整體費用仍遠低於美國、歐洲與日本。" },
    { q: "療程後可以觀光嗎？", a: "我們依您的恢復狀況安排行程，而不是讓療程配合行程。體力型觀光安排在手術前，或經醫師同意後才進行。活動與返國日期一律以醫師意見為準。" },
    { q: "醫師會說英文嗎？", a: "醫院國際醫療中心有英語專員，許多醫師曾在美、英、日進修。我們也可安排日語、韓語、越南語、泰語、印尼語等醫療翻譯。" },
    { q: "家人可以一起來嗎？", a: "可以。您接受治療期間，家屬可參加另外安排的導覽行程，我們也會在醫院附近安排家庭房或服務式公寓。" }
  ]
};
