<div align="center">

# 🔍 VedEngine

### AI-Vector Powered Web Search Engine

*Delivering high-performance, Google-style search with natural language vector matching and a modern Claude Warm Beige UI.*

[![Node.js](https://img.shields.io/badge/Node.js-22+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Fastify](https://img.shields.io/badge/Fastify-5.x-000000?style=for-the-badge&logo=fastify&logoColor=white)](https://fastify.dev/)
[![Prisma](https://img.shields.io/badge/Prisma-7.x-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16+-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

---

</div>

## 📖 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Database & Seeding](#-database--seeding)
- [API Reference](#-api-reference)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

**VedEngine** is a full-stack, AI-powered web search engine designed to index documents, web pages, and general knowledge into a PostgreSQL vector database. It features a frictionless Google-style search interface with domain favicons, direct URL redirection, text snippet highlights, and a warm **Claude-inspired Beige & Terracotta light theme**.

---

## ⚡ Key Features

- 🌐 **Frictionless Public Search** — Anyone visiting the website can search documents, view auto-suggestions, and access vector search matches without requiring a login.
- 🎨 **Claude Warm Beige Theme** — Styled with a parchment background (`#faf4ec`), cream cards (`#fcf8f2`), terracotta highlights (`#d97757`), and charcoal typography (`#2d2721`).
- 🔗 **Google Search-Style Results**:
  - Live domain favicons powered by Google's Favicon API.
  - Domain breadcrumbs (e.g. `wikipedia.org › page`).
  - Clickable title links and direct **"Visit Website"** buttons that open external sites in new browser tabs.
  - Highlighted search terms rendered safely via `<mark>` badges.
- 🔐 **Role-Based Access Control (RBAC)**:
  - **Normal Users (`role: "user"`)**: Search, auto-complete suggestions, and query analytics.
  - **Admins (`role: "admin"`)**: Upload documents (`+ Upload Document`), delete indexed files, manage `/documents`, and access audit analytics (`/analytics`).
- 🔎 **Hybrid Search Engine** — PostgreSQL Full-Text Search combined with a substring fallback algorithm (`contains` with `insensitive` mode) ensuring both exact and partial queries (e.g., `clou`, `python`, `ai`) return relevant results.
- 📦 **General Knowledge Seeder** — Pre-populated with 56+ curated topics across Technology, Science, History, Business, Health, Sports, and Arts.

---

## 🧰 Tech Stack

| Category | Technology | Purpose |
|----------|-----------|---------|
| **Frontend** | React 19 + Vite 6 | Fast modern Single Page Application |
| **Styling** | TailwindCSS v4 | Utility-first Claude Warm Beige styling |
| **Routing** | React Router DOM v7 | Dynamic client-side routing & RBAC route guards |
| **Backend API** | Fastify 5 | Ultra-fast Node.js HTTP framework |
| **Database** | PostgreSQL + Prisma 7 | Relational database & type-safe ORM |
| **Cache** | Upstash Redis | High-speed response caching |
| **Scraper & Parser** | Cheerio + Axios | Web page content extraction & link indexing |
| **Auth** | @fastify/jwt + Bcrypt | JSON Web Token authentication & password hashing |
| **Package Manager** | pnpm (Workspaces) | Monorepo package management |

---

## 🏛️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                       VedEngine                             │
│                     (pnpm monorepo)                         │
│                                                             │
│  ┌──────────────────────┐        ┌──────────────────────┐  │
│  │   Frontend Client    │        │     Backend API      │  │
│  │   (apps/frontend)    │        │    (apps/backend)    │  │
│  │   React 19 + Vite    │───────▶│   Fastify 5 + Prisma │  │
│  └──────────────────────┘        └──────────┬───────────┘  │
│                                             │               │
│                                     ┌───────┴────────┐      │
│                                     │   PostgreSQL   │      │
│                                     │   & Redis      │      │
│                                     └────────────────┘      │
└─────────────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
VedEngine/
├── apps/
│   ├── backend/                      # Fastify API Backend
│   │   ├── prisma/
│   │   │   ├── schema.prisma         # Database models (User, Document, SearchLog)
│   │   ├── src/
│   │   │   ├── config/               # Prisma, Redis, Environment configs
│   │   │   ├── controller/           # Search, Document, Auth, Analytics controllers
│   │   │   ├── routes/               # Fastify API routes
│   │   │   ├── services/             # Search logic, SQL full-text search, Auth logic
│   │   │   ├── utils/                # Web scraper (cheerio) & seed data
│   │   │   └── scripts/              # Seed scripts (seed_general_data.js, create_admin.js)
│   │   └── package.json
│   │
│   └── frontend/                     # React Frontend Client
│       ├── src/
│       │   ├── assets/               # Branding assets
│       │   ├── components/           # Navbar, Searchbar, SearchResult, UploadModal, Loading
│       │   ├── context/              # AuthContext (JWT session management)
│       │   ├── pages/                # Dashboard, Documents, Analytics, Login, Register
│       │   ├── routes/               # AppRoutes & AdminRoute protection
│       │   ├── services/             # Axios API service
│       │   ├── index.css             # TailwindCSS v4 Claude Warm Beige theme
│       │   └── main.jsx              # React app entry
│       └── package.json
├── pnpm-workspace.yaml               # Monorepo configuration
└── package.json                      # Root package config
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 22.x
- **pnpm** ≥ 9.x
- **PostgreSQL** database (Local or Supabase)

### 1. Clone the Repository

```bash
git clone https://github.com/Subha12125/VedEngine.git
cd VedEngine
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Environment Setup

Create `.env` files in both `apps/backend/` and `apps/frontend/`:

**`apps/backend/.env`**:
```env
PORT=3000
NODE_ENV=development
DATABASE_URL="postgresql://user:password@host:5432/vedengine"
UPSTASH_REDIS_REST_URL="https://your-redis-url.upstash.io"
UPSTASH_REDIS_REST_TOKEN="your-upstash-token"
JWT_SECRET="supersecretjwtkey"
```

**`apps/frontend/.env`**:
```env
VITE_API_URL="http://localhost:3000/api/v1"
```

### 4. Database Setup & Seeding

```bash
cd apps/backend

# Generate Prisma Client
npx prisma generate

# Apply Database Schema
npx prisma db push

# Populate General Knowledge Base (56+ topics)
node --experimental-strip-types src/scripts/seed_general_data.js

# Create Admin Account (subha)
node --experimental-strip-types src/scripts/create_admin.js
```

### 5. Start Development Servers

Run backend and frontend simultaneously:

```bash
# Start Backend (Port 3000)
pnpm --filter backend dev

# Start Frontend (Port 5173)
pnpm --filter frontend dev
```

Visit the app at **`http://localhost:5173`**.

---

## 🔑 Admin Credentials

| Account | Email | Password | Role |
|---|---|---|---|
| **Admin** | `subha@example.com` | `Subha@12125` | `admin` |

---

## 📡 API Reference

**Base URL:** `http://localhost:3000/api/v1`

### 1. Search Endpoints
| Method | Endpoint | Description | Query Parameters |
|--------|----------|-------------|------------------|
| `GET` | `/search` | Full-text & vector keyword search | `?q=cloud&page=1&limit=10` |
| `GET` | `/search/suggestions` | Auto-complete suggestions | `?q=javascript` |

### 2. Authentication Endpoints
| Method | Endpoint | Description | Payload |
|--------|----------|-------------|---------|
| `POST` | `/auth/register` | Register a new user | `{ name, email, password }` |
| `POST` | `/auth/login` | Login user & return JWT | `{ email, password }` |
| `GET` | `/auth/profile` | Get current user session | Bearer Token |

### 3. Document Management (Admin Only)
| Method | Endpoint | Description | Payload |
|--------|----------|-------------|---------|
| `GET` | `/all` | Get all indexed documents | — |
| `POST` | `/create` | Create document/link | `{ title, content, url }` |
| `POST` | `/upload` | Upload PDF/TXT file | `multipart/form-data` |
| `DELETE`| `/:id` | Delete document by ID | — |

---

## 📄 License

This project is licensed under the **ISC License**.

---

<div align="center">

**Built with ❤️ by [Subha](https://github.com/Subha12125)**

</div>
