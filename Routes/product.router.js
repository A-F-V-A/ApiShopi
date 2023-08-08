const express            = require("express")
const { ProductService } = require('../Services')
const { validate }       = require('../Middlewares')
const router  = express.Router()
const service = new ProductService()




router.get("/",  (req, res) => {

})

router.get("/filter", (req, res) => {

})
router.get("/:id", async (req, res) => {

})
router.post("/", async (req, res) => {

})
router.patch("/:id", async (req, res) => {

})
router.delete("/:id", async (req, res) => {
})


module.exports = router