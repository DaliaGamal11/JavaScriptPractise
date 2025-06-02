function NumericalSequence(start, end, step) {
    if (step === 0) throw new Error("Step cannot be zero");

    // private :without this 
    var list = [];

    // initialization
    for (var i = start; step > 0 ? i <= end : i >= end; i += step) {
        list.push(i);
    }

    // duplication
    function hasDuplicate(val) {
        for (var i = 0; i < list.length; i++) {
            if (list[i] === val) return true;
        }
        return false;
    }

    // check if in sequence
    function isSequential(newVal, refVal) {
        return (newVal - refVal) === step;
    }

    this.append = function(val) {
        var last = list[list.length - 1];
        if (hasDuplicate(val)) throw new Error("Duplicate value");
        if (!isSequential(val, last)) throw new Error("Value is not sequential");
        list.push(val);
    };

    this.prepend = function(val) {
        var first = list[0];
        if (hasDuplicate(val)) throw new Error("Duplicate value");
        if (!isSequential(first, val)) throw new Error("Value is not sequential");
        var newList = [val];
        for (var i = 0; i < list.length; i++) {
            newList.push(list[i]);
        }
        list = newList;
    };

    this.pop = function() {
        if (list.length === 0) {
            console.log("List is empty");
            return;
        }
        list.length = list.length - 1;
    };

    this.dequeue = function() {
        if (list.length === 0) {
            console.log("List is empty");
            return;
        }
        var newList = [];
        for (var i = 1; i < list.length; i++) {
            newList.push(list[i]);
        }
        list = newList;
    };

    this.getList = function() {
        var copy = [];
        for (var i = 0; i < list.length; i++) {
            copy.push(list[i]);
        }
        return copy;
    };

    this.toString = function() {
        var str = "Numerical sequence: ";
        for (var i = 0; i < list.length; i++) {
            str += list[i];
            if (i < list.length - 1) str += ", ";
        }
        return str;
    };
}
var seq = new NumericalSequence(1, 5, 1);
console.log(seq.toString()); // 1, 2, 3, 4, 5

seq.append(6);
seq.prepend(0);
console.log("after append and prepend",seq.toString()); //  0, 1, 2, 3, 4, 5, 6

seq.pop();
seq.dequeue();
console.log("after pop and dequeue",seq.toString()); // 1, 2, 3, 4, 5

seq.append(7);     // ✅
console.log("Duplicate value")
seq.append(7);  
console.log("not sequential")   
seq.append(9);   
