const AssetModel=require('../models/AssetModel');

module.exports={

    create:(req,res)=>{

        let asset=new AssetModel({
            assetName: req.body.name,
            licensePlate: req.body.licensePlate
        })
        console.log(asset);
        asset.save()
        .then(result =>{
            res.json({success:true,result:result})
        })
        .catch(err=>{
            res.json({success:false,result:err})
        })
    },

    update:(req,res)=>{
        AssetModel.update({_id:req.body.id},req.body)
        .then(result=>{
            if(!result) res.json({success:false,result: "No such Asset exisits"})
            res.json(result)  
        })
        .catch(err=>{
            res.json({success:false,result:err})
        })
    },

    retrieve:(req,res)=>{
        AssetModel.find(req.boquery.id)
        .then(result=>{
            if(!result) res.json({success:false,result: "No such Asset exisits"})
            res.json(result)  
        })
        .catch(err=>{
            res.json({success:false,result:err})
        })
    },

    retrieve:(req,res)=>{
        AssetModel.find()
        .then(result=>{
            if(!result) res.json({success:false,result: "No  Assets found !"})
            res.json(result)  
        })
        .catch(err=>{
            res.json({success:false,result:err})
        })
    },

    delete :(req, res) => {
        try {
            if(!req.body.id) {
                response = {"error" : true,"message" : "Passing asset id is mandatory"};
                return res.json(response)
            }     
        AssetModel.findByIdAndRemove(req.query.id)
        .then(result => {
            if(!result) {
                return res.status(404).send({
                    message: "Asset not found with id " + req.query.id
                });
            }
            res.send({message: "Asset deleted successfully!"});
        }).catch(err => {
            if(err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Asset not found with id " + req.query.id
                });                
            }
            return res.status(500).send({
                message: "Asset not deleted with id " + req.query.id
            });
        });
    } catch (error) {
        res.status(500).json({err: error,message:'Internal Server Error !!'});     
    }
    }
}