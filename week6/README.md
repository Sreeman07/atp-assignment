# Week 6 — React Advanced Concepts

A collection of React projects covering API integration, React Context, State Management, React Hook Form, React Router, and a full-stack Employee CRUD app with an Express + MongoDB backend.


## 🗂️ Projects Overview

### 1. API Demo (`APIdemo.jsx`)

A React component that fetches and displays posts from a public API.

**Features:**
- Fetches data from `jsonplaceholder.typicode.com/posts` using `fetch()`
- Manages loading and error states with `useState`
- Data fetching triggered on mount via `useEffect`
- Responsive grid layout (1 → 2 → 3 columns)

**Concepts used:**
- `useEffect` with async/await
- Loading and error state handling
- Conditional rendering

---

### 2. Form Demo (`formdemo.jsx`)

A controlled form built with `react-hook-form` demonstrating validation.

**Files:**
- `App.jsx` — Renders the `UserForm` component
- `formdemo.jsx` — Form with username and email fields

**Features:**
- `required`, `minLength`, and custom `validate` rules
- Inline error messages displayed per field
- Form submission logs values to console

**Concepts used:**
- `useForm`, `register`, `handleSubmit`, `formState.errors`
- Field-level validation with `react-hook-form`

---

### 3. User Counter — State Lifting (`user-counter-lift-state/`)

Demonstrates lifting state up from child to parent in React.

**Files:**
- `App.jsx` — Holds the `count` state, passes `setCount` down as a prop
- `Users.jsx` — Fetches users from JSONPlaceholder API; each card has an "Add User" button that calls `increment`
- `UserCount.jsx` — Displays the running total of added users

**Features:**
- Live user data fetched with `axios`
- Counter shared across components by lifting state to `App`
- Each user card independently triggers a global count increment

**Concepts used:**
- State lifting pattern
- Props as callbacks
- `axios` for HTTP requests
- `useEffect` for data fetching on mount

---

### 4. User Counter — React Context (`user-counter-context/`)

Refactors the user counter using React Context API to avoid prop drilling.

**Files:**
- `App.jsx` — Renders `<Users />` inside a Context Provider
- `Users.jsx` — Consumes `CounterContext` directly; renders 4 demo cards each showing and incrementing a shared count

**Features:**
- Shared `count` and `increment` function accessed anywhere via `useContext`
- No props passed between parent and child

**Concepts used:**
- `createContext`, `useContext`
- Context Provider pattern
- Avoiding prop drilling

---

### 5. Employee Management App — Full Stack (`employee-app/`)

A full-stack CRUD application for managing employees, with a React frontend and Express + MongoDB backend.

#### Frontend

**`RootLayout.jsx`**
Wraps all pages with a persistent `Header` and a content area. Uses React Router's `<Outlet />`.

**`Header.jsx`**
Navigation bar with active-link highlighting using `<NavLink>`. Links: Home, Create Employee, Employees List.

**`Home.jsx`**
Home page that integrates both a React Context counter and a Zustand store counter (demonstrates multiple state management approaches side by side).

**`CreateEmp.jsx`**
Form to add a new employee. On submit, sends a POST request to the backend. Navigates to `/list` on success; shows error on failure.

**`ListOfEmps.jsx`**
Fetches and displays all employees in a responsive grid. Each card has:
- **View** — navigates to full employee detail page
- **Edit** — navigates to edit form, passing employee data via router state
- **Delete** — sends DELETE request and refreshes the list

**`Employee.jsx`**
Displays full details of a single employee passed via React Router location state.

**`EditEmployee.jsx`**
Pre-populates a form with existing employee data (from router state) and sends a PUT request to update the record.

#### Backend

**`empApp.js`** — Express Router with 4 REST endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/employees` | Create a new employee |
| GET | `/employees` | Get all employees |
| PUT | `/employees/:id` | Update an employee by ID |
| DELETE | `/employees/:id` | Delete an employee by ID |

**`EmpModel.js`** — Mongoose schema for an employee:

| Field | Type | Required |
|-------|------|----------|
| name | String | ✅ |
| email | String (unique) | ✅ |
| mobile | Number | ❌ |
| designation | String | ✅ |
| companyName | String | ✅ |

---

## 🛠️ Technologies Used

| Technology | Usage |
|------------|-------|
| React | UI components and state management |
| React Router | Client-side routing and navigation |
| React Hook Form | Form handling and validation |
| React Context API | Global state without prop drilling |
| Zustand | Lightweight global state store (Home.jsx) |
| Axios | HTTP client for API requests |
| Express.js | REST API backend |
| MongoDB + Mongoose | Database and data modeling |
| Tailwind CSS | Utility-first styling |

---

## 🚀 Getting Started

### Frontend (React)

```bash
cd employee-app/frontend
npm install
npm run dev
```

### Backend (Express + MongoDB)

```bash
cd employee-app/backend
npm install

# Make sure MongoDB is running locally, then:
node server.js
```

> The backend runs on `http://localhost:4000`. Make sure it is running before using the Employee App frontend.

---

## 🔌 API Endpoints

Base URL: `http://localhost:4000/emp-api`

```
POST   /employees          → Create employee
GET    /employees          → Get all employees
PUT    /employees/:id      → Update employee
DELETE /employees/:id      → Delete employee
```

---

## 📌 Key Concepts Practiced

- Fetching data from REST APIs using `fetch` and `axios`
- Loading and error state management
- Form validation with `react-hook-form`
- State lifting vs. React Context API for shared state
- React Router: nested routes, `<Outlet />`, `useNavigate`, `useLocation`
- Full-stack CRUD with Express REST API and MongoDB
- Mongoose schema design with validation rules
- Zustand for lightweight global state management
