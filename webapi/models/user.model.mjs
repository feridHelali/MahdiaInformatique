import {Schema,model} from "mongoose"

import  bcrypt from "bcryptjs"


const UserSchema = new Schema({
    fullName:{
        type:String,
        trim: true,
        required: [true, 'fullname is required'],
    },
    email:{
        type: String,
        trim: true,
        required: [true, 'email is required'],
        unique: 'Two users cannot share the same email ({VALUE})',
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },

    password:{
        type: String,
        required : true
    },
    role:{
        type:String,
        required:true,
        default:"User",
        enum:["User","Admin"]
    },
    avatar_url:{
        type:String
    },
    followers:[
        {
            type: Schema.Types.ObjectId, ref: 'User' ,
            require: true
          }
    ],
    followees:{
            type: Schema.Types.ObjectId, ref: 'User' ,
            require: true   
    }
})


//hash user password before saving into database
// UserSchema.pre('save', function (next) {
//     if (!this.isModified('password')) {
//         return next();
//     }

//     const user = this;
//     this.password = bcrypt.hashSync(this.password, 10);
//     next();

// });

export default model('User',UserSchema);