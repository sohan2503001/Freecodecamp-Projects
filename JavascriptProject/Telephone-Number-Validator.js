function telephoneCheck(str) {
    var number = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/;
    if (str.match(number)) {
        return true
    } else {
        return false
    }
}

telephoneCheck("555-555-5555");