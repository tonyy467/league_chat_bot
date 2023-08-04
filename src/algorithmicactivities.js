const reverseString = function(s) {
    let output = [];
    for (let i = s.length-1; i >= 0; i--) {
        output.push(s[i]);
    }
    return output;
};

let cow = ["c", "o", "w"];
console.log(reverseString(cow));
