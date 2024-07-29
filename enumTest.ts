// Basic Enum: Define an enum Direction with values Up, Down, Left, and Right. Write a function move that takes a direction and logs a message indicating the direction of movement.

enum Direction {
    Up, Down, Left, Right
}

function move(arg: Direction) {
    console.log("Direction", arg);
}

move(Direction.Up)


