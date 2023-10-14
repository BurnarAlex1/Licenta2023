import React from "react"
import { Avatar, Button, List, ListItemIcon,Box, Card, ListItem, ListItemText, Typography, TextField } from '@material-ui/core';
import axiosInstance from "../axios";
import Container from "@material-ui/core/Container";
import {Grid} from "@material-ui/core";
import history from '../history';


class ProductPage extends React.Component {
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
        var productName = localStorage.getItem("PRODUCT_NAME");
        console.log(productName);
        axiosInstance.post("/product/comments", productName)
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

    onCreateCommentFun = event => {
        event.preventDefault();
        var author = localStorage.getItem("USER_NAME");
        var productName = localStorage.getItem("PRODUCT_NAME");
        let credentials = {
            desc: this.state.commentdescription,
            author: author, 
            productName: productName,
        }
        console.log(credentials);
			
			
        axiosInstance.post("/comment/create",credentials)
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

    onDeleteCommentFun = event => {
        event.preventDefault();
        let id = this.state.deletedId;
            
        console.log(id);
			
			
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
                        <form onSubmit={this.onCreateCommentFun}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                                id="commentdescription"
                                label="Comment description"
                                name="commentdescription"
                                autoComplete="string"
                                onChange={this.handleInput}
                                autoFocus
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Add New Comment
                            </Button>
                        </form>

                        


                        <form onSubmit={this.onDeleteCommentFun}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                                id="deletedId"
                                label="Comment ID"
                                name="deletedId"
                                autoComplete="string"
                                onChange={this.handleInput}
                                autoFocus
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Delete Comment
                            </Button>
                        </form>

                        

                        <label>Comments List:</label>

                        <Box>
                            {
                            this.state.comments.map(m => (
                                <Card key={m.id} sx={{border:2, borderColor: 'white'}} >
                                    <Box sx={{borderTop:2, borderColor: 'black'}} >{m.id+".Author:  "+m.author+"   Comment:  '" +m.description+"'   Review score:  " + m.review}
                                    </Box>
                                </Card>

                            ))}
                        </Box>

                    </Grid>
                </div>
            </Container>
        );

    }
}

export default ProductPage;