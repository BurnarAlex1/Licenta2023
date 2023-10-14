import React from "react"
import { Avatar, Button, List, ListItemIcon,Box, Card, ListItem, ListItemText, Typography, TextField } from '@material-ui/core';
import axiosInstance from "../axios";
import Container from "@material-ui/core/Container";
import {Grid} from "@material-ui/core";
import history from '../history';


class AdminWords extends React.Component {
    constructor() {
        super()
        this.state = {
            specialwords: [],
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
        axiosInstance.get("/specialword/all")
        .then(
            res => {
                const val = res.data;
                
                this.setState(
                    {
                        specialwords: val
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

    onSpecialWordFun = event => {
        event.preventDefault();
        
        let credentials = {
            body: this.state.specialWord,
            value: this.state.wordValue,
        }
        
    
        


        
        
			
			
        axiosInstance.post("/specialword/create",credentials)
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

    onDeleteSpecialWordFun = event => {
        event.preventDefault();

        let id = this.state.deletedId;
        
			
			
        axiosInstance.post("/specialword/delete",id)
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

                    <form onSubmit={this.onSpecialWordFun}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                                id="specialWord"
                                label="Special Word"
                                name="specialWord"
                                autoComplete="string"
                                onChange={this.handleInput}
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                                id="wordValue"
                                label="Word Value"
                                name="wordValue"
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
                                Add Special Word
                            </Button>
                        </form>

                        <form onSubmit={this.onDeleteSpecialWordFun}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                                id="deletedId"
                                label="Special Word ID"
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
                                Delete Word
                            </Button>
                        </form>

                        <label>Special Words List:</label>

                        <Box>
                            {
                            this.state.specialwords.map(m => (
                                <Card key={m.id} sx={{border:2, borderColor: 'white'}} >
                                    <Box sx={{borderTop:2, borderColor: 'black'}} >{m.id+".Text:"+m.body+" Value: " +m.value}
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

export default AdminWords;