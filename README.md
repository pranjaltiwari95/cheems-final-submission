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

#### 🩺 Professional Portal

- **Authentication**: Role-based access for veterinarians, groomers, and trainers
- **Appointment Desk**: Review assignments and see pet information
- **Medical Tools**: Add treatment notes, track vaccinations, generate reports
- **Availability**: Manage available slots to accept new bookings
- **Analytics**: Monitor performance metrics and export reports

#### 👑 Administrative Portal

- **User Directory**: Manage pet owners and professionals
- **Appointment Oversight**: Audit schedules, availability, and refund requests
- **Events**: Create listings, track registrations, and send notifications
- **Store**: Handle product catalog, orders, inventory, and sales analytics
- **Adoption Oversight**: Review applications and coordinate home visits

---

## ⚙️ Tech Stack

| Layer | Technologies |
| --- | --- |
| **Frontend** (Pet Owner) | React 19 · Vite 6 · Tailwind CSS 4 · React Router 7 · Framer Motion 12 · Chart.js 4 · Axios 1 · React Toastify 11 · jsPDF 3 |
| **Frontend** (Professional) | React 19 · Vite 6 · Tailwind CSS 4 · React Router 7 · jwt-decode 4 · Chart.js 4 · jsPDF 3 |
| **Backend** | Node.js 18+ · Express 4 · MongoDB · Mongoose 8 · JWT 9 · bcrypt 5 · Multer 1 · Cloudinary 1 · Nodemailer 6 |
| **Payments** | (Optional) Stripe 18 – currently disabled for appointments |

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
- Stripe keys (only if re-enabling Stripe payment flows)

### 🔐 Environment Variables

Create a `.env` file in `backend/`:

```ini
MONGODB_URI=mongodb://localhost:27017/pet-care-system

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

> Add `STRIPE_SECRET_KEY` and `STRIPE_PUBLISHABLE_KEY` only if you plan to introduce Stripe-based payments.

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
- Professional Portal: `http://localhost:5174`
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

## 🔐 Access Control

| Role | Capabilities |
| --- | --- |
| **Pet Owner** | Manage pets, book appointments, shop, track adoptions, file lost/found reports, join events |
| **Professional** | Manage assigned appointments, update pet records, generate reports, manage availability |
| **Administrator** | Manage users, professionals, appointments, events, store, and analytics |
| **Store Admin** | Maintain product catalog, process orders, manage inventory, track sales |
| **Adoption Coordinator** | Review applications, schedule home visits, track adoption progress |

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



