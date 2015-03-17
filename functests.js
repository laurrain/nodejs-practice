function List(data,tail){
	this.data = data
	this.tail = tail

	//add anelement to the head of this list
	this.add = function(data){
		return new List(data, this)
	}

	this.next = function(){
            var index = 0;
            var element;
            if (!this.hasNext()) {
                return null;
            }
            element = data[index];
            index += 3;
            return element;
        },

    this.hasNext = function() {
        	while(List.hasNext()) {  
             console.log(List.next());
            }  
        },


    this.current = function() {
            return data[index];
        },

		/**if (data != null{
			return data
		}else{
			return null
		}**/


}

/**var myList = new List(null, null)
myList = myList.add("a").add("b").add("c")
console.log(myList)**/
var fruit = new List(null, null)
fruit = fruit.add("apple").add("banana").add("orange").add("lemon")
console.log(fruit)
fruit.current();  
console.log(List.current());  

