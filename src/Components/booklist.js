import React, {useContext } from 'react';
import {ThemeContext} from '../Context/ThemeContext';

const Booklist = () => {

    const {isLightTheme,light,dark}=useContext(ThemeContext);
    const theme = isLightTheme?light:dark;

    return ( 
                <div className="book-list"style={{color: theme.syntax,background:theme.bg}} >
                    <ul>
                        <li style={{background: theme.ui}}>The way of kings</li>
                        <li style={{background: theme.ui}}>Learning c++</li>
                        <li style={{background: theme.ui}}>Object Oriented</li>
                    </ul>
                </div>
                            
     );
}
 
export default Booklist
;