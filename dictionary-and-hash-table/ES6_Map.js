let map = new Map();
map.set('Gandalf', 'gandalf@email.com');
map.set('John', 'johnsnow@email.com');
map.set('Tyrion', 'tyrion@email.com');
console.log(map.has('Gandalf')); //输出true
console.log(map.size); //输出3
console.log(map.keys()); //输出["Gandalf", "John", "Tyrion"]
console.log(map.values()); //输出["gandalf@email.com","johnsnow@email.com", "tyrion@email.com"]
console.log(map.get('Tyrion')); //输出tyrion@email.com

map.delete('John');
