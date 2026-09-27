const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({name:{type:String,required:true},email:{type:String,required:true,unique:true,lowercase:true},password:{type:String,required:true},role:{type:String,enum:['User','Admin'],default:'User'}},{timestamps:true});
const colorSchema=new mongoose.Schema({name:String,hex:String,rgb:String,category:String,finish:String,coverage:Number,price:Number,rating:Number,description:String},{timestamps:true});
const productSchema=new mongoose.Schema({name:String,shade:String,finish:String,coverage:Number,price:Number,rating:Number,category:String,image:String},{timestamps:true});
const projectSchema=new mongoose.Schema({userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'},name:String,imageUrl:String,wallCoordinates:[{type:{type:String,enum:['polygon','brush']},points:[{x:Number,y:Number}]}],selectedColors:[String]},{timestamps:true});
const patternSchema=new mongoose.Schema({name:String,type:String,image:String},{timestamps:true});
module.exports={User:mongoose.model('User',userSchema),Color:mongoose.model('Color',colorSchema),Product:mongoose.model('Product',productSchema),Project:mongoose.model('Project',projectSchema),Pattern:mongoose.model('Pattern',patternSchema)};
