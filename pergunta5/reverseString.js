function reverseString(str) {
    let new_str = '', i = str.length - 1;
    for (i; i>=0; i--) {
        new_str += str[i];
    }
    return new_str
}
console.log(reverseString("Jhone"));


