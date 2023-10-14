import React from "react"
import { Alert, AppBar, Autocomplete, Box, Button, CardMedia, Card ,IconButton, Menu, MenuItem, Snackbar, TextField, Toolbar, Typography } from '@mui/material'
import axiosInstance from "../axios";
import Container from "@material-ui/core/Container";
import {Grid} from "@material-ui/core";
import history from '../history';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import * as Stomp from "stompjs";
import SockJS, { storage } from "sockjs-client/dist/sockjs"





class UserMenu extends React.Component {

    constructor() {
        super()
        this.state = {
            products: [],
        }
    };

    componentDidMount(){
        axiosInstance.get("/product/all")
        .then(
            res => {
                const val = res.data;
                
                this.setState(
                    {
                        products: val
                    }       
                );
                console.log(val);
                console.log(this.state);
            }
        )
        .catch(error => {
            console.log(error)
        })
        
    }

    onLogoffFun = event => {
        event.preventDefault();
        console.log("Success");
        localStorage.setItem("token","-");
        history.push("/log-in");
        window.location.reload();
                    
    }

    onViewProfileFun = event => {
        event.preventDefault();
        console.log("Success");
        history.push("/userProfile");
        window.location.reload();
                    
    }

    onProductPageFun (m) {
        localStorage.setItem('PRODUCT_NAME', m);
        console.log(m);
        console.log("Success");
        history.push("/productPage");
        window.location.reload();
                    
    }
    

    

    render() {
        return(
                <div>
                        <form onSubmit={this.onViewProfileFun}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                My profile
                            </Button>
                        </form>

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

                        <Box>
                            {
                            this.state.products.map(m => (
                                <Card key={m.id} sx={{border:2, borderColor: 'white'}} >
                                    <Box sx={{borderTop:2, borderColor: 'black'}} >{m.id+"."+m.name+" Description: "+ m.description}
                                    <Button onClick={()=>this.onProductPageFun(m.name)}>Review Product</Button>
                                    </Box>
                                </Card>

                            ))}
                        </Box>
                    
                
                </div>
        );
               
    }
}

export default UserMenu;