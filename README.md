# Restaurant Search Backend (Node.js + MySQL)

A simple backend application for searching restaurants based on dish name with a mandatory price range filter.

## 🚀 Features

- Search by dish name
- Apply mandatory min/max price filter
- Returns top 10 restaurants by order count
- MySQL database with seed data
- Clean folder structure (MVC)
- Single API endpoint

---
## api url is
http://localhost:3000/search/dishes?name=biryani&minPrice=150&maxPrice=300

## 📁 Folder Structure
restaurant-search-backend/
│── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── searchController.js
│   ├── routes/
│   │   └── searchRoutes.js
│   ├── models/
│   │   ├── Restaurant.js
│   │   ├── MenuItem.js
│   │   └── Order.js
│   └── app.js
│
│── seed/
│   ├── schema.sql
│   └── seed.sql
│
│── package.json
│── README.md


---
## sample table data list
## seed.sql (file where i write sql query).

INSERT INTO restaurants (name, city) VALUES
('Hyderabadi Spice House', 'Hyderabad'),
('Biryani Paradise', 'Hyderabad'),
('Spice Garden', 'Bangalore'),
('Royal Biryani Point', 'Chennai'),
('Lucknow Kitchen', 'Lucknow');

INSERT INTO menu_items (restaurant_id, dish_name, price) VALUES
(1, 'Chicken Biryani', 220),
(1, 'Mutton Biryani', 280),
(2, 'Chicken Biryani', 180),
(2, 'Veg Biryani', 150),
(3, 'Chicken Biryani', 250),
(4, 'Chicken Biryani', 300),
(5, 'Lucknowi Biryani', 270);

INSERT INTO orders (menu_item_id) VALUES
(1),(1),(1),(1),(1),(1),(1),(1),(1),(1),
(2),(2),(2),(2),(2),
(3),(3),(3),(3),
(4),(5),(5),(5),(5),(5),(5),(5),
(6),(6),(6),
(7),(7),(7),(7);


## 🗄 Database Setup

1. Create DB + tables
