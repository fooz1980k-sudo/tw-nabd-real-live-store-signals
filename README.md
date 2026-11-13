# نَبض — إشارات المتجر الحيّة الحقيقية
**Nabd — Real Live Store Signals** — Twilight Component Bundle لمتاجر سلة (ثيم رائد وأي ثيم يدعم Twilight).

6 عناصر تُظهر حيوية متجرك من بياناته الحقيقية فقط: عدّاد المخزون الفعلي، منصة الأكثر مبيعاً بعدد المبيعات من سلة، الخصومات الحية بعدّاد انتهاء حقيقي، أهداف السلة الحية، رادار «رجع للمخزون» مع «نبّهني»، وشريط نبض المتجر. لا أرقام وهمية ولا إشعارات مختلقة أبداً.

6 components that show your store's real pulse: true stock meters, a best-seller podium with Salla's real sold counts, live deals with real end-date countdowns, live cart reward goals, a back-in-stock radar with notify-me, and a store pulse ticker. Never fake numbers or invented notifications.

| العنصر | الوظيفة | عدد الإعدادات |
|---|---|---|
| `salla-nabd-stock` | عدّاد المخزون الحقيقي | 61 |
| `salla-nabd-bestsellers` | منصة الأكثر مبيعاً | 42 |
| `salla-nabd-deals` | الخصومات الحيّة | 47 |
| `salla-nabd-cart-goals` | أهداف السلة | 46 |
| `salla-nabd-restock` | رادار التوفر | 45 |
| `salla-nabd-ticker` | شريط نبض المتجر | 42 |

**مجموع الإعدادات: 283** — تشمل لكل عنصر 30 إعداد تصميم موحد (السمة، الألوان، الخط، المسافات، الحركة، الجدولة، الإخفاء حسب الجهاز، مساعد الإعداد داخل المحرر).

## ذكاء العناصر
- **للتاجر:** إذا تُركت المنتجات فارغة يختار العنصر تلقائياً من بيانات متجرك (الأكثر مبيعاً، الأحدث، العروض…) ويكتب نصوصاً جاهزة بالعربية والإنجليزية، مع مساعد إعداد يظهر داخل المحرر فقط.
- **للعميل:** ذاكرة على جهاز العميل فقط (localStorage) لما شاهده وأضافه، لترتيب الاقتراحات — بدون أي بيانات شخصية تُرسل.
- **بدون أرقام مزيفة:** المخزون والمبيعات والتقييمات والخصومات وتواريخ انتهاء العروض تُقرأ من بيانات سلة الحقيقية فقط، وما لا يتوفر لا يُعرض.

## التطوير
```bash
pnpm install
pnpm run build        # vite build — dist/<component>.js
pnpm run build:split  # كل عنصر في ملف مستقل
```
المعاينة المحلية بالبيانات التجريبية: `demo/index.html` (بيانات عينة فقط).

## صور
![00-cover-1600x1200.jpg](listing/00-cover-1600x1200.jpg)
![01-nabd-stock-1600x1200.jpg](listing/01-nabd-stock-1600x1200.jpg)
![02-nabd-bestsellers-1600x1200.jpg](listing/02-nabd-bestsellers-1600x1200.jpg)
![03-nabd-deals-1600x1200.jpg](listing/03-nabd-deals-1600x1200.jpg)
![04-nabd-cart-goals-1600x1200.jpg](listing/04-nabd-cart-goals-1600x1200.jpg)
![05-nabd-restock-1600x1200.jpg](listing/05-nabd-restock-1600x1200.jpg)
![06-nabd-ticker-1600x1200.jpg](listing/06-nabd-ticker-1600x1200.jpg)
