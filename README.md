# Comix Restaurant
## Next.js 15 + tRPC + PostgreSQL Project

## 🚀 Project Setup

### 1️⃣ Prerequisites
Make sure you have the following installed:
- **Node.js** (v18+ recommended)
- **PostgreSQL** (Running database instance)
- **Prisma** ORM
- **npm** (or pnpm/yarn)

---

### 2️⃣ Install Dependencies
```sh
npm install  # Or use pnpm install / yarn install
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
npm prisma migrate dev
npm prisma db seed
```

---

### 5️⃣ Start the Development Server
```sh
npm dev  # Runs on http://localhost:3000
```

---

## 🛠 API Routes

### ➤ **Get Restaurants**
Fetch all posts.
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
  "id": "8ce5g4f3-jg09-7c40-e98c-i1ee3ff3408f",
  "name": "텐푸라 마츠야",
  "desc": "바삭한 텐푸라를 맛볼 수 있는",
  "rating": 4.3,
  "ratingCount": 220,
  "category": "TEMPURA",
  "images": [
    "https://images.unsplash.com/photo-1593357871477-00fd350cc0f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1593357871477-00fd350cc0f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1593357871477-00fd350cc0f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ],
  "isFavorite": true,
  "featured": {
    "id": "11169801-57bb-4a42-b517-19c36e3e23f0",
    "text": "나고야 최고의 텐푸라집",
    "icon": "stars-02",
    "restaurantId": "8ce5g4f3-jg09-7c40-e98c-i1ee3ff3408f"
  }
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
├── 📂 src
│   ├── 📂 app           
│   ├── 📂 components 
│   ├── 📂 constants
│   ├── 📂 server
│   ├── 📂 types
│   ├── 📂 utils
│
├── 📜 .gitignore
├── 📜 package.json
├── 📜 README.md
```

---

## 🔥 Deployment
For production deployment, use:
```sh
npm build
npm start
```

You can deploy on **Vercel, Railway, or Fly.io** with PostgreSQL support.

---

## 👨‍💻 Contributors
- **Hoang Bui** - Full Stack Developer
- Open to contributions!

---

## 📜 License
MIT License

