# 🏡 HouseHunt

## 🎥 Project Demo

Watch the complete project demonstration here:

🔗 **Demo Video:**  
https://drive.google.com/file/d/1A3IYFEkoFALvfJwPHfofrBhAfUqUkbkG/view?usp=sharing

---

HouseHunt is a full-stack MERN (MongoDB, Express.js, React.js, and Node.js) web application designed to simplify property rental and management. The platform connects property owners and tenants through a secure, user-friendly interface, enabling users to browse rental properties, schedule visits, manage listings, submit reviews, and communicate with property owners seamlessly.

---

## 📌 Features

### 👤 User Features

- Secure User Registration & Login (JWT Authentication)
- Browse and Search Rental Properties
- Advanced Property Details View
- Google Maps Location Integration
- Save Favorite Properties to Wishlist
- Submit Property Reviews & Ratings
- Schedule Property Visits
- Contact Property Owners via Email
- Contact Property Owners via WhatsApp
- View Visit Status
- Responsive User Interface

### 🏠 Property Owner Features

- Secure Owner Login
- Add New Property Listings
- Upload Property Images
- Edit Existing Property Details
- Delete Property Listings
- Manage Personal Property Dashboard
- View Scheduled Visit Requests
- Accept or Reject Visit Requests
- Monitor Property Listings

---

## 🛠 Tech Stack

### Frontend

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Axios
- React Router DOM
- React Hot Toast

### Backend

- Node.js
- Express.js

### Database

- MongoDB Atlas
- Mongoose

### Authentication

- JWT (JSON Web Token)
- bcrypt.js

### Other Libraries

- Multer (Image Upload)
- CORS
- dotenv
- Nodemon

---

## 📂 Project Structure

```text
## 📂 Project Structure

HouseHunt/
│
├── client/
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── PropertyCard.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── StatsCard.jsx
│   │   ├── context
│   │   │   ├── AuthContext.jsx
│   │   ├── pages/
│   │   │   ├── AddProperty.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── EditProperty.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Properties.jsx
│   │   │   ├── PropertyDetails.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Wishlist.jsx
│   │   │   ├── styles/
│   │   │   │   ├── AddProperty.css
│   │   │   │   ├── Dashboard.css
│   │   │   │   ├── Home.css
│   │   │   │   ├── Login.css
│   │   │   │   ├── Navbar.css
│   │   │   │   ├── Properties.css
│   │   │   │   ├── PropertyCard.css
│   │   │   │   ├── PropertyDetails.css
│   │   │   │   ├── Register.css
│   │   │   │   ├── Stats.css
│   │   │   │   └── Wishlist.css
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── propertyController.js
│   │   ├── reviewController.js
│   │   ├── visitController.js
│   │   └── wishlistController.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── uploadMiddleware.js
│   │
│   ├── models/
│   │   ├── Property.js
│   │   ├── Review.js
│   │   ├── User.js
│   │   ├── Visit.js
│   │   └── Wishlist.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── propertyRoutes.js
│   │   ├── reviewRoutes.js
│   │   ├── visitRoutes.js
│   │   └── wishlistRoutes.js
│   │
│   ├── uploads/
│   │
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── README.md
├── package.json
├── package-lock.json
└── .gitignore
```


---

## 🚀 Installation

### Clone the Repository

```bash
git clone https://github.com/lavanya4704/HouseHunt.git
```

### Navigate to the Project

```bash
cd HouseHunt
```

### Install Dependencies

#### Backend

```bash
cd server
npm install
```

#### Frontend

```bash
cd ../client
npm install
```

---

## ▶️ Running the Project

### Start Backend

```bash
cd server
npm run dev
```

### Start Frontend

```bash
cd client
npm run dev
```

The application will be available at:

- **Frontend:** http://localhost:5173
- **Backend:** http://localhost:5000

---

## 🔐 Environment Variables

Create a `.env` file inside the **server** folder and configure the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### Description

| Variable | Description |
|----------|-------------|
| PORT | Backend server port number |
| MONGO_URI | MongoDB Atlas connection string |
| JWT_SECRET | Secret key used to generate JWT tokens |

---

## 📸 Application Modules

- Home Page
- User Registration
- User Login
- Property Listing
- Search & Filter Properties
- Property Details
- Add Property
- Edit Property
- Owner Dashboard
- Wishlist
- Reviews & Ratings
- Visit Scheduling
- Visit Request Management
- Google Maps Integration
- Contact Owner (Email & WhatsApp)

---

## 📊 Key Functionalities

- JWT Authentication & Authorization
- Secure Password Encryption
- Property CRUD Operations
- Image Upload Functionality
- Wishlist Management
- Property Reviews & Ratings
- Visit Scheduling System
- Visit Request Approval Workflow
- Google Maps Integration
- Responsive User Interface
- RESTful API Architecture

---

## ⭐ Highlights

- Full Stack MERN Application
- Secure JWT Authentication
- MongoDB Atlas Integration
- Property Image Upload
- Owner Dashboard
- Wishlist Functionality
- Reviews & Ratings
- Visit Scheduling System
- Google Maps Integration
- Email & WhatsApp Contact Support
- Responsive User Interface
- RESTful API Design

---

## 🎯 Future Enhancements

- Online Rent Payment Gateway
- AI-Based Property Recommendation System
- Real-Time Chat Between Tenant & Owner
- Push Notifications
- Email Notifications
- Admin Dashboard
- Cloudinary Image Storage
- Advanced Property Search Filters
- Mobile Application
- Multi-language Support

---

## 👩‍💻 Developed By

**Lavanya Singamsetti**

B.Tech – Artificial Intelligence and Data Science

Vasireddy Venkatadri Institute of Technology (VVIT)

GitHub: https://github.com/lavanya4704

---

## 📜 License

This project is developed for educational and academic purposes under the guidance of **SmartBridge** as part of the MERN Stack Development Program.

⭐ **If you found this project useful, please consider giving it a Star on GitHub!**
