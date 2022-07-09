const userModel = require("../models/user");
const otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const { generateJwtToken } = require("../utils/genarateJwtToken");

const userRegister = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user && user.active) {
      return res.status(400).json({
        message: "Email already in use",
      });
    } else if (user && !user.active) {
      await userModel.deleteOne({ email });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const otp = otpGenerator.generate(6, {
      upperCase: false,
      specialChars: false,
    });
    const newUser = new userModel({
      name,
      email,
      password: hashPassword,
      otp,
    });
    await newUser.save();
    next();
  } catch (err) {
    console.log(err);
  }
};
const sentUserOTP = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL, // generated ethereal user
          pass: process.env.PASSWORD, // generated ethereal password
        },
      });

      // send mail with defined transport object
      await transporter.sendMail({
        from: `"BlogVerse" <${process.env.EMAIL}>`, // sender address
        to: `${email}`, // list of receivers
        subject: "OTP", // Subject line
        html: `<div>
        <p> Your otp code is given. Do not share it with anyone.</p>
                <h1>${user.otp}</h1>
                </div>`, // html body
      });
      res.status(200).json({
        message: "OTP sent",
      });
    } else {
      res.status(200).json({
        message: "Invail email",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      if (user.otp === otp) {
        await userModel.updateOne({ email }, { $set: { active: true } });
        res.status(200).json({
          message: "OTP verified",
        });
      } else {
        res.status(200).json({
          message: "OTP not verified",
        });
      }
    } else {
      res.status(200).json({
        message: "Invail email",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (user) {
        const isMatch = await bcrypt.compare(password, user.password);
        const token = generateJwtToken(user);
        if (isMatch) {
            res.status(200).json({
            message: "Login successful",
            access_token: token,
            });
        } else {
            res.status(200).json({
            message: "Password incorrect",
            });
        }
        } else {
        res.status(200).json({
            message: "Invail email",
        });
        }
    } catch (err) {
        console.log(err);
    }
}
module.exports = { userRegister, sentUserOTP, verifyOTP ,userLogin };
