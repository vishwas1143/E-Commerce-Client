
🛒 Shopping Cart (MERN Stack)
 
 This repository contains the frontend of an E-Commerce Shopping Cart application built using React.
Users can browse products, add them to cart, manage quantities, and place orders seamlessly.

🚀 Tech Stack

React (Vite)

React Router DOM

React Toastify

React Icons

Fetch API

CSS

⚙️ Installation & Setup
npm install
npm run dev


Frontend runs on:

http://localhost:5173

🔗 Backend API Integration

Backend Base URL:

http://localhost:5000

APIs Used

GET /api/products

POST /api/cart

PUT /api/cart/increase/:productId

PUT /api/cart/decrease/:productId

DELETE /api/cart

POST /api/orders

✨ Functionalities
Home / Product List

Displays all available products fetched from the backend.

Shows product name, price, stock, and image.

Acts as the main shopping page for users.

Each product has an Add to Cart button.

Product Item

Individual product card component.

Shows product details clearly.

Prevents adding items beyond available stock.

Sends product ID to backend when added to cart.

Cart Page

Displays all items added to cart.

Allows users to:

Increase quantity

Decrease quantity

View item-wise pricing

Automatically calculates:

Subtotal

5% tax

Final total amount

Place Order

Sends cart data to backend for order creation.

Displays success or failure toast messages.

Clears cart on successful order.

Redirects user to Order Success page.

Navbar

Provides navigation across the application.

Displays Cart and Home options.

Ensures smooth user flow between pages.

Toast Notifications

Shows success/error messages for:

Adding to cart

Quantity updates

Order placement

🔮 Future Scope

User Authentication (Login / Signup)

Product categories & filtering

Order history page

Payment gateway integration (Razorpay / Stripe)

Admin dashboard for product management

Image upload using Cloudinary

👨‍💻 Author

Vishwas Burra
MERN Stack Developer
