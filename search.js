const lyrics =  'Tumi bondhu kala pakhi ami jeno ki. Bosonto kale tomay.';

// sting এর মধ্যে কোন শব্দ আছে কিনা তা দেখার জন্য includes ব্যবহার করা হয়।। 
const searchString = 'Pakhi';
// const doesExit = lyrics.includes('pakhi'); 
const lyricsLowerCase = lyrics.toLowerCase();
// const doesExit = lyricsLowerCase.includes(searchString);
//const searchStringLower = searchString.toLowerCase();
//const doesExit = lyricsLowerCase.includes(searchStringLower);
const doesExitOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExit);
console.log(doesExitOneLine);
//---------------------------

// indexOf 
// indexOf ব্যবহার করা হয় string এর কোন word কত নাম্বার এ আছে তা জানার জন্য
if(lyrics.indexOf('kala') !== -1) {
    console.log('Exists on the string');
}else {
    console.log('Cannot find it');
}
//console.log(lyrics.indexOf('kala'));
//console.log(lyrics.indexOf('Tumi'));


// startWith
console.log(lyrics.startsWith('T'));

// endWithe

const fileName = 'index.pdf';
const otherName = 'add.png';
console.log(fileName.endsWith('.pdf'));


