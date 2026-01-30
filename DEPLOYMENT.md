# نشر الموقع على Vercel مع قاعدة البيانات

المشروع يستخدم **PostgreSQL** (وليس SQLite) حتى يعمل التسجيل وتسجيل الدخول على Vercel. قاعدة البيانات المحلية `dev.db` لا تعمل على السيرفر.

> **ملاحظة:** مشروعنا يستخدم **Prisma** وليس `@neondatabase/serverless`. لا تحتاج تثبيت ذلك الـ driver ولا إنشاء الجداول يدوياً بـ SQL — Prisma ينشئ كل الجداول (User, Product, Order...) عبر `prisma db push`.

## الخطوات

### 1. إنشاء قاعدة بيانات سحابية (مجانية)

اختر أحد الخيارين:

#### أ) Vercel Postgres (مدمج مع Vercel)
1. ادخل على [Vercel Dashboard](https://vercel.com/dashboard) → مشروعك
2. تبويب **Storage** → **Create Database** → اختر **Postgres**
3. اختر الخطة المجانية واسم القاعدة
4. من نفس الصفحة اضغط **Connect to Project** وربطها بمشروعك (سيُضاف `DATABASE_URL` تلقائياً)

#### ب) Neon (PostgreSQL مجاني)
1. سجّل على [neon.tech](https://neon.tech)
2. أنشئ مشروعاً جديداً (New Project)
3. انسخ **Connection string** (يبدأ بـ `postgresql://...`)
4. (اختياري) إذا ربطت Neon بمشروعك من Vercel: **Storage** → اختر قاعدة Neon → **Connect to Project**، ثم محلياً نفّذ: `vercel env pull .env.development.local` لسحب آخر متغيرات البيئة.

### 2. ربط Neon بمشروعك وإعداد المتغيرات

1. **Connect to a project:** من صفحة Neon على Vercel (مثل neon-fuchsia-notebook) اضغط **Connect to Project** واختر مشروع **clotes-star**. هذا يضيف متغيرات البيئة تلقائياً للمشروع.
2. إن لم يُضف `DATABASE_URL` يدوياً، من **Settings** → **Environment Variables** تأكد من وجود:
   - **`DATABASE_URL`** — انسخ قيمة **POSTGRES_PRISMA_URL** أو **DATABASE_URL** من صفحة Neon (مُوصى به لـ Prisma: استخدم **POSTGRES_PRISMA_URL** لأنها مناسبة للاتصال في بيئة serverless).
   - **`NEXTAUTH_SECRET`** — أي نص عشوائي طويل.
   - **`NEXTAUTH_URL`** — رابط موقعك، مثال: `https://clotes-star.vercel.app`

### 3. إنشاء الجداول في قاعدة الإنتاج (بدون SQL يدوي)

مرة واحدة فقط، من جهازك. **لا تحتاج** تنفيذ أي SQL في Neon Console — Prisma ينشئ كل الجداول تلقائياً:

```bash
# استبدل POSTGRES_URL برابط قاعدة الإنتاج من Vercel أو Neon
set DATABASE_URL=POSTGRES_URL
npx prisma db push
npm run db:seed
```

أو إذا استخدمت Vercel Postgres وربطته بالمشروع، انسخ `DATABASE_URL` من Vercel إلى ملف `.env` محلياً ثم نفّذ:

```bash
npx prisma db push
npm run db:seed
```

### 4. إعادة النشر

بعد حفظ المتغيرات، من Vercel: **Deployments** → **Redeploy** (أو ادفع تغييرات جديدة من Git).

---

## التطوير المحلي بعد التبديل لـ PostgreSQL

- احذف أو لا تستخدم `file:./dev.db` — لم نعد نستخدم SQLite.
- ضع في `.env` رابط PostgreSQL (نفس قاعدة التطوير من Neon أو قاعدة ثانية من Vercel Postgres).
- ثم: `npm run db:push` و `npm run db:seed` كما سبق.

---

## ما لا تحتاج فعله (دليل Neon العام)

| الدليل العام لـ Neon | مشروعنا (Prisma) |
|----------------------|-------------------|
| تثبيت `@neondatabase/serverless` | **لا** — نستخدم Prisma فقط |
| إنشاء جدول يدوياً بـ `CREATE TABLE comments` في Neon SQL Editor | **لا** — الجداول تُنشأ بـ `npx prisma db push` |
| استخدام `neon()` وكتابة SQL يدوي في الكود | **لا** — نستخدم `prisma.user.create()` وغيرها من Prisma |

---

## بعد إنشاء Neon على Vercel (مثل neon-fuchsia-notebook)

1. **Connect to a project** — اختر مشروع **clotes-star** حتى تُضاف المتغيرات تلقائياً.
2. **الحصول على `DATABASE_URL` محلياً** (أحد الخيارين):
   - **مع Vercel CLI:** ثبّت ثم اسحب المتغيرات:
     ```bash
     npm i -g vercel
     vercel env pull .env.local
     ```
   - **بدون CLI:** من Vercel → مشروعك → **Settings** → **Environment Variables** انسخ قيمة `DATABASE_URL` (أو `POSTGRES_PRISMA_URL`) والصقها في ملف `.env` محلياً في سطر:
     ```
     DATABASE_URL="postgresql://..."
     ```
3. **إنشاء الجداول والبيانات الأولى:** مرة واحدة فقط:
   ```bash
   npx prisma db push
   npm run db:seed
   ```
4. **إعادة النشر** من Vercel (Redeploy) ثم جرّب التسجيل على الموقع.

---

## إذا ظهر `?error=Configuration` على صفحة اللوجن

هذا يعني أن **NextAuth** لا يجد إعدادات صحيحة على السيرفر. تأكد من إضافة **كل** المتغيرات التالية في Vercel → مشروعك → **Settings** → **Environment Variables**:

| المتغير | مطلوب؟ | مثال / ملاحظة |
|--------|--------|----------------|
| **`NEXTAUTH_SECRET`** | **نعم** — بدونها يظهر Configuration | أي نص عشوائي طويل (32 حرفاً أو أكثر). يمكن توليده بأمر: `openssl rand -base64 32` أو أي جملة طويلة سرية. |
| **`NEXTAUTH_URL`** | **نعم** | **بالضبط** رابط موقعك، مثل: `https://clotes-star.vercel.app` (بدون / في النهاية). |
| **`DATABASE_URL`** | **نعم** | رابط PostgreSQL من Neon أو Vercel Postgres. |

- بعد إضافة أو تعديل أي متغير، **يجب إعادة النشر (Redeploy)** حتى تُطبَّق التغييرات.
- تأكد أن القيم مضبوطة لبيئة **Production** (وأيضاً Preview إن أردت).
