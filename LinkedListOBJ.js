var LinkedList = { //simulation of linked list (key , value )--array of objects
    data: [
        { value: 1 },
        { value: 3 },
        { value: 4 },
        { value: 5 }
    ],
    //deplication 
    _hasValue: function (value) {
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].value === value) {
                return true;
            }
        }
        return false;
    },

    enqueue: function (value) {
        if (this._hasValue(value)) {
            console.log("Error: Value " + value + " already exists in the list");
            return false;
        }

        if (this.data.length === 0 || value > this.data[this.data.length - 1].value) {
            this.data[this.data.length] = { value: value };
            return true;
        } else {
            console.log("Error: Value " + value + " is not in sequence");
            return false;
        }
    },

    insert: function (value, index) {
        if (this._hasValue(value)) {
            console.log("Error: Value " + value + " already exists in the list");
            return false;
        }

        if (index < 0 || index > this.data.length) {
            console.log("Error: Invalid index");
            return false;
        }

        var prev = index > 0 ? this.data[index - 1].value : -Infinity;
        var next = index < this.data.length ? this.data[index].value : Infinity;

        if (value > prev && value < next) {
            // create a new array with inserted element
            var newData = [];
            for (var i = 0; i < index; i++) {
                newData[newData.length] = this.data[i];
            }
            newData[newData.length] = { value: value };
            for (var j = index; j < this.data.length; j++) {
                newData[newData.length] = this.data[j];
            }
            this.data = newData;
            return true;
        } else {
            console.log("Error: Inserting " + value + " at index " + index + " would break the sequence");
            return false;
        }
    },
    insertAtStart: function (value) {
        if (this._hasValue(value)) {
            console.log("Error: Value " + value + " already exists in the list");
            return false;
        }
        this.data.unshift({ value: value });
        console.log("Inserted " + value + " at the start.");
        return true;
    },

    pop: function () {
        if (this.data.length === 0) {
            console.log("Error: List is empty");
            return null;
        }

        var removed = this.data[this.data.length - 1];
        var newData = [];
        for (var i = 0; i < this.data.length - 1; i++) {
            newData[newData.length] = this.data[i];
        }
        this.data = newData;
        return removed;
    },

    remove: function (value, index) {
        if (index < 0 || index >= this.data.length) {
            console.log("Error: Invalid index");
            return;
        }

        if (this.data[index].value === value) {

            var newData = [];
            for (var i = 0; i < this.data.length; i++) {
                if (i !== index) {
                    newData.push(this.data[i]);
                }
            }
            this.data = newData;
            console.log("Item removed successfully.");
        } else {
            console.log("Error: The specified value does not exist at the given index.");
        }
    },


    dequeue: function () {
        if (this.data.length === 0) {
            console.log("Error: List is empty");
            return null;
        }

        var removed = this.data[0];
        var newData = [];
        for (var i = 1; i < this.data.length; i++) {
            newData[newData.length] = this.data[i];
        }
        this.data = newData;
        return removed;
    },

    display: function () {
        var result = "";
        for (var i = 0; i < this.data.length; i++) {
            result += this.data[i].value;
            if (i < this.data.length - 1) {
                result += " -> ";
            }
        }
        return result;
    }
};

// console.log("Initial list:", LinkedList.display());

// LinkedList.enqueue(7);
// console.log("After enqueue(7):", LinkedList.display());

// LinkedList.insert(2, 1);
// console.log("After insert(2, 1):", LinkedList.display());

// LinkedList.pop();
// console.log("After pop():", LinkedList.display());

// LinkedList.remove(3, 2);
// console.log("After remove(3 ):", LinkedList.display());

// LinkedList.dequeue();
// console.log("After dequeue():", LinkedList.display());
