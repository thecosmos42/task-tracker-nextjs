# 📝 Task Tracker

A simple and elegant task tracking app built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. It allows users to add, complete, delete, and manage their daily tasks.

---

## 🚀 Features

- ✅ Add new tasks
- ✅ Mark tasks as complete/incomplete
- ✅ Automatically sorts tasks (incomplete on top)
- ✅ Delete individual tasks
- ✅ Clear all tasks
- ✅ Responsive and clean UI with Tailwind CSS
- ✅ Built with modern Next.js App Router (app directory)

---

## 📸 Preview

![Task Tracker Screenshot](task-tracker-next/public/screenshot.JPG) 

---

## 🛠️ Tech Stack

- **Next.js 14**
- **TypeScript**
- **Tailwind CSS**
- React Hooks (`useState`)
- App Router (App Directory)

---

## 📦 Installation

# Clone the repo
```
git clone https://github.com/your-username/task-tracker-next.git
cd task-tracker-next
```

# Install dependencies
```
npm install
```

# Run the development server
```
npm run dev
```

Open http://localhost:3000 in your browser.


🧱 Project Structure
```
src/
├── app/                              # Next.js App Router directory
│   ├── layout.tsx                    # Root layout shared across all pages
│   ├── page.tsx                      # Main task tracker page (home)
│   └── globals.css                   # Global styles (imported in layout)
│
├── components/                       # Reusable UI components
│   └── TaskItem.tsx                  # Component for individual task item
│
├── types/                            # TypeScript type definitions
│   └── task.ts                       # Task interface/type definition
│
├── public/                           # Static assets (e.g. favicon, images)
│   └── favicon.ico                   
│   └── screenshot.png                # Optional: preview image for README
│
├── utils/                            # (Optional) Utility functions/helpers
│   └── taskUtils.ts
│
├── package.json                      # Project metadata and dependencies
├── tsconfig.json                     # TypeScript configuration
├── tailwind.config.js                # Tailwind CSS configuration
├── postcss.config.js                 # PostCSS configuration
├── next.config.js                    # Next.js configuration (if needed)


```

