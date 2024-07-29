interface Draggable {
    drag(): void;
}

interface Resizable {
    resize(): void;
}

type UIElement1 = Draggable & Resizable & {
    dr():void
};

let element1: UIElement1 = {
    drag() {
        console.log("Resizing")
        return "true"
     },
     dr(){
        console.log("Resizing")
     },
    resize() { console.log("Dragging"); }
};

element1.drag();   // Output: Dragging
element1.resize(); // Output: Resizing

// enum num {
//     a=1
// }

// interface functionInterface{
//     fun():void
// }

// let animal:any =["cow"]


