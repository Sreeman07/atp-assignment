# Week 5 — Frontend Development Projects

A collection of frontend mini-projects covering CSS Flexbox, HTML Tables, React components, and Tailwind CSS layouts.


---

## 🗂️ Projects Overview

### 1. Flex Layout (`flex/`)

A CSS Flexbox-based card layout showcasing Indian monuments.

**Files:**
- `flex.html` — HTML structure with monument cards (Taj Mahal, Golden Temple)
- `flex.css` — Flexbox styling for the card grid

**Concepts used:**
- `display: flex`, `flex-direction`, `justify-content`, `align-items`
- Circular images with `border-radius`
- Box shadows and custom color themes

---

### 2. HTML Tables (`tables/`)

Two table demos exploring HTML table structure and CSS styling.

**Files:**
- `table.html` — Subject grade table using `colspan` and `rowspan`
- `table.css` — Basic table styling (borders, padding, alignment)
- `emptable.html` — User/employee data table with profile pictures
- `emptable.css` — Enhanced table styling with shadows and background colors

**Concepts used:**
- `colspan`, `rowspan`
- `border-collapse`, `box-shadow`
- Embedded images inside table cells

---

### 3. React App — User List (`react-app-1/`)

A React application that renders a list of users in a responsive grid.

**Files:**
- `App.jsx` — Root component; defines a hardcoded list of 10 users and renders them
- `navbar.jsx` — Navigation bar with logo and links (Home, Register, Login)
- `userlist.jsx` — Reusable card component displaying a user's name, email, and photo
- `footer.jsx` — Two-column footer with placeholder text

**Features:**
- Iterates over a user array using `.map()` and renders `<UserList>` cards
- Responsive 4-column grid using Tailwind CSS (`md:grid-cols-4`)
- User data sourced from [randomuser.me](https://randomuser.me)

**Run locally:**
```bash
npm install
npm run dev
```

---

### 4. React App — Product Listing (`reactApp-2/`)

A React application that displays a product catalog in a card grid.

**Files:**
- `App.jsx` — Root component; defines a hardcoded list of 6 products and renders them
- `product.jsx` — Product card component (to be implemented)

**Features:**
- Responsive 3-column grid (`sm:grid-cols-2 md:grid-cols-3`)
- Products include clothing and jewellery categories
- Images sourced from [fakestoreapi.com](https://fakestoreapi.com)

**Run locally:**
```bash
npm install
npm run dev
```

---

### 5. Web Pages Using Tailwind CSS (`Web_pages_using_Tailwindcss/`)

Three responsive landing page layouts built with Tailwind CSS.

**Files:**
- `index.html` — **Libertarians** themed page with a hero section and 3-column info cards
- `index2.html` — **Best City Guide** page with a navbar, hero, and 3-column content section
- `index3.html` — **Marketing layout** with a jumbotron hero and three feature cards
- `input.css` — Tailwind CSS entry point (`@import "tailwindcss"`)
- `output.css` — Compiled Tailwind CSS output (v4.2.1)

**Concepts used:**
- Responsive design with `md:` breakpoints
- Flexbox and Grid utilities
- Custom color schemes (red, teal, gray)
- Hero sections, navbars, card grids, and footers

**To compile Tailwind CSS (index2.html):**
```bash
npx tailwindcss -i ./input.css -o ./output.css --watch
```
> `index.html` and `index3.html` use the Tailwind CDN directly and do not require compilation.

---

## 🛠️ Technologies Used

| Technology     | Usage                                     |
|----------------|-------------------------------------------|
| HTML5          | Page structure and semantic markup        |
| CSS3           | Flexbox layouts, table styling            |
| React (JSX)    | Component-based UI for user/product apps  |
| Tailwind CSS   | Utility-first styling for web pages       |

---

## 🚀 Getting Started

### Static HTML Projects (flex, tables, Tailwind pages)

Open the `.html` files directly in your browser — no server required for `index.html` and `index3.html`. For `index2.html`, compile Tailwind first (see above).

### React Apps

```bash
# Navigate to the react project folder
cd react-app-1   # or reactApp-2

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## 📌 Key Concepts Practiced

- CSS Flexbox for card-based layouts
- HTML table structure with `colspan` and `rowspan`
- React props and component composition
- Array rendering with `.map()` in JSX
- Tailwind CSS utility classes and responsive breakpoints
- Separating concerns across components (Navbar, Footer, Cards)
