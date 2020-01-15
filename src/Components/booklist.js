import React, { Component } from 'react';
import {ThemeContext} from '../Context/ThemeContext';
import { AuthContext } from '../Context/AuthContext';
class Booklist extends Component {
    state = {  }
    render() { 
        
        return ( 
            <AuthContext.Consumer>
                {(authcontext)=>{

                    const {isAuthenticated,toggleAuth} = authcontext


                    return(
                        <ThemeContext.Consumer>
                            {(themecontext) => {

                                const {isLightTheme,light,dark}=themecontext;
                                const theme = isLightTheme?light:dark;

                                return(
                                    <div className="book-list"style={{color: theme.syntax,background:theme.bg}} >
                                        <ul>
                                            <li style={{background: theme.ui}}>The way of kings</li>
                                            <li style={{background: theme.ui}}>Learning c++</li>
                                            <li style={{background: theme.ui}}>Object Oriented</li>
                                        </ul>
                                    </div>
                                )
                            }}
                        </ThemeContext.Consumer>
                    )
                }}
            </AuthContext.Consumer>
         );
    }
}
 
export default Booklist;