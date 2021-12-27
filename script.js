// const isItDividable = number => dividedby => (number%dividedby===0);      
// const logIsItDividable = (number,by) =>{ 
//     if (isItDividable(number)(by)){
//         var message = `Yes ${number} is dividable by ${by}`;
//     }
//     else{
//         var message = `No ${number} is not dividable by ${by}`;
//     }
//     console.log(message);
// };
// logIsItDividable(10,2);

const funcA = ()=>{setTimeout(() => {
    for(var i=0; i<1; i++){console.log('/');}
}, 100);};

const funcB = ()=>{setTimeout(() => {
    for(var i=0; i<50000; i++){console.log('?');}
}, 1000);};

funcA();
// funcB();
for(let i=0; i<100001; i++){console.log('waiting?');}
