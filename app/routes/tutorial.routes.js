const { tutorials } = require("../models/index.js");

module.exports=app=>{
    const tutorials=require("../controllers/tutorial.controller.js");
    var router=require("express").Router();

    //create a new tutorial
    router.post("/",tutorials.create);

    //retrieve all tutorials
    router.get("/",tutorials.findAll)

    app.use('/api/tutorials',router);

//to get a tutorial with particular id

router.get('/:id',tutorials.findOne);

router.put('/:id',tutorials.update);

router.delete('/:id',tutorials.delete);

// Delete all Tutorials
router.delete("/", tutorials.deleteAll);
  
router.get("/published",tutorials.findAllPublished)

}