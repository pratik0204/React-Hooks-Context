import React, { Component } from 'react';

class Booklist extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="book-list">
                <ul>
                    <li>The way of kings</li>
                    <li>Learning c++</li>
                    <li>Object Oriented</li>
                </ul>
            </div>
         );
    }
}
 
export default Booklist;