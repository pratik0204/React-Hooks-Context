import React, { Component } from 'react';
import {ThemeContext} from '../Context/ThemeContext';
import { AuthContext } from '../Context/AuthContext';

class Navbar extends Component {
    state = {  }
    render() { 

        return ( 
            
            <AuthContext.Consumer>
                {(authcontext)=>{

                    const {isAuthenticated,toggleAuth} = authcontext


                    return(
                        <ThemeContext.Consumer>
                            {(themecontext)=>{
                                const {isLightTheme,light,dark} =themecontext;
                                const theme = isLightTheme ? light : dark;
                                return(
                                    <nav style={{background:theme.ui,color:theme.syntax}}>
                                    <h1>Context App</h1>
                                    <div onClick={toggleAuth}>
                                        {isAuthenticated?'Logged In':'Logged Out'}
                                    </div>
                                    <ul>
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Contact</li>
                                    </ul>
                                    </nav>
                                )
                            }}
                        </ThemeContext.Consumer>
                    )
                }}
        </AuthContext.Consumer>
         );
    }
}
 
export default Navbar;