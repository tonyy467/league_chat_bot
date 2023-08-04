const reverseString = function(s) {
    let output = [];
    for (let i = s.length-1; i >= 0; i--) {
        output.push(s[i]);
    }
    return output;
};

let cow = ["c", "o", "w"];
console.log(reverseString(cow));


function lengthOfLastWord (s) {
    let counter = 0;
    s = s.trim();
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            counter++;
        }
        else {
            break;
        }
    }
    return counter;
}

let sentence = "hello world ";
console.log(lengthOfLastWord(sentence)); //5