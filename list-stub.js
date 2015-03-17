// Classic linked list implementation
function List(data, tail) {
    this.data = data
    this.tail = tail

    // Add an element to the head of this list
    this.add = function(data) {
        return new List(data, this)
    }

    //Returns true if the list is empty
    this.isEmpty = function() {
        // returns boolean
        return true;
    }

    // True if there is a next element in the list
    this.hasNext = function() {
        // returns boolean
        while(List.hasNext()) {  
             console.log(List.next());
            } 
            
    }

    // Returns the next element in the list
    this.next = function() {
        // returns an integer
    }

    // Counts the number of elements in a list
    this.length = function() {
        // returns an integer
    }

    // Applies the function "lambda" to each element in the list
    this.foreach = function(lambda) {
        // Returns a new list 
    }
}

var l = new List(null, null);

var a = l.add("a").add("b").add("c")
