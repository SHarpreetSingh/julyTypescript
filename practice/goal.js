Output: "Goal"

// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".

// let command = "G()(al)"
let command ="(al)G(al)()()G"  //"G()()()()(al)"

var interpret = function (command) {
    // console.log(command.split(''))
    let Goal = ""
    for (let index = 0; index < command.split('').length; index++) {
        const element = command[index];
        if (element == "G") {
            console.log("element", element)
            Goal += "G"
        }
        else if (element == "(" && command[index + 1] == "a") {
            console.log("element", element)
            Goal += "al"
        }
        else if (element == "(" && command[index + 1] == ")") {
            Goal += "o"
        }
    }
    console.log("Goal", Goal)
    return Goal
};

interpret(command)
