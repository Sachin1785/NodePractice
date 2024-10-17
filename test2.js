const a1 = "George";
const a2 = "Charles";
const a3 = "Maxine";

var superSecret = "This is supposed to be private info";


//modules when imported run their entire code isliye need to use functions to run only the required code
//and have commented the rest of the code

const bruh = (a1) => {
    // console.log(`Hello  ${a1} `);
    return `Hello  ${a1}`;
    //when it didn't have a retrun statement ist was printing undefined as console expected something to return
}


// bruh(a1);
// bruh(a2);
// bruh(a3);

// module.exports = bruh;
module.exports = { bruh, a1, a2, a3 };

// console.log(module.exports);

//option 2

module.exports.func = bruh;
module.exports.arr = [a1, a2, a3];
