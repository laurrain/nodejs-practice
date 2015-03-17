
function getData(filename, data, data_number) {
  fs = require('fs');
    fs.readFile('/home/coder/node_modules/NelisaPurchases.csv', 'utf8', function (err, data) {
    	//console.log(process);
            if (err) {
        		return console.log(err);
     		}
        var temp = data.split("\r");
        var purchase = temp.map(function(row){
        var field = row.split(";");

        return [
          {shop:field[0]},
          {date: field[1]},
          {stock_item: field[2]},
          {quantity:field[3]},
          {cost:field[4]},
          {tptal_cost: field[5]}
          ]

        });
        return console.log(temp);
        try this by using synchronous...
     		//console.log("->" + data);

          /**fs.writeFile('/home/coder/node_modules/Inventory.csv', data, function (err) {
            if (err) {
            return console.log(err);
        }
          console.log("-->" + data);
          console.log("file saved");
    });**/
    });
  }
  
  getData();

  function getTheInventory(filename) { //This get the items sold the spaza shop
  // body...
  var fs = require('fs');
  var buffer = fs.readFileSync(filename); 
  var list = buffer.toString().replace(/,/gi, '.');
  var sales_history_rows = list.split('\n');

  var spaza_inventory = [];
  
  var sales_history = sales_history_rows.map(function(row){
    
    var fields = row.split(";");

    return {
      day: fields[0],
      date: fields[1],
      stock_item: fields[2],
      no_sold_items: fields[3],
      sales_price: fields[4]
    }

  });


  sales_history.forEach(function(row){

    var i = 0;

    spaza_inventory.forEach(function(item){
      if(item === row['stock_item']){
        ++i;
      }
      
    });

    if(i === 0 && row['stock_item'] !== 'stock item'){
      spaza_inventory.push(row['stock_item']);
    }

  }); //Getting the inventory ends here

  getData("Inventory.csv", spaza_inventory, 1);

  //Answering the question 'How much of each item has been sold?' starts here
  var inventory_sold = [];

  spaza_inventory.forEach(function (item) {
    // body...
    var sold = 0;
    sales_history.forEach(function(row){
      if(item === row['stock_item']){
        sold += Number(row['no_sold_items']);
      }
    });

    inventory_sold.push({product: item, sold_no: sold});

  });


  function bubbleSort (array) {
  // body...

  for(var i = 0; i < array.length; i++){
    for (var j = 0; j < array.length-1; j++) {
      if(array[j]["sold_no"] < array[j+1]["sold_no"]){
        var temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
        console.log(array[j]["sold_no"]);
      }
    };
  };
}

  bubbleSort(inventory_sold);
  //write_to_file("Sold Of Each (Sorted).csv", inventory_sold, 2)

};

getTheInventory('/home/coder/node_modules/product_list.csv');


