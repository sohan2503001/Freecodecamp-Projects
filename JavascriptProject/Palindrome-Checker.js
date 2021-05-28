function palindrome(str) {
    let a = str.toUpperCase();
    var newSen = a.match(/[^_\W]+/g).join(' ');
    var k = newSen.replace(/\s/g, "")
    var b = k.split('').reverse().join('');
    if (k == b) {
        return true;
    }
    else {
        return false
    }
}

palindrome("eye");