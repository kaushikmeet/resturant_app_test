const db = require('../config/db');

exports.searchDishes = async (req, res) => {
  try {
    const { name, minPrice, maxPrice } = req.query;

    if (!name || !minPrice || !maxPrice) {
      return res.status(400).json({
        message: "name, minPrice, maxPrice are required"
      });
    }

    const min = Number(minPrice);
    const max = Number(maxPrice);
    if (isNaN(min) || isNaN(max)) {
      return res.status(400).json({ message: "minPrice and maxPrice must be numbers" });
    }

    const query = `
      SELECT 
        r.id AS restaurantId, 
        r.name AS restaurantName, 
        r.city,
        m.dish_name AS dishName,
        m.price AS dishPrice,
        COUNT(o.id) AS orderCount
      FROM restaurants r
      JOIN menu_items m ON r.id = m.restaurant_id
      LEFT JOIN orders o ON m.id = o.menu_item_id
      WHERE m.dish_name LIKE ?
      AND m.price BETWEEN ? AND ?
      GROUP BY r.id, r.name, r.city, m.id, m.dish_name, m.price
      ORDER BY orderCount DESC
      LIMIT 10;
    `;

    const [rows] = await db.query(query, [`%${name}%`, min, max]);

    return res.json({ restaurants: rows });
  } catch (error) {
    console.error(error);  // log the actual error
    return res.status(500).json({ error: error.message });
  }
};
