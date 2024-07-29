/**
 * Requirement:
    Create a generic class Storage that can store any type of data. 
    Include methods to add an item, remove an item, and get all items.
 **/

class StorageI<T> {
    private items: T[] = []

    addItem(item: T): void {
        this.items.push(item)
    }

    removeItem(item: T): void {
        let index = this.items.indexOf(item)
        if (index > -1) this.items.splice(index, 1)
    }

    getAllItems():T[] {
        return this.items
    }
}


// Demonstration with different types
const stringStorage = new StorageI<string>();
stringStorage.addItem("Hello");
stringStorage.addItem("World");
stringStorage.removeItem("Hello");
console.log(stringStorage.getAllItems()); // Output: ["World"]

const numberStorage = new StorageI<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(1);
console.log(numberStorage.getAllItems()); // Output: [2]