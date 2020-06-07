const mongoose = require('mongoose');
const Schema = mongoose.Schema
const AssetSchema = new Schema({
assetName: String,
VIN_SerialNo: String,
licensePlate: String,
Type:String,
year: Number,
make: String,
model: String,
Trim:String,
regiState:String,
//Add photo later
//Add Preventive Maintainance
status:String,
group:String,
//TODO Update to Driver Schema
driver:String,
ownership:String,
msrp:Number,
//TODO Linked Vehicles
//End of Details
//Start of Lifecycle
inServiceDate:Date,
inServiceOdoMeter:Number,
//Vehicle Life Estimates
estLife:Number,
estServiceInKm:Number,
estResaleValue:Number,
outOfServiceDate:Date,
outOfServiceKm:Number,
//Specifications
width:Number,
height:Number,
length:Number,
interiorVolume:Number,
passengerVolume:Number,
cargoVolume:Number,
groundClearance:Number,
bedLength:Number,
//Weight
curbWeight:Number,
grossVehicleWeightRating:Number,
towingCapacity:Number,
maxPayload:Number,
//Fuel economy
epaCity:Number,
epaHighway:Number,
epaCombined:Number,

//TODO Add Engine & transmission section
// Wheels & Tyres section
driveType:String,
brakeSystem:String,
frontTrackWidth:Number,
rearTrackWidth:Number,
wheelBase:Number,
frontWheelDiameter:Number,
rearWheelDiameter:Number,
rearAxle:Number,
frontTireType:Number,
frontTirePSI:Number,
rearTireType:Number,
rearTypePSI:Number,
//Fuel
fuelType:String,
fuelTank1Capacity:Number,
fuelTank2Capacity:Number,
oilCapacity:Number,
//Settings
primaryMeter:String,
secondaryMeter:Boolean,
fuelUnit:String,
unitSystem:String,

})


var statusSchema=new Schema(
    {
        type:String,
        enum:['Active','In Garage','Out Of Service','Sold']
    }
)

var ownershipSchema=new Schema(
    {
        type:String,
        enum:['Owned','Leased','Rented','Customer']
    }
)
module.exports = mongoose.model('asset', AssetSchema)