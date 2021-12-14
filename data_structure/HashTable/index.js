// Map

const table = new Map()
table.set("key", 100)
table.set("key2", "hello")
console.log(table.get("key")) // 100

const object = {a:1}


// Set

const table = new Set()

table.add("key")
table.add("key2")

console.log(table.has(key)) // true
console.log(table.has(key3)) // false

table.delete("key2")
console.log(table.has(key2)) //false

console.log(table.size) // 2
table.clear()
console.log(table.size) // 0

