import React from 'react';
const QuoteBox = ({  changeUser, color, quotes, autor }) => {
    return (
        <div className='user'>
           
           
            <ul>
                
                <li className='userli'><b>"</b> {quotes} <b>"</b></li>
                <li className='userli2' style={{color}} ><b>{autor}</b> </li>
            </ul>
            <button onClick={changeUser}><i class="fas fa-random"></i></button>
        </div>
    );
};
export default QuoteBox;