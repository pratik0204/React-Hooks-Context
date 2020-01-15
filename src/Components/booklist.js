import React, {useContext } from 'react';
import {ThemeContext} from '../Context/ThemeContext';
import { BookContext } from '../Context/BookContext';

const Booklist = () => {

    const {isLightTheme,light,dark}=useContext(ThemeContext);
    const theme = isLightTheme?light:dark;
    const {books} = useContext(BookContext)

    return ( 
                <div className="book-list"style={{color: theme.syntax,background:theme.bg}} >
                    <ul>
                        {books.map(book=>{
                            return (
                                <li key={book.id} style={{background:theme.ui}}>{book.title}</li>
                            )
                        })}
                    </ul>
                </div>
                            
     );
}
 
export default Booklist
;