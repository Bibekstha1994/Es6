//iterables and iterators
//iterable is object that implement method whose key is symbol.iterator
// Iterable{
//     [Symbol.iterator]() : Iterator
// }
//Iterator object that implement next method
// Iterator{
//     next() : IresultObj
// }
// IresultObj{
//     value : any
//     done : bool
// }
//how for of loop works
var iterable = [1, 2, 3];
function createIterator(array) {
    var count = 0;
    return {
        next: function () {
            return count < array.length ?
                { value: array[count++], done: false } :
                { value: undefined, done: true };
        }
    };
}
var myIterator = createIterator(iterable);
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
//# sourceMappingURL=tutorial38.js.map