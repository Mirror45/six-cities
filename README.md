# 🏙️ Six Cities – A Rental Booking SPA

🚀 **Live Demo:** [six-cities.vercel.app](https://six-cities-rouge.vercel.app/)

A fully functional single-page application (SPA) for property rentals built with React and Redux, featuring interactive maps and dynamic filtering.

---

# 📖 Project Overview

**Six Cities** is a single-page application (SPA) designed to showcase proficiency in modern frontend development technologies.  
The project simulates a short-term rental booking service across six European cities.  
It includes advanced state management logic, user authentication, and integration with third-party services for map rendering.

---


## ⚙️ Functionality

## ✨ Key Features

- 🗺️ **Interactive Leaflet Map**  
  All rental offers are displayed on a dynamic map with custom markers. When hovering over a listing card on the main page, the corresponding marker is highlighted in orange to improve user interaction.

- 🔐 **Full Authentication & Protected Routes**  
  A complete authentication flow is implemented (sign in and sign out). Private pages such as **Favorites** are restricted to authorized users only. Unauthorized users are automatically redirected to the login page.

- ⭐ **Favorites System**  
  Users can add or remove listings from their favorites. A dedicated **Favorites** page displays saved offers grouped by city.

- 🔍 **Flexible Sorting Options**  
  Offers can be sorted by:
  - Popularity (default)
  - Price: low to high
  - Price: high to low
  - Rating (top rated first)

- 📝 **Review Form with Validation**  
  Authorized users can submit reviews with a rating. The form includes client-side validation: the comment must be between 50 and 300 characters, and the submit button becomes active only when all conditions are met.

- 📄 **Detailed Offer Page**  
  Each listing has its own detailed page including:
  - Up to 6 images in the gallery
  - List of amenities
  - Host information (with "Pro" badge)
  - Reviews sorted by date
  - A map showing the current offer and 3 similar ones nearby

- 🚫 **404 Page**  
  Handles invalid or non-existing routes with a custom "Not Found" page.


---

## 🛠 Tech Stack

### 🚀 Core Stack

| Technology       | Purpose                                                                 |
|------------------|-------------------------------------------------------------------------|
| **React**         | Building a declarative, component-based, and interactive user interface. |
| **TypeScript**    | Providing static typing to reduce runtime errors, improve maintainability, and enhance overall developer experience. |
| **Redux Toolkit** | Managing complex global application state in a predictable and efficient way, ensuring seamless data synchronization between components. |
| **React Router v6** | Enabling client-side routing to deliver a smooth, multi-page experience within a single-page application (SPA). |
| **Axios**         | Promise-based HTTP client used for reliable communication with the backend API. |
| **Leaflet**       | Rendering interactive maps with custom markers to visualize rental offers. |

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

## 🧠 Challenges & Future Improvements

### ✅ Challenges Overcome

- **Synchronizing Map State with UI:**  
  One of the main technical challenges was implementing real-time marker highlighting on the map when hovering over a listing card. This required well-structured global state management using Redux, allowing two independent components (the listing and the map) to communicate efficiently without direct coupling.

- **Integrating an Imperative Library (Leaflet) into a Declarative Framework (React):**  
  Leaflet directly manipulates the DOM, which contradicts React’s declarative nature. To ensure seamless integration, a custom React hook was created to manage the map’s lifecycle and its layers, preventing memory leaks and avoiding conflicts with the React virtual DOM.

### 🚧 Planned Improvements

- **Implementing Booking Functionality:**  
  Add a calendar UI for selecting check-in and check-out dates, along with logic for sending booking requests and displaying unavailable dates.

- **Performance Optimization:**  
  Introduce lazy loading for gallery images and components on the offer details page to improve initial load time and overall performance.

