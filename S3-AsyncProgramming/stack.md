Go on adding elements to a stack
Whenever you remove something you always remove the last one?

LIFO

Stackoverlow.com


const c = () => {
    console.log("C Logged");
}

const b = () => {
    console.log("B Logged");
    c()
}

const a = () => {
    console.log("A Logged");
    b()
}

a();



Stack


InternalFunction


Output
A Logged
B Logged
C Logged
