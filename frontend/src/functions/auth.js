import axios from "axios"
import data from '../consts'
const registerFun = (user, password) => {
    const url = data.server_url + 'collection/user/register'
    axios.post(
        url,
        {
            user,
            password
        }
    )
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}


const loginFun = async (userName, password, singIn, navigate) => {

    const url = data.server_url + 'collection/user/login'
    const res = await axios.post(
        url,
        {
            userName,
            password
        }
    )

    if (res.data.actionDone) {
        const loginStatus = await singIn({
            expiresIn: 3600,
            authState: {
                _id: res.data.data._id,
                userName: res.data.data.userName,
            }
        })
        if (loginStatus) {
            console.log("🚀 ~ file: auth.js:41 ~ loginFun ~ loginStatus:", loginStatus)
            navigate('/admin')
        }
    }
}



export { registerFun, loginFun }