import {Button, IconButton, InputAdornment, TextField} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { Modal, Box, Typography } from '@mui/material';

import {GppMaybeRounded, Visibility, VisibilityOff} from "@mui/icons-material";
import {useLogin} from "./hooks/useLogin.js";
export const  Login =()=>{



    const {   onChangeText,
        form,
        error,
        onClickIngresar,
        handleClose,
        authError,
        open,
    showPassword,
    handleTogglePasswordVisibility} = useLogin()

    localStorage.setItem("username",form.username);


    return(
        <div className={"fondo"}>
            <div className={"container d-flex justify-content-center align-items-center vh-100"}>
                <form className={"formulario d-flex gap-3 flex-column  rounded-4  align-items-center justify-content-center"}>
                    <AccountCircleIcon  sx={{fontSize: "5rem"}}/>
                    <div className={"d-flex align-items-center gap-1 w-100"}>
                        <PermIdentityOutlinedIcon/>
                        <div className={"d-flex w-100 flex-column"}>

                            <TextField
                                onChange={onChangeText}
                                name={"username"}
                                value={form.username}
                                fullWidth id="usuario" label="Usuario" variant="outlined" />
                            {
                                <span className={"text-danger"}>{error.username}</span>
                            }

                        </div>

                    </div>
                    <div className={"d-flex align-items-center gap-1 w-100"}>
                        <HttpsOutlinedIcon/>
                        <div className={"d-flex w-100 flex-column"}>
                            <TextField fullWidth id="password"
                                       onChange={onChangeText}
                                       name={"password"}
                                       type={showPassword ? "text" : "password"}
                                       value={form.password}
                                       label="Password" variant="outlined"
                                       InputProps={{
                                           endAdornment: (
                                               <InputAdornment position="end">
                                                   <IconButton
                                                       onClick={handleTogglePasswordVisibility}
                                                       edge="end"
                                                   >
                                                       {showPassword ? <VisibilityOff /> : <Visibility />}
                                                   </IconButton>
                                               </InputAdornment>
                                           ),
                                       }}

                            />
                            {
                                <span className={"text-danger"}>{error.password}</span>
                            }
                        </div>

                    </div>

                    <div className={"text-end w-100"}>
                        <a className={"bg-gradient  text-dark"} href={"/"} >¿Olvidaste tu contraseña?</a>
                    </div>
                    <Button onClick={onClickIngresar} color={"inherit"} fullWidth variant="outlined">Ingresar</Button>
                </form>

            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                }}
            >
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                        width: '100%',
                        maxWidth: '400px',
                        textAlign: 'center'
                    }}
                >
                    <Typography id="modal-title" variant="h6" component="h2">
                        <GppMaybeRounded sx={{fontSize: "5rem"}}/>
                    </Typography>
                    <Typography id="modal-description" sx={{ mt: 2 }}>
                        {authError}
                    </Typography>
                    <Button onClick={handleClose} sx={{ mt: 2 }} variant="contained">
                        Cerrar
                    </Button>
                </Box>
            </Modal>

        </div>
    )

}