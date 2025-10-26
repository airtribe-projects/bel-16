const sqrt = require('math-sqrt');

const express = require('express');

let x;

for ( let i = 0; i < 1000; i++ ) {
    x = Math.round( Math.random() * 100 );
    console.log( sqrt( x ) );
}


