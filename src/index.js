import React from 'react';
import ReactDOM from 'react-dom';

function luckyNumber () {
    var randomNum = Math.floor(Math.random() * 1000) + 1;
    return randomNum;
}

function greeting (user) {
    return (
        <div className='container'>
            <h1>Hello there {user.name}</h1>
            <h2 className='text-muted'>Your lucky number is {user.luckyNumber}</h2>
        </div>
    );
}

const user = {
    name: 'Bob',
    luckyNumber: luckyNumber()
};

ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);