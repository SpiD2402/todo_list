import {signIn} from "../utils/apis.js";
import {useNavigate} from "react-router-dom";
import  {useState} from "react";

export  const useLogin = () => {
    const navigate =useNavigate()


    const [form,setForm]= useState({
        username:"",
        password:""

    })
    const [error, setError] = useState({
        username:"",
        password:""
    })
    const [open, setOpen] = useState(false);
    const [authError, setAuthError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleClose = () => setOpen(false);
    const handleTogglePasswordVisibility = () => setShowPassword(!showPassword);




    const onChangeText=({target})=>{
        const {name,value} = target;
        setForm({...form, [name]:value.trim()})
    }


    const onClickIngresar= async ()=>{
        let newError={}
        if (form.username.trim().length<1 ){
            newError.username = "Error campo Username Vacio";
        }
        if (form.password.trim().length<1){
            newError.password="Error campo Password Vacio"
        }
        setError({username: newError.username,password: newError.password})
        setTimeout(()=>{
            setError({})
        },[2000])


        if (!newError.username && !newError.password) {
            const data = await signIn(form);

            if (data !=false  )
            {
                await signIn(form);
                navigate('/todolist',{replace:true})
            }
            else {
                setAuthError("Usuario no registrado");
                setOpen(true);
            }

        }
    }

    return{
        onChangeText,
        open,
        form,
        error,
        onClickIngresar,
        handleClose,
        authError,
        showPassword,
        handleTogglePasswordVisibility
    }


}