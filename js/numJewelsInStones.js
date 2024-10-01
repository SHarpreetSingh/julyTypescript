var numJewelsInStones = function (jewels, stones) {
    console.log("jewels", jewels.split(""));
    console.log(stones);

    // Create a Set from the first string's characters 
    const charSet = new Set(jewels.split(''));
    console.log(charSet);

    // Filter the second string's characters to only include those that are in the Set 
    const commonChars = stones.split('')
        .filter(char => charSet.has(char));
    console.log(commonChars.length);
    return commonChars.length;
};

numJewelsInStones("aA", "aAAbbbb")



