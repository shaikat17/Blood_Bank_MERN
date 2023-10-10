const express = require("express")
const authMiddleware = require("../middleware/authMiddleware")
const { createInventory, getInventoryControler } = require("../controllers/inventoryController")

const router = express.Router()


// routes
// Add to inventory
router.post('/create-inventory', authMiddleware, createInventory)

// Get Inventory
router.post('/get-inventory', authMiddleware, getInventoryControler)


module.exports = router