const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
      type:String,
      unique:true,  //email should be unique for every
      required:[true,"Please provide your email"]
    },
    password:{
        type:String,
        required: [true, "Please provide a password"],
        minLength:6
    }

},{
    toJSON:{
        transform:(doc,ret)=>{
            ret.id=ret._id;
            delete ret._id;
            delete ret.password;
            delete ret._v;
        }
    }
}
)


module.exports = mongoose.model('user',UserSchema)