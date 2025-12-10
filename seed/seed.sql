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
