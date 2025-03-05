# NextJs Starter Sample
## Next.js 15 + tRPC + PostgreSQL Project

## 🚀 Project Setup

### 1️⃣ Prerequisites
Make sure you have the following installed:
- **Node.js** (v18+ recommended)
- **PostgreSQL** (Running database instance)
- **Prisma** ORM
- **pnpm** (or npm/yarn)

---

### 2️⃣ Install Dependencies
```sh
pnpm install  # Or use npm install / yarn install
```

---

### 3️⃣ Configure Environment Variables
Create a **.env** file in the root of the project and set up the database URL:
```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/your_database"
```
Replace `USER`, `PASSWORD`, and `your_database` with your actual PostgreSQL credentials.

---

### 4️⃣ Setup the Database
Run Prisma migrations and seed the database:
```sh
pnpm prisma migrate dev
pnpm prisma db seed
```

---

### 5️⃣ Start the Development Server
```sh
pnpm dev  # Runs on http://localhost:3000
```

---

## 🛠 API Routes

### ➤ **Get Restaurants**
Fetch all restaurants.
```
GET /api/trpc/getRestaurants
```
#### **Example Request (Browser/Postman/cURL)**
```sh
curl -X GET http://localhost:3000/api/trpc/getRestaurants
```
#### **Response Example**
```json
{
  "id": "4dc2e1d1-fe89-4a29-b86a-f8bb0ce1395d",
  "name": "카구라자카 이시카와 스시하루 나카노시마 스시야",
  "category": "YAKITORI",
  "city": "osaka",
  "rating": 4.2,
  "isFavorite": true
}
```

---

## 📂 Project Structure
```
📦 your-project
├── 📂 app
│   ├── 📂 api
│   │   ├── 📂 trpc
│   │   │   ├── 📜 [trpc]/route.ts  # API handler
│   ├── 📂 layout.tsx              # Root Layout
│   ├── 📂 page.tsx                # Homepage
│
├── 📂 server
│   ├── 📂 trpc
│   │   ├── 📜 router.ts           # tRPC Router
│
├── 📂 prisma
│   ├── 📜 schema.prisma           # Database schema
│   ├── 📜 seed.ts                 # Seed data
│
├── 📜 .gitignore
├── 📜 package.json
├── 📜 README.md
```

---

## 🔥 Deployment
For production deployment, use:
```sh
pnpm build
pnpm start
```

You can deploy on **Vercel, Railway, or Fly.io** with PostgreSQL support.


---

## 📜 License
MIT License

