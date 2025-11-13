# 🐾 Pet Care Management System

**React · Node.js · MongoDB · Tailwind CSS**

A full-stack platform that keeps every aspect of pet care in sync across pet owners, professionals, and administrators. Book appointments, curate pet records, manage adoptions, run a store, host events, and notify everyone from one place.

---

## 🌟 Highlights

### 🎯 Three Connected Experiences

#### 🏠 Pet Owner Portal

- **Profiles**: Register, log in, and maintain secure accounts
- **Pet Records**: Add pets, update profiles, and track medical history
- **Appointments**: Book vets, groomers, and trainers with availability validation
- **Adoption**: Browse adoptable pets, submit applications, and monitor status
- **Lost & Found**: Report pets, search cases, and connect with owners
- **Marketplace**: Browse products, place orders, and follow order status
- **Events**: View upcoming events, register, and stay informed


## ⚙️ Tech Stack

| Layer | Technologies |
| --- | --- |
| **Frontend** (Pet Owner) | React 19 · Vite 6 · Tailwind CSS 4 · React Router 7 · Framer Motion 12 · Chart.js 4 · Axios 1 · React Toastify 11 · jsPDF 3 |
| **Frontend** (Professional) | React 19 · Vite 6 · Tailwind CSS 4 · React Router 7 · jwt-decode 4 · Chart.js 4 · jsPDF 3 |
| **Backend** | Node.js 18+ · Express 4 · MongoDB · Mongoose 8 · JWT 9 · bcrypt 5 · Multer 1 · Cloudinary 1 · Nodemailer 6 |

---

## 🗄️ Data Models

Core Mongoose schemas include: `User`, `Professional`, `Admin`, `Pet`, `Appointment`, `AdoptablePet`, `AdoptionForm`, `Event`, `Product`, `Order`, `LostPet`, `FoundPet`, `HomeVisit`, `Notification`.

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js v16 or higher
- MongoDB (local or Atlas)
- Cloudinary account for media storage
- Email provider credentials (SMTP, SendGrid, etc.)

### 🔐 Environment Variables

Create a `.env` file in `backend/`:

```ini
MONGODB_URI=insert_here

JWT_SECRET=your_super_secret_jwt_key_here

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

PORT=5000
```



### 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/pet-care-management-system.git
cd pet-care-management-system

# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install

# Install pet owner portal dependencies
cd ../frontend
npm install
npm install react-hot

# Install professional portal dependencies
cd ../docterInterface
npm install
```

### ▶️ Run Locally

```bash
# Terminal 1 - backend
cd backend
npm run dev

# Terminal 2 - pet owner portal
cd ../frontend
npm run dev

# Terminal 3 - professional portal
cd ../docterInterface
npm run dev
```

### 🌐 URLs

- Pet Owner Portal: `http://localhost:5173`
- Backend API: `http://localhost:5000`

---

## 🗂️ Project Structure

```text
pet-care-management-system/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
├── frontend/
│   └── src/
│       ├── Component/
│       ├── Pages/
│       ├── context/
│       └── assets/
├── docterInterface/
│   └── src/
│       ├── Component/
│       ├── pages/
│       └── assets/
└── package.json
```

---

## 🌐 Deployment Notes

### Backend

1. Provision MongoDB (Atlas or local replica)
2. Configure production environment variables
3. Deploy to a host (Render, Railway, DigitalOcean, AWS, etc.)
4. Set up Cloudinary and email services
5. Re-enable Stripe flows if payment processing is required

### Frontends

1. Run `npm run build` in each frontend workspace
2. Deploy builds (Vercel, Netlify, static hosting, etc.)
3. Point environment configs to production API URLs
4. Set up custom domains if needed



