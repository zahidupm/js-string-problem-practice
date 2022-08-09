const result = Math.pow(3, 4);
// console.log(result);

const num1 = 75;
const num2 = 45;
// কোন যোগ বিয়োগ এ যদি -(minus) মান থাকে তাহলে সেই মান যাই হোক না কেন Math.abs দিলে তা সমান হয়।   
const gap = Math.abs(num1 - num2);

if(gap < 5) {
    console.log('You can be friend');
}else {
    console.log('You guys stay apart');
}

//------------------------------------

// কোন দশমিক সংখ্যা কে পূর্ণ সংখ্যা করার নিয়ম 
const number = 2.79999;
const fullNumber = Math.round(number);
// console.log(fullNumber);
const result2 = Math.ceil(number);
const result3 = Math.floor(number);
// console.log(result3);

//---------------------

// Random // নির্দিষ্ট কোন মান থাকে না 

// console.log(Math.random());
// const random = Math.round(Math.random()*100);
// console.log(random);
for(let i = 0; i < 20; i++) {
    const random = Math.round(Math.random()*6);
    console.log(random);
}


