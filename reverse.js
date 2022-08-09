function reverseString(text) {
    
    for(let i = text.length; i >= 0; i--) {
        const element = text[i];
        console.log(element);
    }
}

const myString = 'I am a good boy';
const reversed = reverseString(myString);
// console.log(reversed);