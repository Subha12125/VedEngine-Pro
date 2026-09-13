<div align="center">

# VedEngine

### AI & Vector-Powered Full-Stack Search Engine

*An enterprise-grade, high-performance web search engine featuring PostgreSQL full-text search, vector fallback indexing, automated web scraping, Upstash Redis caching, and a Claude Warm Beige user interface.*

[![Node.js](https://img.shields.io/badge/Node.js-22+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Fastify](https://img.shields.io/badge/Fastify-5.x-000000?style=for-the-badge&logo=fastify&logoColor=white)](https://fastify.dev/)
[![Prisma](https://img.shields.io/badge/Prisma-7.x-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16+-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Upstash Redis](https://img.shields.io/badge/Upstash_Redis-v1.38-FF4438?style=for-the-badge&logo=redis&logoColor=white)](https://upstash.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Vitest-3.x-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev/)

---

</div>

## 🤖 AI & LLM Context Specification (Machine-Readable Overview)

> **Note for AI Coding Assistants & LLMs**: This section provides structured technical metadata to help AI models parse, navigate, and generate context-aware code for this codebase.

```json
{
  "project_name": "VedEngine",
  "repository_type": "pnpm workspace monorepo",
  "primary_languages": ["JavaScript (ESNext Modules)", "Python (aiService draft)", "SQL (PostgreSQL)"],
  "architecture_pattern": "Decoupled Client-Server Monorepo with RESTful API Services",
  "frontend": {
    "framework": "React 19 (SPA)",
    "bundler": "Vite 8",
    "router": "React Router DOM v7",
    "state_management": "Zustand & React Context API (AuthContext)",
    "query_client": "@tanstack/react-query v5",
    "styling": "TailwindCSS v4 (Custom Claude Warm Beige Theme)",
    "entry_point": "apps/frontend/src/main.jsx"
  },
  "backend": {
    "framework": "Fastify 5",
    "orm": "Prisma 7 with PostgreSQL Provider",
    "cache": "Upstash Redis (@upstash/redis)",
    "auth": "@fastify/jwt & bcrypt password hashing",
    "file_handling": "@fastify/multipart with hard stream validation",
    "validation": "Zod 4 schema validation",
    "entry_point": "apps/backend/src/server.js"
  },
  "database_models": {
    "User": "id (uuid), name, email (unique), password, role ('user'|'admin'), createdAt, updatedAt",
    "Document": "id (uuid), title, content, description, fileName, fileType, fileSize, fileUrl, url, createdAt, updatedAt",
    "SearchLog": "id (uuid), query, createdAt, updatedAt"
  },
  "key_conventions": {
    "api_prefix": "/api/v1",
    "module_type": "ESM (import/export)",
    "node_execution": "node --experimental-strip-types",
    "full_text_search": "PostgreSQL ts_vector, plainto_tsquery, ts_rank, and ts_headline with <mark> tags",
    "fallback_search": "Prisma findMany with substring ILIKE match (contains, mode: insensitive)"
  }
}
```

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [System Architecture](#-system-architecture)
- [Project Directory Map](#-project-directory-map)
- [Getting Started & Installation](#-getting-started--installation)
- [Environment Setup](#-environment-setup)
- [Database Setup & Seeding](#-database-setup--seeding)
- [Role-Based Access Control (RBAC)](#-role-based-access-control-rbac)
- [API Reference](#-api-reference)
- [Database Schema & Data Models](#-database-schema--data-models)
- [Design System & UI Theme](#-design-system--ui-theme)
- [Development & Testing](#-development--testing)
- [License](#-license)

---

## 🌟 Overview

**VedEngine** is an open-source, full-stack, AI-powered web search engine designed for high-performance document indexing, full-text vector matching, and real-time knowledge retrieval. Built on top of PostgreSQL full-text search algorithms (`ts_rank`, `ts_vector`, `ts_headline`), Upstash Redis caching, Fastify 5, and React 19, it delivers a frictionless search experience with snippet highlights, auto-suggestions, domain favicon matching, and audit analytics.

The user interface is modeled after Google-style minimalist search paired with a modern, warm **Claude-inspired Beige & Terracotta light theme** (`#faf4ec` background, `#fcf8f2` cards, `#d97757` terracotta accents, `#2d2721` charcoal typography).

---

## ⚡ Key Features

### 1. 🔍 High-Performance Hybrid Search Engine
- **PostgreSQL Full-Text Search**: Tokenized indexing using `to_tsvector('english', ...)` and stemmed query evaluation with `plainto_tsquery('english', ...)`.
- **Dynamic Term Highlighting**: Utilizes PostgreSQL `ts_headline` to automatically wrap matched search query terms inside safe HTML `<mark>` badges.
- **Substring Matching Fallback**: Gracefully falls back to case-insensitive substring search (`contains`, `mode: "insensitive"`) if full-text index returns zero results, ensuring partial terms (e.g. `clou`, `pyth`) return matching documents.
- **Upstash Redis Cache**: Instant response caching with TTL eviction (24h default) for high-frequency queries to reduce database load.

### 2. 🌐 Google-Style Search Result Cards
- **Domain Favicon Integration**: Live high-resolution domain favicons powered by Google's Favicon API.
- **Breadcrumb Navigation**: Visual URL hierarchy representation (`domain.com › section › subpath`).
- **Direct Website Redirection**: One-click **"Visit Website"** action buttons opening external links safely in new browser tabs (`target="_blank" rel="noopener noreferrer"`).
- **Auto-Suggestions**: Debounced auto-complete suggestion menu rendering matching indexed page titles as users type.

### 3. 🔐 Role-Based Access Control (RBAC)
- **Public Visitors & Normal Users (`role: "user"`)**: Access to instant public search, auto-suggestions, pagination, and sorting filter controls.
- **Administrators (`role: "admin"`)**: Exclusive privileges to upload TXT/PDF/DOCX documents (`+ Upload Document` modal), trigger document creation, manage indexed documents (`/documents`), and audit search query trends (`/analytics`).

### 4. 📁 Document Management & Upload Pipeline
- **Multi-Format Ingestion**: Supports `.txt`, `.pdf`, and `.docx` file uploads via `@fastify/multipart` with a hard 10 MB stream size limit.
- **Cheerio Web Scraper**: Automatic link extraction, title normalization, and text parsing for indexing web documents.

### 5. 📊 Real-Time Analytics & Audit Tracking
- **Search Query Logging**: Automatically records every query string in the `SearchLog` database model.
- **Analytics Dashboard**: Aggregates top search terms, total search operations, system metrics, and index counts.

---

## 🧰 Tech Stack

| Category | Technology | Version | Purpose |
|----------|-----------|---------|---------|
| **Monorepo Manager** | `pnpm` | `≥9.x` | Monorepo package management & workspace linking |
| **Frontend Framework** | React | `19.2` | Single Page Application UI engine |
| **Build Tool & Dev Server** | Vite | `8.0` | Next-gen lightning-fast dev server & bundler |
| **Routing** | React Router DOM | `7.1` | Client-side dynamic routing & RBAC guards |
| **Styling** | TailwindCSS | `4.3` | Utility-first styling with Claude Warm Beige theme |
| **State Management** | Zustand & React Context | `5.0` | Global state and authentication session handling |
| **HTTP Client** | Axios | `1.18` | Asynchronous REST API requests |
| **Backend Framework** | Fastify | `5.8` | Ultra-fast Node.js HTTP web framework |
| **Database ORM** | Prisma | `7.8` | Type-safe PostgreSQL client & schema management |
| **Database Engine** | PostgreSQL | `16+` | Relational data store & native full-text vector engine |
| **Caching Layer** | Upstash Redis | `1.38` | Serverless REST-based Redis cache |
| **Auth & Encryption** | `@fastify/jwt` + `Bcrypt` | `10.1 / 6.0` | JWT token generation & password security |
| **File Parsing & Scraping** | Cheerio | `1.2` | HTML parsing, text extraction, & scraper utility |
| **Validation Engine** | Zod | `4.4` | Request payload & query parameter runtime validation |
| **Unit Testing** | Vitest | `3.2` | Fast unit & integration test runner |

---

## 🏛️ System Architecture

```mermaid
flowchart TB
    subgraph ClientLayer["Frontend Client (apps/frontend)"]
        UI["React 19 + Vite 8 SPA"]
        Router["React Router DOM v7 (AppRoutes)"]
        AuthCtx["AuthContext (JWT State)"]
        Components["Searchbar | SearchResult | UploadModal | Navbar"]
    end

    subgraph APILayer["Backend API (apps/backend - Fastify 5)"]
        App["Fastify Application Instance (app.js)"]
        Cors["CORS & JWT Plugins"]
        Routes["Routes: /search, /documents, /auth, /analytics, /upload"]
        Middleware["Auth & Zod Validation Middleware"]
    end

    subgraph ServiceLayer["Core Services"]
        SearchService["Search Service (FTS + Substring Fallback)"]
        DocService["Document Service"]
        AuthService["Auth Service (Bcrypt + JWT)"]
        AnalyticsService["Analytics Service"]
        Scraper["Web Scraper (Cheerio + Axios)"]
    end

    subgraph DataLayer["Data & Persistence Storage"]
        Redis[("Upstash Redis Cache\nKey: search:<q>:page:<p>:limit:<l>")]
        PostgreSQL[("PostgreSQL Database\nModels: User, Document, SearchLog\nIndex: tsvector / GIN")]
    end

    UI -->|HTTP Requests / JSON| App
    App --> Cors
    App --> Routes
    Routes --> Middleware
    Middleware --> ServiceLayer

    SearchService -->|1. Check Cache| Redis
    SearchService -->|2. Full-Text Query / Fallback| PostgreSQL
    DocService -->|CRUD Operations| PostgreSQL
    AuthService -->|User Lookup / Password Check| PostgreSQL
    AnalyticsService -->|SearchLog Aggregations| PostgreSQL
    Scraper -->|Extract Web Text| DocService
```

---

## 📁 Project Directory Map

```
VedEngine/
├── apps/
│   ├── backend/                           # Fastify 5 Node.js API Server
│   │   ├── prisma/
│   │   │   └── schema.prisma              # Prisma Schema (User, Document, SearchLog)
│   │   ├── src/
│   │   │   ├── config/                    # Config modules (Prisma, Redis, Env)
│   │   │   │   ├── env.config.js
│   │   │   │   ├── prisma.config.js
│   │   │   │   └── redis.config.js
│   │   │   ├── controller/                # Request Handlers & HTTP controllers
│   │   │   │   ├── analytics.controller.js
│   │   │   │   ├── auth.controller.js
│   │   │   │   ├── document.controller.js
│   │   │   │   ├── search.controller.js
│   │   │   │   ├── searchLog.controller.js
│   │   │   │   └── upload.controller.js
│   │   │   ├── middlewares/               # Authentication & Authorization middleware
│   │   │   │   └── auth.middleware.js
│   │   │   ├── routes/                    # Fastify API Route Definitions
│   │   │   │   ├── analytics.route.js
│   │   │   │   ├── auth.route.js
│   │   │   │   ├── document.route.js
│   │   │   │   ├── health.routes.js
│   │   │   │   ├── search.route.js
│   │   │   │   ├── searchLog.route.js
│   │   │   │   └── upload.route.js
│   │   │   ├── scripts/                   # Knowledge Base & Admin Seed Scripts
│   │   │   │   ├── create_admin.js
│   │   │   │   ├── seed2.js
│   │   │   │   ├── seed_general_data.js
│   │   │   │   ├── seed_general_data_expanded.js
│   │   │   │   └── seed_social_media.js
│   │   │   ├── services/                  # Business Logic & Database Service Layer
│   │   │   │   ├── analytics.service.js
│   │   │   │   ├── auth.service.js
│   │   │   │   ├── cache.service.js
│   │   │   │   ├── document.service.js
│   │   │   │   ├── search.service.js
│   │   │   │   ├── searchLog.service.js
│   │   │   │   └── upload.service.js
│   │   │   ├── utils/                     # Helpers & Web Scrapers
│   │   │   │   └── webScraper.utils.js
│   │   │   ├── validators/                # Zod Schemas for payload validation
│   │   │   │   ├── auth.validator.js
│   │   │   │   ├── document.validator.js
│   │   │   │   ├── search.validator.js
│   │   │   │   └── upload.validator.js
│   │   │   ├── app.js                     # Fastify app builder & plugin registration
│   │   │   └── server.js                  # Node HTTP Server entry point
│   │   ├── package.json
│   │   └── vitest.config.js
│   │
│   └── frontend/                          # React 19 Single Page Application
│       ├── src/
│       │   ├── assets/                    # Static branding & images
│       │   ├── components/                # UI Components
│       │   │   ├── Loading.jsx            # Dynamic page loading spinner
│       │   │   ├── Navbar.jsx             # Top navigation bar & Auth actions
│       │   │   ├── Searchbar.jsx          # Search input with auto-suggestions
│       │   │   ├── SearchResult.jsx       # Result card with favicons & snippets
│       │   │   └── UploadModal.jsx        # Admin file upload modal dialog
│       │   ├── context/                   # Context API State
│       │   │   └── AuthContext.jsx        # JWT Authentication session provider
│       │   ├── pages/                     # Application Screen Pages
│       │   │   ├── Analytics.jsx          # Search Audit & System Analytics
│       │   │   ├── Dashboard.jsx          # Public Search Engine Main Page
│       │   │   ├── Documents.jsx          # Admin Document Management Portal
│       │   │   ├── Login.jsx              # Admin & User Login Screen
│       │   │   └── Register.jsx           # Account Registration Screen
│       │   ├── routes/                    # Navigation & Protected Routes
│       │   │   └── AppRoutes.jsx          # React Router v7 layout & route guards
│       │   ├── services/                  # Axios HTTP client configuration
│       │   │   └── api.js
│       │   ├── App.jsx                    # Root React Application component
│       │   ├── index.css                  # TailwindCSS v4 theme & custom utilities
│       │   └── main.jsx                   # React DOM render entry point
│       ├── package.json
│       └── vite.config.js
├── docs/                                  # Project Documentation
├── infrastructure/                        # Deployment & Docker configurations
├── packages/                              # Shared monorepo packages (if applicable)
├── services/                              # Microservices (e.g. aiService Python draft)
├── pnpm-workspace.yaml                    # Monorepo Workspace Configuration
└── package.json                           # Root package manifest
```

---

## 🚀 Getting Started & Installation

### Prerequisites

Ensure you have the following software installed on your local environment:
- **Node.js**: `v22.0.0` or higher
- **pnpm**: `v9.0.0` or higher
- **PostgreSQL Database**: `v16.0` or higher (Local installation, Supabase, or Neon)
- **Redis Cache**: Upstash Redis REST credentials (or standard local Redis server)

---

### 1. Clone the Repository

```bash
git clone https://github.com/Subha12125/VedEngine.git
cd VedEngine
```

---

### 2. Install Workspace Dependencies

Execute `pnpm install` at the root directory to install dependencies across all workspace packages (`apps/backend` and `apps/frontend`):

```bash
pnpm install
```

---

## 🔐 Environment Setup

Create `.env` configuration files in both `apps/backend/` and `apps/frontend/`:

### 1. Backend Environment Configuration (`apps/backend/.env`)

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Connection (PostgreSQL)
DATABASE_URL="postgresql://postgres:password@localhost:5432/vedengine?schema=public"

# Redis Cache (Upstash Redis REST)
UPSTASH_REDIS_REST_URL="https://your-redis-instance.upstash.io"
UPSTASH_REDIS_REST_TOKEN="your_upstash_rest_token_here"

# Authentication
JWT_SECRET="super_secret_jwt_signature_key_change_in_production"
```

### 2. Frontend Environment Configuration (`apps/frontend/.env`)

```env
# Fastify Backend API Base URL
VITE_API_URL="http://localhost:3000/api/v1"
```

---

## 🗄️ Database Setup & Seeding

Navigate to the backend directory to execute database migrations and initialize seed datasets:

```bash
cd apps/backend
```

### Step 1: Generate Prisma Client & Push Schema

```bash
# Generate type-safe Prisma client
npx prisma generate

# Synchronize database schema with PostgreSQL instance
npx prisma db push
```

### Step 2: Seed Knowledge Base Datasets

VedEngine includes multiple comprehensive seed scripts to populate your PostgreSQL database with curated search topics:

```bash
# 1. Populate General Knowledge Base (56+ curated topics: Tech, History, Science)
node --experimental-strip-types src/scripts/seed_general_data.js

# 2. Populate Expanded Knowledge Base (Technology, Programming, Web Standards)
node --experimental-strip-types src/scripts/seed_general_data_expanded.js

# 3. Populate Social Media & Platform Knowledge Base (Social Networks, Concepts)
node --experimental-strip-types src/scripts/seed_social_media.js
```

### Step 3: Create Default Admin Account

Create the primary administrator account for managing document uploads and viewing analytics:

```bash
node --experimental-strip-types src/scripts/create_admin.js
```

---

## 🔑 Role-Based Access Control (RBAC)

VedEngine enforces strict role separation between general search visitors and administrators:

| Permission / Action | Public Visitor | Registered User (`role: "user"`) | Administrator (`role: "admin"`) |
|---------------------|:--------------:|:-------------------------------:|:------------------------------:|
| Perform Search Queries | ✅ Yes | ✅ Yes | ✅ Yes |
| Auto-Complete Suggestions | ✅ Yes | ✅ Yes | ✅ Yes |
| View Domain Favicons & Snippets | ✅ Yes | ✅ Yes | ✅ Yes |
| Filter & Sort Search Results | ✅ Yes | ✅ Yes | ✅ Yes |
| Upload Files (PDF/TXT/DOCX) | ❌ No | ❌ No | ✅ Yes |
| Create Web Documents via URL | ❌ No | ❌ No | ✅ Yes |
| Access Document Management (`/documents`) | ❌ No | ❌ No | ✅ Yes |
| Delete Indexed Documents | ❌ No | ❌ No | ✅ Yes |
| View Search Analytics (`/analytics`) | ❌ No | ❌ No | ✅ Yes |

### Default Admin Credentials

```
Email:    subha@example.com
Password: Subha@12125
Role:     admin
```

---

## ⚡ Running Development & Production Servers

### Running Development Servers

Run backend and frontend concurrently from the monorepo root:

```bash
# Terminal 1: Start Fastify API Backend (Port 3000)
pnpm --filter backend dev

# Terminal 2: Start React Vite Frontend (Port 5173)
pnpm --filter frontend dev
```

Visit the application in your browser at **`http://localhost:5173`**.

---

## 📡 API Reference

Base API Route: `http://localhost:3000/api/v1`

### 1. Health Endpoint

#### `GET /health`
Returns system status and database readiness.
- **Auth Required**: None
- **Response `200 OK`**:
```json
{
  "status": "ok",
  "uptime": 120.45,
  "timestamp": "2026-08-27T19:30:00.000Z"
}
```

---

### 2. Search Endpoints

#### `GET /search`
Performs PostgreSQL full-text search with vector ranking, term highlighting, pagination, and fallback matching.
- **Auth Required**: None
- **Query Parameters**:
  - `q` (string, required): Search query term (e.g. `javascript`)
  - `page` (number, optional, default: `1`): Page number
  - `limit` (number, optional, default: `10`): Results per page
  - `sort` (string, optional, default: `"newest"`): `"newest"` or `"oldest"`
- **Response `200 OK`**:
```json
{
  "documents": [
    {
      "id": "c7b84852-19e4-4a4e-862d-0599a0f443b2",
      "title": "JavaScript (Programming Language)",
      "description": "High-level multi-paradigm programming language.",
      "url": "https://en.wikipedia.org/wiki/JavaScript",
      "fileType": null,
      "fileName": null,
      "fileUrl": null,
      "snippet": "...standard programming language for <mark>JavaScript</mark> web development...",
      "createdAt": "2026-08-27T19:00:00.000Z",
      "updatedAt": "2026-08-27T19:00:00.000Z",
      "rank": 0.0912
    }
  ],
  "page": 1,
  "limit": 10,
  "total": 1,
  "totalPages": 1
}
```

#### `GET /search/suggestions`
Provides fast auto-complete suggestions based on query substrings.
- **Auth Required**: None
- **Query Parameters**:
  - `q` (string, required): Query prefix
- **Response `200 OK`**:
```json
[
  {
    "id": "c7b84852-19e4-4a4e-862d-0599a0f443b2",
    "title": "JavaScript (Programming Language)",
    "url": "https://en.wikipedia.org/wiki/JavaScript"
  }
]
```

---

### 3. Authentication Endpoints

#### `POST /auth/register`
Registers a new user account.
- **Auth Required**: None
- **Body (`application/json`)**:
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "Password123!"
}
```
- **Response `201 Created`**:
```json
{
  "message": "User registered successfully",
  "user": {
    "id": "user-uuid",
    "name": "Jane Doe",
    "email": "jane@example.com",
    "role": "user"
  }
}
```

#### `POST /auth/login`
Authenticates user and returns JWT bearer token.
- **Auth Required**: None
- **Body (`application/json`)**:
```json
{
  "email": "jane@example.com",
  "password": "Password123!"
}
```
- **Response `200 OK`**:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "user-uuid",
    "name": "Jane Doe",
    "email": "jane@example.com",
    "role": "user"
  }
}
```

#### `GET /auth/profile`
Retrieves currently authenticated user's session profile.
- **Auth Required**: Bearer JWT (`Authorization: Bearer <token>`)
- **Response `200 OK`**:
```json
{
  "user": {
    "id": "user-uuid",
    "name": "Jane Doe",
    "email": "jane@example.com",
    "role": "user",
    "createdAt": "2026-08-27T19:00:00.000Z"
  }
}
```

---

### 4. Document Management Endpoints (Admin Only)

#### `GET /all`
Retrieves all indexed documents in the database.
- **Auth Required**: None (or Admin session for detailed management)
- **Response `200 OK`**: Array of document objects.

#### `POST /create`
Creates a new document manually or via web scraper URL link.
- **Auth Required**: Admin JWT Token
- **Body (`application/json`)**:
```json
{
  "title": "React Documentation",
  "content": "React is a JavaScript library for building user interfaces.",
  "url": "https://react.dev",
  "description": "Official React website documentation"
}
```

#### `POST /upload`
Uploads a document file (.txt, .pdf, .docx) for parsing and indexation.
- **Auth Required**: Admin JWT Token
- **Content-Type**: `multipart/form-data`
- **Fields**:
  - `file`: File binary (Max 10 MB)
  - `title`: (Optional) Document title
  - `description`: (Optional) Description text

#### `DELETE /:id`
Deletes an indexed document by its unique UUID.
- **Auth Required**: Admin JWT Token
- **Response `200 OK`**: `{ "message": "Document deleted successfully" }`

---

### 5. Analytics Endpoints

#### `GET /analytics/search`
Retrieves top search queries, request volume, and aggregate search statistics.
- **Auth Required**: Admin JWT Token
- **Response `200 OK`**:
```json
{
  "totalSearches": 1420,
  "topQueries": [
    { "query": "javascript", "count": 210 },
    { "query": "python", "count": 185 },
    { "query": "react", "count": 140 }
  ]
}
```

---

## 🗃️ Database Schema & Data Models

Prisma Schema Location: `apps/backend/prisma/schema.prisma`

### 1. `User` Model
Stores authenticated users and administrative credentials.

| Field | Type | Attributes | Description |
|-------|------|------------|-------------|
| `id` | `String` | `@id @default(uuid())` | Unique user identifier |
| `name` | `String` | — | User's full name |
| `email` | `String` | `@unique` | Unique login email address |
| `password` | `String` | — | Bcrypt hashed password |
| `role` | `String` | `@default("user")` | User authority (`"user"` or `"admin"`) |
| `createdAt` | `DateTime` | `@default(now())` | Account creation timestamp |
| `updatedAt` | `DateTime` | `@updatedAt` | Account modification timestamp |

### 2. `Document` Model
Stores indexed web pages, uploaded files, and seeded knowledge items.

| Field | Type | Attributes | Description |
|-------|------|------------|-------------|
| `id` | `String` | `@id @default(uuid())` | Unique document identifier |
| `title` | `String` | — | Title of document or web page |
| `content` | `String` | — | Raw body text for full-text search indexing |
| `description` | `String?` | Optional | Summary preview of content |
| `fileName` | `String?` | Optional | Original uploaded file name |
| `fileType` | `String?` | Optional | MIME type (`application/pdf`, `text/plain`) |
| `fileSize` | `Int?` | Optional | File size in bytes |
| `fileUrl` | `String?` | Optional | Storage location link |
| `url` | `String?` | Optional | Canonical web page URL |
| `createdAt` | `DateTime` | `@default(now())` | Creation timestamp |
| `updatedAt` | `DateTime` | `@updatedAt` | Modification timestamp |

### 3. `SearchLog` Model
Audits query execution history for analytics aggregation.

| Field | Type | Attributes | Description |
|-------|------|------------|-------------|
| `id` | `String` | `@id @default(uuid())` | Unique log entry identifier |
| `query` | `String` | — | Raw search query string |
| `createdAt` | `DateTime` | `@default(now())` | Timestamp of query execution |
| `updatedAt` | `DateTime` | `@updatedAt` | Modification timestamp |

---

## 🎨 Design System & UI Theme

VedEngine features a custom **Claude-Inspired Warm Beige** aesthetic configured via TailwindCSS v4:

```css
/* Color Palette Specifications */
--color-bg-main:       #faf4ec; /* Parchment Warm Beige Background */
--color-card-bg:       #fcf8f2; /* Cream Card Component Background */
--color-terracotta:    #d97757; /* Terracotta Accent & Highlight Color */
--color-charcoal:      #2d2721; /* Dark Charcoal Primary Typography */
--color-muted-border:  #e6ded4; /* Soft Warm Border Stroke */
```

### Key UI Features
- **Responsive Layout**: Designed for seamless rendering across desktop, tablet, and mobile displays.
- **Glassmorphism Nav**: Floating frosted glass header with translucent background blur.
- **Interactive Micro-Animations**: Smooth hover transitions, active search focus glow, and animated modal transitions powered by `framer-motion`.

---

## 🧪 Development & Testing

### Running Unit Tests

Backend service unit tests are implemented using **Vitest**:

```bash
cd apps/backend
pnpm test
```

### Code Formatting & Linting

```bash
# Run ESLint on Frontend codebase
cd apps/frontend
pnpm lint
```

---

## 📄 License

This project is open-source software licensed under the **ISC License**.

---

<div align="center">

**Maintained with ❤️ by [Subha](https://github.com/Subha12125)**

</div>
