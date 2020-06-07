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
    }
}