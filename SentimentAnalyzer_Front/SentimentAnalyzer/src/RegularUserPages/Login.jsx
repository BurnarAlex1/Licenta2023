import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Checkbox from '@mui/material/Checkbox';
import Container from "@material-ui/core/Container";
import axiosInstance from '../axios';
import {Grid} from "@material-ui/core";
import history from '../history';



class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            password: "",
        };
    }

     
    handleInput = event => {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        });
        console.log(value);
    };

    onSubmitFun = event => {
        event.preventDefault();
        let credentials = {
            name: this.state.username,
            password: this.state.password,
        }
        console.log(credentials);
			
			
        axiosInstance.post("/user/login",credentials)
            .then(
                res => {
                    const val = res.data;
                    if(val){
                      console.log("Success");
                      localStorage.setItem("USER_NAME", res.data.name);
                      if(val.role=='admin'){
                        localStorage.setItem("token", "admin");
                         history.push("/administration");
                         window.location.reload();
                      }
                      else if(val.role=="Product Manager"){
                        localStorage.setItem("token", "manager");
                        history.push("/ownerPage")
                        window.location.reload();
                      }
                      else{
                        localStorage.setItem("token", "client");
                        history.push("/usermenu");
                        window.location.reload();
                      }
                    }
                }
            )
            .catch(error => {
                console.log(error)
            })
    }

    onRegisterFun = event => {
        
        event.preventDefault();
        let credentials = {
            name: this.state.registername,
            password: this.state.registerpassword,
            role: 'client',
        }
        const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
        if(!validPassword.test(credentials.password)){
            console.log("Fail, wrong password");
        }
        

        if(validPassword.test(credentials.password)){

        
            
		    console.log(credentials);
            axiosInstance.post("/user/create",credentials)
                .then(
                   res => {
                       const val = res.data;
                        if(val){
                      console.log("Success");
                    }
                }
            )
            .catch(error => {
                console.log(error)
            })
        }
    }


    render() {
        const { match, location, history } = this.props;
        return (
            <Container maxWidth="sm">
                <div>
                    <Grid>
                        <form onSubmit={this.onSubmitFun}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="string"
                                onChange={this.handleInput}
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                onChange={this.handleInput}
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Sign In
                            </Button>
                        </form>

                        <form onSubmit={this.onRegisterFun}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                                id="registername"
                                label="Username"
                                name="registername"
                                autoComplete="string"
                                onChange={this.handleInput}
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                                name="registerpassword"
                                label="Password"
                                type="password"
                                id="registerpassword"
                                onChange={this.handleInput}
                                autoComplete="current-password"
                            />
                            
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Register
                            </Button>
                        </form>
                        
                    </Grid>
                </div>
            </Container>
        );
    }

}

export default Login;