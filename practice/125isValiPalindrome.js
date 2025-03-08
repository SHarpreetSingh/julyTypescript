let s = " "  //  "A man, a plan, a canal: Panama"

var isPalindrome = function (s) {
    // Convert the string to lowercase and filter out non-alphanumeric characters
    const filteredString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    console.log("filteredString", filteredString);

    // Check if the filtered string is the same as its reverse
    const reversedString = filteredString.split('').reverse().join('');
    console.log("reversedString", reversedString, filteredString === reversedString);
    return filteredString === reversedString

};
isPalindrome(s)


