import React, {useContext } from 'react';
import {ThemeContext} from '../Context/ThemeContext';

const Toggle = () => {
    const { toggleTheme }=useContext(ThemeContext);
    return ( 
        <button onClick={toggleTheme} >Theme Toggle</button>
     );
}
 
export default Toggle;