# 🍕 ReactPizza Company

A full-stack pizza delivery application built with the MERN stack, providing users with an interactive platform to browse, customize, and order delicious pizzas online.

## 📋 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### 🛒 User Features
- **Interactive Pizza Menu**: Browse through 20+ pizza varieties with detailed descriptions
- **Pizza Customization**: Customize pizzas with various toppings, sizes, and crust options
- **Real-time Cart Management**: Add, remove, and modify items in your cart instantly
- **Secure Authentication**: User registration and login with JWT authentication
- **Order Tracking**: Track your orders with unique order IDs
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices

### 👨‍💼 Admin Features
- **Admin Dashboard**: Comprehensive order management system
- **Order Status Updates**: Real-time order status management
- **User Management**: View and manage registered users
- **Menu Management**: Add, edit, or remove pizza options

### 🚀 Technical Highlights
- **Dynamic API Integration**: Menu items loaded dynamically from backend API
- **Real-time Updates**: Live cart and order status updates
- **Secure Payment Processing**: Safe and secure order placement
- **Scalable Architecture**: Built with scalability and maintainability in mind

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library for building interactive user interfaces
- **CSS3/SCSS** - Styling and responsive design
- **Axios** - HTTP client for API requests
- **React Router** - Client-side routing

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database for data storage
- **Mongoose** - MongoDB object modeling

### Authentication & Security
- **JWT (JSON Web Tokens)** - Secure user authentication
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

## 📸 Screenshots

<!-- Add your project screenshots here -->
## 🏠 HomePage
https://github.com/swastik-nanda/React_PizzaCo/issues/1#issue-3287709935
*Screenshots will be added here - please upload your project images*

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Clone the Repository
```bash
git clone https://github.com/yourusername/reactpizza-company.git
cd reactpizza-company
```

### Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file and add your environment variables
touch .env
```

Add the following to your `.env` file:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/reactpizza
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

```bash
# Start the backend server
npm start
```

### Frontend Setup
```bash
# Navigate to frontend directory (open new terminal)
cd frontend

# Install dependencies
npm install

# Start the React development server
npm start
```

The application will be available at `http://localhost:5000`

## 💻 Usage

1. **User Registration/Login**: Create an account or login to existing account
2. **Browse Menu**: Explore the variety of pizzas available
3. **Customize Order**: Select pizza size, crust, and toppings
4. **Add to Cart**: Add items to your shopping cart
5. **Place Order**: Complete your order with unique order ID generation
6. **Track Order**: Monitor your order status in real-time
7. **Admin Access**: Admin users can manage orders and menu items

## 🔗 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Menu
- `GET /api/menu` - Get all pizza items
- `GET /api/menu/:id` - Get specific pizza item
- `POST /api/menu` - Add new pizza (Admin only)
- `PUT /api/menu/:id` - Update pizza (Admin only)
- `DELETE /api/menu/:id` - Delete pizza (Admin only)

### Orders
- `POST /api/orders` - Place new order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get specific order
- `PUT /api/orders/:id` - Update order status (Admin only)

### Cart
- `POST /api/cart` - Add item to cart
- `GET /api/cart` - Get cart items
- `PUT /api/cart/:id` - Update cart item
- `DELETE /api/cart/:id` - Remove item from cart

## 📁 Project Structure

```
reactpizza-company/
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── features/
│   │   ├── services/
│   │   ├── UI/
│   │   ├── utilities/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── store.js
│   ├── .env
│   ├── .eslintrc.cjs
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── node_modules/
│   ├── routes/
│   ├── .env
│   ├── index.js
│   └── package.json
└── README.md
```

## 📊 Project Stats

- **30+ Registered Users**: Growing user base with active engagement
- **20+ Pizza Varieties**: Extensive menu with diverse options
- **Real-time Operations**: Live cart and order management
- **Responsive Design**: Optimized for all device types

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@sassyswas](https://github.com/swastik-nanda)
- LinkedIn: [@swastik-nanda](https://www.linkedin.com/in/swastik-nanda-837b35251/))
- Email: swastik2004nanda@gmail.com

## 🙏 Acknowledgments

- Thanks to all contributors who helped build this project
- Inspiration from various pizza delivery applications
- MERN stack community for excellent documentation and support

---

⭐ **If you found this project helpful, please give it a star!** ⭐
