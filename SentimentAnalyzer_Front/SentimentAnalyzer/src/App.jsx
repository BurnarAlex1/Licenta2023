import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Routes as Switch,
    Navigate as Redirect
} from "react-router-dom";
import Administration from './AdministrationPages/Administration';
import UserMenu from './RegularUserPages/UserMenu';
import Login from './RegularUserPages/Login';
import AdminProducts from './AdministrationPages/AdminProducts';
import AdminUsers from './AdministrationPages/AdminUsers';
import AdminWords from './AdministrationPages/AdminWords';
import ProductPage from './RegularUserPages/ProductPage';
import UserProfile from './RegularUserPages/UserProfile';
import OwnerPage from './OwnerPages/OwnerPage';



function App() {
    const defaultRoute = window.location.pathname === "/"  ? <Redirect to="/log-in"/> : undefined;
    if(localStorage.getItem("token")=="admin"){
        return (
            <Router>
                <Switch>
                    <Route exact path="/log-in" element={<Login/>}/>
                    <Route exact path="/administration" element={<Administration/>}/>
                    <Route exact path="/adminProducts" element={<AdminProducts/>}/>
                    <Route exact path="/adminWords" element={<AdminWords/>}/>
                    <Route exact path="/adminUsers" element={<AdminUsers/>}/>
    
                </Switch>
                {defaultRoute}
            </Router>
        );

    }
    else if(localStorage.getItem("token")=="client" ){
        return (
            <Router>
                <Switch>
                    <Route exact path="/log-in" element={<Login/>}/>
                    <Route exact path="/usermenu" element={<UserMenu/>}/>
                    <Route exact path="/productPage" element={<ProductPage/>}/>
                    <Route exact path="/userProfile" element={<UserProfile/>}/>
    
                </Switch>
                {defaultRoute}
            </Router>
        );

    }else if(localStorage.getItem("token")=="manager"){
        return (
            <Router>
                <Switch>
                    <Route exact path="/log-in" element={<Login/>}/>
                    <Route exact path="/ownerPage" element={<OwnerPage/>}/>
    
                </Switch>
                {defaultRoute}
            </Router>
        );
    }else{
        return(<Login/>)
    }

    return (
        <Router>
            <Switch>
                <Route exact path="/log-in" element={<Login/>}/>
                <Route exact path="/administration" element={<Administration/>}/>
                <Route exact path="/usermenu" element={<UserMenu/>}/>
                <Route exact path="/adminProducts" element={<AdminProducts/>}/>
                <Route exact path="/adminWords" element={<AdminWords/>}/>
                <Route exact path="/adminUsers" element={<AdminUsers/>}/>
                <Route exact path="/productPage" element={<ProductPage/>}/>
                <Route exact path="/userProfile" element={<UserProfile/>}/>
                <Route exact path="/ownerPage" element={<OwnerPage/>}/>

            </Switch>
            {defaultRoute}
        </Router>
    );
}

export default App;

