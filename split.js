// কোন শব্দ আলাদা আলাদা করে দেখাতে split ব্যবহার করা হয়
const lyrics =  'Tumi bondhu kala pakhi ami jeno ki. Bosonto kale tomay.';
const parts = lyrics.split(' ');
const sentences = lyrics.split('.');

console.log(sentences);

// slice
const partial = lyrics.slice(5, 11);

console.log(partial);
const partial2 = lyrics.substring(5, 11);
console.log(partial2);

const lines = [ 'Tumi bondhu kala pakhi ami jeno ki', 'Bosonto kale tomay', 'rong jomase sada kala'];
const newSong = lines.join('. ');
console.log(newSong);