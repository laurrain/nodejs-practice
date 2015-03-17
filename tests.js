var a ={
	data:"It has to end",
	tail: null
	
}
var b = {
	data: "bling",
	tail: a

}
var c = {
	data: "Goat curry",
	tail: b
}
var d = {
	data: "Dr no",
	tail:c
}

d.data == "Dr no"
d.tail.data == "Goat curry"
d.tail.tail.data == null
//console.log(c.data)
//console.log(d.data)
//console.log(b.data)
//console.log(d.data)
//console.log(a.data)
console.log(c.tail.data)