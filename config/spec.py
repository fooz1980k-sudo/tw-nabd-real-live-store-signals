from fields import *
GRIDF = lambda: [RADIO("layout", "العرض", [("grid", "شبكة"), ("rail", "شريط أفقي بالسحب")]), NUM("cols", "أعمدة الكمبيوتر", 4, 2, 6), NUM("mcols", "أعمدة الجوال", 2, 1, 3)]
stock = dict(title="نبض · عدّاد المخزون الحقيقي", icon="sicon-box", name="nabd-stock", fields=HEAD("المخزون الآن", "الكميات الحقيقية… قبل لا تخلص", "الأرقام من مخزون المتجر الفعلي") + SRC("best_selling", 8, 24) + [
    RADIO("sort", "الترتيب", [("scarce", "الأقل كمية أولاً"), ("smart", "حسب اهتمام الزائر")]), NUM("low", "حد «باقي قليل»", 5, 1, 30), NUM("full_at", "الكمية التي يمتلئ عندها العدّاد", 30, 5, 200),
    SW("only_low", "اعرض فقط المنتجات قليلة الكمية"), SW("only_tracked", "اعرض فقط المنتجات ذات الكمية المتتبعة"), SW("show_number", "إظهار الرقم دائماً (وليس فقط عند القلة)", True),
    SW("show_unlimited", "إظهار «متوفر» للمنتجات غير محدودة الكمية", True), SW("show_sold", "إظهار «بيع منه» من بيانات سلة إن توفرت", True), NUM("sold_min", "أقل عدد مبيعات لإظهاره", 10, 1, 500),
    SW("pulse", "نبضة حمراء عند القلة", True), COLOR("color_low", "لون القلة", "#dc2626"), COLOR("color_mid", "لون المحدود", "#d97706"), COLOR("color_ok", "لون المتوفر", "#16a34a"),
    T("text_low", "نص القلة ({n} = الكمية)", "باقي {n} فقط", mx=40), T("text_mid", "نص المحدود", "الكمية محدودة: {n}", mx=40), T("text_ok", "نص المتوفر", "متوفر ({n})", mx=40), T("text_plenty", "نص غير المحدود", "متوفر", mx=30),
    SW("quick_add", "زر إضافة سريعة", True), SW("show_rating", "إظهار التقييم")] + GRIDF() + DESIGN())
best = dict(title="نبض · منصة الأكثر مبيعاً", icon="sicon-award-ribbon", name="nabd-bestsellers", fields=HEAD("الأكثر مبيعاً", "اللي يطلبونه فعلاً", "الترتيب من قائمة الأكثر مبيعاً في سلة") + [
    PROD(label="منتجات محددة (فارغة = الأكثر مبيعاً من سلة تلقائياً)", mx=20), NUM("limit", "عدد المنتجات", 8, 3, 20), SW("podium", "منصة تتويج للمراكز الثلاثة الأولى", True),
    SW("show_sold", "إظهار عدد المبيعات الحقيقي إن وفّرته سلة", True), NUM("sold_min", "أقل عدد لإظهاره", 1, 1, 500), T("sold_text", "نص المبيعات ({n})", "بيع منه {n}", mx=30),
    SW("sort_by_sold", "رتّب حسب عدد المبيعات إن توفر", True), SW("hide_oos", "إخفاء النافد")] + DESIGN(align="center"))
deals = dict(title="نبض · الخصومات الحيّة", icon="sicon-discount-calculator", name="nabd-deals", fields=HEAD("الخصومات الحيّة", "خصومات حقيقية… بأرقامها", "") + [
    PROD(label="منتجات محددة (فارغة = كل منتجات العروض تلقائياً)", mx=24), NUM("limit", "عدد المنتجات", 8, 1, 24), NUM("min_discount", "أقل نسبة خصم للعرض (%)", 1, 1, 90),
    RADIO("sort", "الترتيب", [("saving", "الأكبر توفيراً بالريال"), ("percent", "الأعلى نسبة"), ("ending", "الأقرب انتهاءً"), ("smart", "حسب اهتمام الزائر")]),
    SW("summary", "ملخص: عدد العروض، أعلى خصم، مجموع التوفير", True), SW("countdown", "عدّاد تنازلي عند وجود تاريخ انتهاء حقيقي للخصم", True),
    SW("hide_empty", "🧠 إخفاء العنصر تلقائياً إذا ما فيه خصومات", True), SW("personalize", "🧠 رتّب حسب سلوك الزائر (في الترتيب الذكي)", True), SW("hide_oos", "إخفاء النافد", True), SW("quick_add", "زر إضافة سريعة", True)] + GRIDF() + DESIGN(theme="dark"))
goals = dict(title="نبض · أهداف السلة", icon="sicon-shopping-bag", name="nabd-cart-goals", fields=HEAD("نبض سلتك", "", "") + [
    COLL("goals", "المكافآت", [NUM("amount", "عند مبلغ (ر.س)", 200, 10, 5000), T("emoji", "رمز", "🚚", ml=False, mx=4), T("label", "المكافأة", "شحن مجاني", mx=40)],
         [{"amount": 200, "emoji": "🚚", "label": "شحن مجاني"}, {"amount": 400, "emoji": "🎁", "label": "هدية مجانية"}, {"amount": 700, "emoji": "💎", "label": "خصم 10%"}], mx=6, item="مكافأة"),
    T("msg_next", "رسالة التقدم ({gap} {goal})", "باقي {gap} وتحصل على {goal}", mx=80), T("msg_done", "رسالة الاكتمال", "مبروك! حصلت على كل المكافآت 🎉", mx=80),
    SW("suggest", "🧠 اقترح أرخص منتج حقيقي يكمّل الهدف", True), T("suggest_text", "نص الاقتراح", "يكمّل لك الهدف:", mx=40)] + SRC("best_selling", 30, 40)[:2] + [
    RADIO("position", "المكان", [("inline", "داخل الصفحة"), ("fixed", "شريط ثابت أسفل الشاشة")]), SW("hide_empty_cart", "إخفاء إذا كانت السلة فارغة")] + DESIGN())
restock = dict(title="نبض · رادار التوفر", icon="sicon-bell-ring", name="nabd-restock", fields=HEAD("رادار التوفر", "", "") + [
    PROD(label="المنتجات المراقبة (فارغة = تلقائي)", mx=40), RADIO("auto_source", "المصدر التلقائي", SOURCES), NUM("watch", "عدد المنتجات المراقبة", 24, 4, 48), NUM("limit", "أقصى عدد في كل قسم", 4, 1, 12),
    T("back_title", "عنوان «رجع للمخزون»", "رجع للمخزون منذ زيارتك الأخيرة", mx=60), SW("show_out", "إظهار النافد مع «نبّهني»", True), T("out_title", "عنوان النافد", "نفدت الحين… نعلمك أول ما ترجع", mx=60),
    SW("show_available", "إظهار المتوفر أيضاً"), SW("privacy_note", "ملاحظة الخصوصية", True)] + GRIDF()[1:] + DESIGN())
ticker = dict(title="نبض · شريط نبض المتجر", icon="sicon-pulse", name="nabd-ticker", fields=[
    SW("f_offers", "عدد المنتجات المخفّضة الآن", True), SW("f_biggest", "أعلى خصم حالي", True), SW("f_low", "منتجات أوشكت على النفاد", True), NUM("low", "حد «أوشك على النفاد»", 5, 1, 30),
    SW("f_new", "أحدث منتج وصل", True), SW("f_top", "الأعلى تقييماً", True), SW("f_from", "أقل سعر في المتجر", True), TA("custom", "جمل إضافية منك (مفصولة بفواصل)", "", mx=400),
    SW("links", "كل جملة تفتح منتجها", True), NUM("speed", "مدة الدورة (ثانية)", 40, 10, 120), COLOR("bar_bg", "لون الشريط", "#111111"), COLOR("bar_text", "لون النص", "#ffffff")] + DESIGN())
build("tw-nabd", repo="tw-nabd-real-live-store-signals", {"ar": "نَبض — إشارات المتجر الحيّة الحقيقية", "en": "Nabd — Real Live Store Signals"},
      {"ar": "6 عناصر تُظهر حيوية متجرك من بياناته الحقيقية فقط: عدّاد المخزون الفعلي، منصة الأكثر مبيعاً بعدد المبيعات من سلة، الخصومات الحية بعدّاد انتهاء حقيقي، أهداف السلة الحية، رادار «رجع للمخزون» مع «نبّهني»، وشريط نبض المتجر. لا أرقام وهمية ولا إشعارات مختلقة أبداً.",
       "en": "6 components that show your store's real pulse: true stock meters, a best-seller podium with Salla's real sold counts, live deals with real end-date countdowns, live cart reward goals, a back-in-stock radar with notify-me, and a store pulse ticker. Never fake numbers or invented notifications."},
      [stock, best, deals, goals, restock, ticker])
