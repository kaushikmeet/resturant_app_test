const express=require('express');
const router=express.Router();
const c=require('../controllers/searchController');
router.get('/search/dishes',c.searchDishes);module.exports=router;