import { Timestamp } from "mongodb";
import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    firstname: {
      type: String,
      required: [true, "Firstname is required"],
    },
    lastname: {
      type: String,
      required: [true, "Lastname is required"],
    },
    email: {
      type: String,
      unique: [true, "Email already exits"],
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      match: [
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
      ],
    },
    confirmPassword: {
      type: String,
      required: [true, "Confirm Password is required"],
      validator: function (value) {
        return value === this.password;
      },
      message: "Password do not match!",
    },
   
  },
  {
    timestamps: true,
  }
);

const User = models.User || model("User", UserSchema);

export default User;
