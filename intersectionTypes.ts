interface Draggable {
    drag(): void;
}

interface Resizable {
    resize(): void;
}

type UIElement = Draggable & Resizable


let element: UIElement = {
    drag() {
        console.log("Resizing")
        return "true"
     },
    //  dr(){
    //     console.log("Resizing")
    //  },
    resize() { console.log("Dragging"); }
};

element.drag();   // Output: Dragging
element.resize(); // Output: Resizing

