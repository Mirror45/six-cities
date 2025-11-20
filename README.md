# 🏙️ Six Cities – A Rental Booking SPA

🚀 **Live Demo:** [six-cities.vercel.app](https://six-cities-rouge.vercel.app/)

A fully functional Single Page Application (SPA) for property rentals built with the modern **React + Vite** stack. The project demonstrates proficiency in handling complex state management, interactive maps, and asynchronous data operations.

---

## 📖 Project Overview

**Six Cities** simulates a short-term rental booking service across six European cities: *Amsterdam, Cologne, Paris, Dusseldorf, Brussels, and Hamburg*.

The application implements a complete user flow: from browsing and filtering offers to user authentication and submitting reviews. All data is fetched from a real server.

---

## ✨ Key Features

- ⚡ **Vite-Powered** — Instant server start and lightning-fast Hot Module Replacement (HMR).
- 🗺️ **Interactive Map (Leaflet)** Offers are displayed on a dynamic map with custom markers. Includes state synchronization: hovering over an offer card highlights the corresponding marker on the map.
- 🔐 **Authentication & Protected Routes** Token-based authentication. The **Favorites** page is restricted to authorized users. Unauthorized access attempts redirect to `/login`.
- ❤️ **Favorites System** Users can add or remove listings from their favorites. The state is synchronized with the server.
- 🔍 **Sorting & Filtering** Dynamic filtering by city and sorting options (Popular, Price: low/high, Top rated).
- 💬 **Reviews & Ratings** Authorized users can submit reviews with client-side validation (50-300 characters). Dates are formatted using `dayjs`.
- 🔔 **Error Handling** User-friendly error notifications (using `react-toastify`) for API failures (400, 401, 404).

---

## 🛠 Tech Stack

### 🚀 Core

| Technology | Purpose |
|------------|---------|
| **React 18** | UI Library (Hooks, Functional Components). |
| **TypeScript** | Static typing for robust code (Interfaces, Enums, Generics). |
| **Vite** | Next-generation frontend tooling for fast build and dev server. |
| **Redux Toolkit** | Global state management (Slices, createAsyncThunk, Selectors). |
| **React Router v6** | Declarative client-side routing. |
| **Axios** | HTTP client with interceptors for token handling and error response. |

### 📦 Additional Libraries

| Library | Role |
|---------|------|
| **Leaflet / React-Leaflet** | Rendering interactive maps and markers. |
| **Vitest** | Unit testing framework (Jest-compatible). |
| **React Toastify** | Toast notifications for server errors. |
| **React Helmet Async** | Managing document head (title, meta) for SEO. |
| **Day.js** | Date formatting. |
| **Classnames** | Conditional utility for CSS classes. |

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/Mirror45/six-cities.git

cd six-cities

# Install dependencies
npm install

# Run the development server
npm start
```

