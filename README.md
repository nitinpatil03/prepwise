
# 🚀 PrepWise – AI-Powered Mock Interview Platform

An open-source platform to practice technical interviews with AI.  
Built with **Next.js 14, TypeScript, TailwindCSS, Firebase, and OpenAI**.

---

## ✨ Features

- 📄 **AI Mock Interviews** – Get dynamic questions and real-time feedback.
- 🎤 **Voice Input** – Answer interview questions by speaking.
- 📊 **Performance Dashboard** – Track your progress over time.
- 🧩 **Tech Stack Support** – Choose from different technologies and interview types.
- 💾 **Firestore Database** – Save interview sessions securely.
- 🔐 **Authentication** – Sign in with Google or Email/Password.

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 14, TypeScript, TailwindCSS  
- **Backend & Auth:** Firebase, Firestore  
- **AI Integration:** OpenAI API  
- **Deployment:** Vercel  

---


## ⚡ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/nitinpatil03/prepwise.git
cd prepwise
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup environment variables

Create a **`.env.local`** file in the root and add:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
OPENAI_API_KEY=your_openai_key
```

### 4️⃣ Run the development server

```bash
npm run dev
```

---

## 📂 Project Structure

```
prepwise/
 ┣ app/
 ┣ components/
 ┣ lib/
 ┣ public/
 ┣ styles/
 ┣ .gitignore
 ┣ package.json
 ┗ README.md
```

---

## 🚀 Deployment

Easily deploy with **Vercel**:

```bash
npm run build
```

Then connect your repo to [Vercel](https://vercel.com/) and deploy.

---


