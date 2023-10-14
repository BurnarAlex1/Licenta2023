import React from "react"
import { Avatar, Button, List, ListItemIcon,Box, Card, ListItem, ListItemText, Typography, TextField } from '@material-ui/core';
import axiosInstance from "../axios";
import Container from "@material-ui/core/Container";
import {Grid} from "@material-ui/core";
import history from '../history';


class AdminUsers extends React.Component {
    constructor() {
        super()
        this.state = {
            users: [],
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
        axiosInstance.get("/user/all")
        .then(
            res => {
                const val = res.data;
                
                this.setState(
                    {
                        users: val
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

    onUpgradeFun(userName) {
        console.log(userName);
        axiosInstance.post("/user/upgrade",userName)
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

    onDeleteUserFun= event => {
        event.preventDefault();
        let id = this.state.userId;
            
        console.log(id);
			
			
        axiosInstance.post("/user/delete",id)
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
                        
                    <form onSubmit={this.onDeleteUserFun}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                                id="userId"
                                label="User ID"
                                name="userId"
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
                                Delete User
                            </Button>
                        </form>


                        <label>Users List:</label>

                        <Box>
                            {
                            this.state.users.map(m => (
                                <Card key={m.id} sx={{border:2, borderColor: 'white'}} >
                                    <Box sx={{borderTop:2, borderColor: 'black'}} >{m.id+"."+m.name+" Role: " +m.role +" Password: **********"}
                                    </Box>
                                    <Button onClick={()=>this.onUpgradeFun(m.name)}>Upgrade User</Button>
                                </Card>

                            ))}
                        </Box>

                        


                        

                        

                        

                    </Grid>
                </div>
            </Container>
        );

    }
}

export default AdminUsers;