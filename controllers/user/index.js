import userModel from '../../models/user.js'
import bcrypt from 'bcryptjs'
const userRegister = (req, res) => {

    userModel.findOne({ userName: req.body.user }, async (err, doc) => {
        if (err) {
            throw err
        }
        if (doc) {
            res.json(
                {
                    msg: 'User Already Exists',
                    actionDone: false
                }
            )
        } else {
            const hashPass = await bcrypt.hash(req.body.password, 10)
            const newUser = new userModel({ userName: req.body.user, password: hashPass })
            await newUser.save((err, done) => {
                if (err) {
                    throw err
                } else {
                    res.json({
                        ...done,
                        msg: 'successfully registered',
                        actionDone: true,
                    })
                }

            })
        }
    })

}

const userLogin = (req, res, next) => {
    userModel.findOne({ userName: req.body.userName }, async (err, doc) => {
        if (err) {
            throw err
        }
        if (!doc) {
            res.json(
                {
                    msg: 'User Does Not Exist',
                    actionDone: false
                }
            )
        } else {
            bcrypt.compare(req.body.password, doc.password, (err, result) => {
                if (err) {
                    throw err
                }
                if (result) {
                    req.session.user = doc
                    res.json(
                        {
                            data: {
                                _id: doc._id,
                                userName: doc.userName,
                            },
                            msg: 'Successfully Logged In',
                            actionDone: true,
                        }
                    )
                } else {
                    res.json(
                        {
                            msg: 'Incorrect Password',
                            actionDone: false,
                        }
                    )
                }
            })
        }
    })
    // res.json({
    //     msg: 'successfully registered',
    //     actionDone: true,
    // })
};

export { userRegister, userLogin }