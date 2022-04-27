import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import React, { useState } from "react";
import "./login.css";

const Login = () => {

    const [showPassword, setShowPassword ] = useState(false)

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">ACR - SOCIAL</h3>
          <span className="loginDesc">
            It is time to be social with ACR - SOCIAL
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <TextField
              id="outlined-password-input"
              label="Email"
              type="email"
              autoComplete="current-password"
              className="loginInput"
            />
             <FormControl  variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              className="loginInput"
              endAdornment={
                  <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
            

            <span className="passwordForgot">Forgot Password</span>
            <Button className="loginButton" variant="contained">
              Login
            </Button>

            <span>Don't you have any account?</span>
            <Button className="loginRegisterButton" variant="outlined">
              Register
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
