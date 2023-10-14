import React from "react"
import { Avatar, Button, List, ListItemIcon,Box, Card, ListItem, ListItemText, Typography, TextField } from '@material-ui/core';
import axiosInstance from "../axios";
import Container from "@material-ui/core/Container";
import {Grid} from "@material-ui/core";
import history from '../history';


class UserProfile extends React.Component {
    constructor() {
        super()
        this.state = {
            comments: [],
        }

    };
    handleInput = event => {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        });
        console.log(value);
    };

    componentDidMount(){
        var userName =localStorage.getItem("USER_NAME");
        axiosInstance.post("/user/comments",userName)
        .then(
            res => {
                const val = res.data;
                
                this.setState(
                    {
                        comments: val
                    }       
                );
                console.log(val);
                console.log(this.state);
            }
        )
        .catch(error => {
            console.log(error)
        })
    };

    onProductPageFun (m) {
        localStorage.setItem("productId", m);
        console.log(m);
        console.log("Success");
        history.push("/productPage");
        window.location.reload();
                    
    }

    

    onDeleteCommentFun (id) {
        axiosInstance.post("/comment/delete",id)
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

    render() {
        const { match, location, history } = this.props;
        return (
            <Container maxWidth="sm">
                <div>
                        
                        
                    <Grid>
                        <header>My profile:</header>
                        <p>Name: {localStorage.getItem("USER_NAME")}</p>    

                        <label>My Comments:</label>

                        <Box>
                            {
                            this.state.comments.map(m => (
                                <Card key={m.id} sx={{border:2, borderColor: 'white'}} >
                                    <Box sx={{borderTop:2, borderColor: 'black'}} >{m.id+".Author:  "+m.author+"   Comment:  '" +m.description+"'   Review score:  " + m.review}</Box>
                                    <Button onClick={()=>this.onDeleteCommentFun(m.id)}>Delete Comment</Button>
                                </Card>
                            ))}
                        </Box>

                    </Grid>
                </div>
            </Container>
        );

    }
}

export default UserProfile;