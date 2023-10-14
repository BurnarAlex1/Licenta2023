import React from "react"
import { Avatar, Button, List, ListItemIcon,Box, Card, ListItem, ListItemText, Typography, TextField } from '@material-ui/core';
import axiosInstance from "../axios";
import Container from "@material-ui/core/Container";
import {Grid} from "@material-ui/core";
import history from '../history';


class OwnerPage extends React.Component {
    constructor() {
        super()
        this.state = {
            products: [],
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

    

    render() {
        const { match, location, history } = this.props;
        return (
            <Container maxWidth="sm">
                <div>
                        
                        
                    <Grid>
                        <form onSubmit={this.onCreateProductFun}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                                id="productdescription"
                                label="Product description"
                                name="productdescription"
                                autoComplete="string"
                                onChange={this.handleInput}
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                                id="name"
                                label="Product Name"
                                name="name"
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
                                Add New Product
                            </Button>
                        </form>

                        <label>Products List:</label>

                        <Box>
                            {
                            this.state.products.map(m => (
                                <Card key={m.id} sx={{border:2, borderColor: 'white'}} >
                                    <Box sx={{borderTop:2, borderColor: 'black'}} >{m.id+"."+m.name+" Description: " +m.description}
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

export default OwnerPage;