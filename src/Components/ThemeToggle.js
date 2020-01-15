import React, { Component } from 'react';
import {ThemeContext} from '../Context/ThemeContext';

class Toggle extends Component {
    
    static contextType=ThemeContext;

    state = {  }
    render() { 
       const { toggleTheme }=this.context;
        return ( 
            <button onClick={toggleTheme} >Theme Toggle</button>
         );
    }
}
 
export default Toggle;