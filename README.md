# 🌿 Plant ~Hub 

**Live URL:** [https://plant-hub-app.web.app/](https://plant-hub-app.web.app/)

A complete plant management web application built with React, Express, MongoDB, and Firebase Authentication. Users can explore plants, add their own, update entries, and manage personal plant collections.

---

## ⭐ Main Features

* 🔐 **Full Authentication System** (Email/Password + Google/GitHub login)
* 🌱 **Add, Update & Delete Plants** with proper validation
* 📱 **Fully Responsive Design** (Mobile, Tablet, Desktop)
* 🔒 **Protected Routes** that persist even after page refresh
* ⚙️ **Environment Variables** used to hide all sensitive credentials
* 🎨 **Unique UI design** with a creative plant theme (indoor jungle / succulents / bonsai)

---

## 🧾 Project Requirements Covered

### ✅ GitHub Commits

* **Client side:** Minimum  meaningful commits**
* **Server side:** Minimum  meaningful commits**

### ✅ General Rules

* No Lorem Ipsum text
* All error/success messages use SweetAlert2 / toast, not default alerts
* Private routes do **not** redirect to login after reload

---

## 🧭 Navbar Items

* Logo / Website Name
* Home
* All Plants
* Add Plant (Private Route)
* My Plants (Private Route)
* Login / Register OR Logged-in User Info + Logout

**Conditional Rendering:**

* If logged out → Show Login & Register
* If logged in → Show `photoURL`, hover to show username, and Logout

---

## 🔑 Authentication

### Login Page

* Email, Password, and one social login (Google/GitHub)
* Redirect to intended route after login
* Sweet Alert for incorrect credentials

### Register Page

* Name, Email, PhotoURL, Password
* Password rules: **uppercase + lowercase + at least 6 characters**
* Success redirect to **Home**

---

## 🏠 Home Page Content

* Navbar
* Slider with **3 meaningful slides** 
* NewPlants section (min 6 cards from DB)
* 2 Additional sections such as:
* Footer

---

## ➕ Add Plant Page (Private)

Form fields include:

* Image
* Plant Name
* Category (select dropdown)
* Description
* Care Level (select dropdown)
* Watering Frequency
* Last Watered (date)
* Next Watering (date)
* Health Status
* User Email
* User Name

Success message: SweetAlert2 / toast.

---

## 📋 All Plants Page

* Table view of all plants
* Show name, category, watering frequency
* "View Details" button

---

## 🔍 View Details Page (Private)

* Full plant details in a creative layout

---

## 🌿 My Plants Page (Private)

* Display plants added by the logged-in user
* Update & Delete buttons
* Delete uses a confirmation modal

---

## ✏️ Update Page

* Form pre-filled with existing values
* SweetAlert confirmation after update

---

## 🦶 Footer

* Website name
* Copyright
* Contact info
* Social links

---

## ⚠️ 404 Page

A fully designed custom 404 page

---


## 🗂️ Tech Stack

### Frontend

* React + Vite
* React Router
* SweetAlert2 / Toast
* TailwindCSS / DaisyUI

### Backend

* Express.js
* MongoDB
* dotenv
* CORS

### Authentication

* Firebase Auth

---

## 🚀 Running the Project

### Install dependencies

```bash
npm install
```

### Start client

```bash
npm run dev
```

### Start server

```bash
node index.js
```





