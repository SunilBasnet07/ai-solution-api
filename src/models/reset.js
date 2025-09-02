import mongoose from 'mongoose'

const resetPasswordSchema= mongoose.Schema({

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
    expireAt: {
      type: Date,
       default: () => new Date(Date.now() + 300000),
    },
    isUsed: {
      type: Boolean,
      default: false,
    },

})
const Reset=mongoose.model("Reset",resetPasswordSchema);
export default Reset