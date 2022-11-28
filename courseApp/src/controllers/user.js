import { Op } from 'sequelize'
import { InternalServerError, ValidationError } from '../utils/errors.js'
import sha256 from 'sha256'
import nodemailer from 'nodemailer'
import JWT from '../utils/jwt.js'

const GET = async (req, res, next) => {
    try {
        const users = await req.models.User.findAll()
        res.status(200).json({
            status:200,
            message: "All users",
            data: users
        })
    } catch (error) {
        return next(new InternalServerError(500,error.message))
    }
}

const LOGIN = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const user = await req.models.User.findAll({
            where: {
                [Op.and]:[{email:email},{password:sha256(password)}]
            }
        })
        const user1 = await req.models.User.findAll({
            where: {
                [Op.or]: [{email : email }, { password:sha256(password) }],     
            }
        })
        if(user.length == 0 || user1.length == 0) {
            res.status(404).json({
                status:404,
                message: "There is no such user"
            })
        }
        res.status(200).json({
            status:200,
            message:"OK",
            data: user,
            token: JWT.sign({userId: user.user_id})
        })
    } catch (error) {
        return next(new InternalServerError(500,error.message))
    }
}

const REGISTER = async (req, res, next) => {
   try {
    const { username, email, password, pre_password } = req.body
    const users = await req.models.User.findAll({
        where: {
            [Op.or]:[{username:username},{email:email}]
        }
    })
    if(users.length != 0) {
        return res.status(400).json({
            status:400,
            message:"User already exists"
        })
    }
    if(password != pre_password) {
       return res.status(400).json({
           status:400,
           message:"Passwords do not match"
       })
    }
    const user = await req.models.User.create({
        username,email,
        password: sha256(password),
        pre_password: sha256(pre_password)
    })
    const transporter = nodemailer.createTransport({
        service:'mail',
        host:"smpt.mail.ru",
        port:587,
        secure:false,
        auth:{
            user:'sultonqulov1999@mail.ru',
            pass:'VbGpYgiknRMK2AE1i9hZ'
        }
    })
    const mailOptions = {
        from: 'sultonqulov1999@mail.ru',
        to: email,
        subject: "Succassfly register",
        html: '<p>Bu ingliz tili kursi uchun</p>'
    }
    transporter.sendMail(mailOptions, function(err, info){
        if(err){
           console.log(err);
        }
        else {
           console.log(info);
        }
    })
    return res.status(201).json({
        status: 201,
        message: "Created succassfly",
        data: user,
        token:JWT.sign({userId: user.user_id})
    })
   } catch (error) {
        return next(new InternalServerError(500,error.message))
   }
}

export default {
    GET,
    REGISTER,
    LOGIN
}