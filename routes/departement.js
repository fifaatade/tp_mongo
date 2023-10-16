var router= require('express').Router();
var departementController= require ('../controller/DepartementController')

router.get('/', departementController.index )

router.post("/", departementController.store);

module.exports= router;
