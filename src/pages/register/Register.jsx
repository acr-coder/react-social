import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import React, { useState } from "react";
import "./register.css";

const Register = () => {

    const [showPassword, setShowPassword ] = useState(false)

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">ACR - SOCIAL</h3>
          <span className="registerDesc">
            It is time to be social with ACR - SOCIAL
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <TextField
              id="outlined-password-input"
              label="Username"
              type="text"
              
              className="registerInput"
            />
            <TextField
              id="outlined-password-input"
              label="Email"
              type="email"
              
              className="registerInput"
            />
             <FormControl  variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              className="registerInput"
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
             <FormControl  variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              className="registerInput"
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
              label="Confirm Password"
            />
          </FormControl>
            

            
            <Button className="registerButton" variant="contained">
              Sign Up
            </Button>
              <div className="box" >
                <span>Already have an account?</span>
            <Button className="registerRegisterButton" variant="outlined">
              Sign In
            </Button>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
