import React from "react"
import { Avatar, Button, List, ListItemIcon,Box, Card, ListItem, ListItemText, Typography, TextField } from '@material-ui/core';
import axiosInstance from "../axios";
import Container from "@material-ui/core/Container";
import {Grid} from "@material-ui/core";
import history from '../history';

class Administration extends React.Component {

    constructor() {
        super()
        this.state = {
            
        }

    };
    handleInput = event => {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        });
        console.log(value);
    };

    

    onCreateProductFun = event => {
        event.preventDefault();
        let credentials = {
            name: this.state.name, 
            description: this.state.productdescription,
        }
        console.log(credentials);
			
			
        axiosInstance.post("/product/create",credentials)
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

    onLogoffFun = event => {
        event.preventDefault();
        console.log("Success");
        history.push("/log-in");
        window.location.reload();
                    
    }

    onProductsFun = event => {
        event.preventDefault();
        console.log("Success");
        history.push("/adminProducts");
        window.location.reload();
                    
    }

    onWordsFun = event => {
        event.preventDefault();
        console.log("Success");
        history.push("/adminWords");
        window.location.reload();             
    }

    onUsersFun = event => {
        event.preventDefault();
        console.log("Success");
        history.push("/adminUsers");
        window.location.reload();
                    
    }
    
    render() {
        const { match, location, history } = this.props;
        return (
            <Container maxWidth="sm">
                <div>
                        
                        
                    <Grid>
                    <form onSubmit={this.onLogoffFun}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Log off
                            </Button>
                        </form>

                    <form onSubmit={this.onProductsFun}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Products
                            </Button>
                        </form>

                    <form onSubmit={this.onUsersFun}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Users
                            </Button>
                        </form> 

                    <form onSubmit={this.onWordsFun}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Special Words
                            </Button>
                        </form>           
                        
                    </Grid>
                </div>
            </Container>
        );
    }



}

export default Administration;