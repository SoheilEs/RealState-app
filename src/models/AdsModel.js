import {model,models,Schema} from "mongoose"


const adsSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    price: {
        type:Number,
        required:true
    },
    realState:{
        type:String,
        required:true
    }, // آدرس املاکی
    constractionDate: {
      type: Date,
      required:true
      
    }, // تاریخ ثبت آگهی
    category: {
        type:String,
        enum:["apartment","villa","store","office"],
        required:true
    },
    rules: {
        type: [String],
        default:[]
    }, //قوانین ملک
    amenities: {
        type:[String],
        default:[]
    }, // امکانات رفاهی
    userId:{
        type: Schema.Types.ObjectId,
        ref : "User"
    },
    published:{
        type:Boolean,
        default:false
    }
   
},{timestamps:true})


const AdsModel = models.AdsModel || model("AdsModel",adsSchema)


export default AdsModel