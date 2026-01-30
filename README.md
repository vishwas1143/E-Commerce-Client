
🛒 Simple Shopping Cart (MERN Stack)

A full-stack Shopping Cart / E-Commerce application built using the MERN stack.
The project focuses on clean backend logic, cart management, order placement, and image uploads.

🚀 Features
🧾 Products

Product list with name, price, stock, and image

Products stored and fetched directly from MongoDB

Product image upload using Multer

🛍️ Cart

Add items to cart

Increase / decrease quantity

Remove items from cart

Prevent adding items beyond available stock

📦 Orders

Place order from cart

Automatic calculation of:

Subtotal

5% tax

Final total amount

Reduce product stock after successful order

Clear cart after order placement

🖼️ Image Handling

Upload product images via Postman

Images stored on server and served using Express static folder

🧰 Tech Stack
Frontend

React.js

Axios

React Toastify

Backend

Node.js

Express.js

MongoDB

Mongoose

Multer (for image upload)

📁 Backend Folder Structure
backend/
│── controllers/
│   ├── cart.controller.js
│   ├── order.controller.js
│   └── product.controller.js
│
│── models/
│   ├── cart.model.js
│   ├── order.model.js
│   └── product.model.js
│
│── routes/
│   ├── cart.routes.js
│   ├── order.routes.js
│   └── product.routes.js
│
│── middlewares/
│   └── upload.js
│
│── uploads/
│
│── server.js
│── package.json

⚙️ Setup & Installation
1️⃣ Clone the Repository
git clone https://github.com/your-username/shopping-cart-mern.git
cd shopping-cart-mern

2️⃣ Backend Setup
cd backend
npm install
npm run dev

3️⃣ Frontend Setup
cd frontend
npm install
npm start

🔗 API Endpoints
Products

GET /api/products – Get all products

POST /api/products – Create product with image upload

Cart

POST /api/cart – Add item to cart

PUT /api/cart/:id – Update cart quantity

DELETE /api/cart/:id – Remove item from cart

Orders

POST /api/orders – Place order

📤 Upload Product Image (Postman)

POST http://localhost:5000/api/products

Body → form-data

Key	Type	Value
name	Text	Aloe Gel
price	Text	250
stock	Text	50
image	File	Select image
🧠 Learning Focus

Clean backend logic

MongoDB relationships

Cart & order workflow

Image upload handling

Error handling & validation

📌 Future Improvements

User authentication

Order history

Admin dashboard

Payment gateway integration

Product categories

👨‍💻 Author

Vishwas Burra
MERN Stack Developer
