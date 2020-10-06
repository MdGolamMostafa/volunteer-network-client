import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { Link } from "react-router-dom"; 
import firebaseConfig from './firebaseConfig';
import * as firebase from "firebase/app"; 
import "firebase/auth"; 

const Login = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
      const handleGoogleSignIn = () => {
            var  provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName,email}
            setLoggedInUser(signedInUser);
            history.replace(from);
            })
    }
    return (
        <div className = "App">
            <h1>Login With</h1>
        <button onClick={handleGoogleSignIn}>Google sign in</button>
        <br/>
        <Link to="/register">Don't have an account?</Link>
        </div>
    );
};

export default Login;