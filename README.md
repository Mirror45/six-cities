# 🏙️ Six Cities — Rental Offers App

A full-featured rental property application built with **React**, **Redux Toolkit**, and **TypeScript**.  
The app allows users to explore and filter accommodation offers in six European cities, view detailed listings, leave reviews, and manage favorite places.  
Includes full authentication flow and API integration.
---

## ⚙️ Functionality

### 📋 Core Features

- **City Selection:** Choose among 6 cities (Paris, Cologne, Brussels, Amsterdam, Hamburg, Dusseldorf) to view current rental offers.
- **Offer Listings:** Paginated list with sorting options:
  - Popular (default)
  - Price: low to high
  - Price: high to low
  - Top rated first
- **Map Integration:** Offers are displayed as blue markers on the map. Hovering on a card highlights the corresponding marker.
- **Favorites Management:**
  - Add/remove offers to favorites.
  - Favorites are grouped by city on a separate protected page.
- **Authorization Flow:**
  - Sign In page with validation.
  - Authorization via email/password (any valid format).
  - Redirects based on auth state.
- **Offer Details Page:**
  - Full info about the selected listing.
  - Up to 6 preview images.
  - Host info with pro badge.
  - Reviews list sorted by date.
  - Nearby offers (3) + current one displayed on a map.
  - Review form for authorized users (with validation and rating).
- **404 Page:** For handling invalid routes.

---

## 🛠 Tech Stack

### 🚀 Core Stack

| Technology         | Purpose                                         |
|-------------------|--------------------------------------------------|
| React             | SPA UI Framework                                 |
| TypeScript        | Static typing for robustness                     |
| Redux Toolkit     | State management with slices and async thunks   |
| React Router v6   | Client-side routing                              |
| Axios             | HTTP requests and API handling                   |
| Leaflet           | Map rendering with interactive markers           |
| React Leaflet     | React integration for Leaflet                    |

### 📦 Additional Libraries

| Library                  | Role                                      |
|--------------------------|-------------------------------------------|
| classnames               | Conditional class toggling                |
| dayjs                    | Date formatting                           |
| ESLint + Prettier        | Code style, linting and formatting        |

---

## 🔐 Authentication Flow

- Email and password must be non-empty, valid formats.
- Successful login stores token to access protected routes.
- Invalid login or restricted route access redirects to `/login`.
- `Favorites` and review submission available only when authorized.

---

## 🧪 Quality

- Linting: `eslint`, `prettier` integrated
- `EditorConfig` used to maintain consistent formatting rules

---

## 📂 Project Structure (Simplified)

src/

├── components/ # UI and feature components

├── pages/ # Page-level components (Main, Login, Favorites, Offer)

├── store/ # Redux slices and async logic

├── hooks/ # Custom React hooks

├── types/ # TypeScript types and interfaces

├── services/ # Axios and API interactions

├── utils/ # Utility functions
├── hocs/ # Higher-order components (e.g., withAuthRedirect)

├── assets/ # Static files like icons

├── styles/ # Global and scoped styles

└── main.tsx # Entry point

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/six-cities.git

cd six-cities

# Install dependencies
npm install

# Run the development server
npm start
```
