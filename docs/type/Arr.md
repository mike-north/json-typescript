# `Arr`

*   [length](#length)
*   [toString](#tostring)
*   [toLocaleString](#tolocalestring)
*   [pop](#pop)
*   [push](#push)
*   [concat](#concat)
*   [join](#join)
*   [reverse](#reverse)
*   [shift](#shift)
*   [slice](#slice)
*   [sort](#sort)
*   [splice](#splice)
*   [unshift](#unshift)
*   [indexOf](#indexof)
*   [lastIndexOf](#lastindexof)
*   [every](#every)
*   [some](#some)
*   [forEach](#foreach)
*   [map](#map)
*   [filter](#filter)
*   [reduce](#reduce)
*   [reduceRight](#reduceright)
*   [find](#find)
*   [findIndex](#findindex)
*   [fill](#fill)
*   [copyWithin](#copywithin)
*   [\[Symbol.iterator\]](#symboliterator)
*   [entries](#entries)
*   [keys](#keys)
*   [values](#values)
*   [\[Symbol.unscopables\]](#symbolunscopables)
*   [includes](#includes)

---

`interface` `extends` [`Array`](Array.md "Array")

## length

> ```ts
> number
> ```
>
> Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.

## toString

> ```ts
> () => string
> ```
>
> Returns a string representation of an array.

## toLocaleString

> ```ts
> () => string
> ```
>
> Returns a string representation of an array. The elements are converted to string using their toLocalString methods.

## pop

> ```ts
> () => Value
> ```
>
> Removes the last element from an array and returns it.

## push

> ```ts
> (...items: Value[]) => number
> ```
>
> Appends new elements to an array, and returns the new length of the array.
>
>   
>
>
> *   **items** - New elements of the Array.
>
>   
>

## concat

> ```ts
> { (...items: ConcatArray<Value>[]): Value[]; (...items: (string | number | boolean | Object | Arr | ConcatArray<Value>)[]): Value[]; }
> ```
>
> Combines two or more arrays.
>
>   
>
>
> *   **items** - Additional items to add to the end of array1.
>
>   
>

## join

> ```ts
> (separator?: string) => string
> ```
>
> Adds all the elements of an array separated by the specified separator string.
>
>   
>
>
> *   **separator** - A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
>
>   
>

## reverse

> ```ts
> () => Value[]
> ```
>
> Reverses the elements in an Array.

## shift

> ```ts
> () => Value
> ```
>
> Removes the first element from an array and returns it.

## slice

> ```ts
> (start?: number, end?: number) => Value[]
> ```
>
> Returns a section of an array.
>
>   
>
>
> *   **start** - The beginning of the specified portion of the array.
> *   **end** - The end of the specified portion of the array.
>
>   
>

## sort

> ```ts
> (compareFn?: (a: Value, b: Value) => number) => Arr
> ```
>
> Sorts an array.
>
>   
>
>
> *   **compareFn** - The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order.
>
>   
>

## splice

> ```ts
> { (start: number, deleteCount?: number): Value[]; (start: number, deleteCount: number, ...items: Value[]): Value[]; }
> ```
>
> Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
>
>   
>
>
> *   **start** - The zero-based location in the array from which to start removing elements.
> *   **deleteCount** - The number of elements to remove.
>
>   
>

## unshift

> ```ts
> (...items: Value[]) => number
> ```
>
> Inserts new elements at the start of an array.
>
>   
>
>
> *   **items** - Elements to insert at the start of the Array.
>
>   
>

## indexOf

> ```ts
> (searchElement: Value, fromIndex?: number) => number
> ```
>
> Returns the index of the first occurrence of a value in an array.
>
>   
>
>
> *   **searchElement** - The value to locate in the array.
> *   **fromIndex** - The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
>
>   
>

## lastIndexOf

> ```ts
> (searchElement: Value, fromIndex?: number) => number
> ```
>
> Returns the index of the last occurrence of a specified value in an array.
>
>   
>
>
> *   **searchElement** - The value to locate in the array.
> *   **fromIndex** - The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.
>
>   
>

## every

> ```ts
> (callbackfn: (value: Value, index: number, array: Value[]) => boolean, thisArg?: any) => boolean
> ```
>
> Determines whether all the members of an array satisfy the specified test.
>
>   
>
>
> *   **callbackfn** - A function that accepts up to three arguments. The every method calls the callbackfn function for each element in array1 until the callbackfn returns false, or until the end of the array.
> *   **thisArg** - An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
>
>   
>

## some

> ```ts
> (callbackfn: (value: Value, index: number, array: Value[]) => boolean, thisArg?: any) => boolean
> ```
>
> Determines whether the specified callback function returns true for any element of an array.
>
>   
>
>
> *   **callbackfn** - A function that accepts up to three arguments. The some method calls the callbackfn function for each element in array1 until the callbackfn returns true, or until the end of the array.
> *   **thisArg** - An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
>
>   
>

## forEach

> ```ts
> (callbackfn: (value: Value, index: number, array: Value[]) => void, thisArg?: any) => void
> ```
>
> Performs the specified action for each element in an array.
>
>   
>
>
> *   **callbackfn** - A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
> *   **thisArg** - An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
>
>   
>

## map

> ```ts
> <U>(callbackfn: (value: Value, index: number, array: Value[]) => U, thisArg?: any) => U[]
> ```
>
> Calls a defined callback function on each element of an array, and returns an array that contains the results.
>
>   
>
>
> *   **callbackfn** - A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
> *   **thisArg** - An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
>
>   
>

## filter

> ```ts
> { <S extends Value>(callbackfn: (value: Value, index: number, array: Value[]) => value is S, thisArg?: any): S[]; (callbackfn: (value: Value, index: number, array: Value[]) => any, thisArg?: any): Value[]; }
> ```
>
> Returns the elements of an array that meet the condition specified in a callback function.
>
>   
>
>
> *   **callbackfn** - A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
> *   **thisArg** - An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
>
>   
>

## reduce

> ```ts
> { (callbackfn: (previousValue: Value, currentValue: Value, currentIndex: number, array: Value[]) => Value): Value; (callbackfn: (previousValue: Value, currentValue: Value, currentIndex: number, array: Value[]) => Value, initialValue: Value): Value; <U>(callbackfn: (previousValue: U, currentValue: Value, currentIndex...
> ```
>
> Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
>
>   
>
>
> *   **callbackfn** - A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
> *   **initialValue** - If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
>
>   
>

## reduceRight

> ```ts
> { (callbackfn: (previousValue: Value, currentValue: Value, currentIndex: number, array: Value[]) => Value): Value; (callbackfn: (previousValue: Value, currentValue: Value, currentIndex: number, array: Value[]) => Value, initialValue: Value): Value; <U>(callbackfn: (previousValue: U, currentValue: Value, currentIndex...
> ```
>
> Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
>
>   
>
>
> *   **callbackfn** - A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
> *   **initialValue** - If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
>
>   
>

## find

> ```ts
> { <S extends Value>(predicate: (this: void, value: Value, index: number, obj: Value[]) => value is S, thisArg?: any): S; (predicate: (value: Value, index: number, obj: Value[]) => boolean, thisArg?: any): Value; }
> ```
>
> Returns the value of the first element in the array where predicate is true, and undefined
>
> otherwise.
>
>   
>
>
> *   **predicate** - find calls predicate once for each element of the array, in ascending
> *   **thisArg** - If provided, it will be used as the this value for each invocation of
>
>   
>

## findIndex

> ```ts
> (predicate: (value: Value, index: number, obj: Value[]) => boolean, thisArg?: any) => number
> ```
>
> Returns the index of the first element in the array where predicate is true, and -1
>
> otherwise.
>
>   
>
>
> *   **predicate** - find calls predicate once for each element of the array, in ascending
> *   **thisArg** - If provided, it will be used as the this value for each invocation of
>
>   
>

## fill

> ```ts
> (value: Value, start?: number, end?: number) => Arr
> ```
>
> Returns the this object after filling the section identified by start and end with value
>
>   
>
>
> *   **value** - value to fill array section with
> *   **start** - index to start filling the array at. If start is negative, it is treated as
> *   **end** - index to stop filling the array at. If end is negative, it is treated as
>
>   
>

## copyWithin

> ```ts
> (target: number, start: number, end?: number) => Arr
> ```
>
> Returns the this object after copying a section of the array identified by start and end
>
> to the same array starting at position target
>
>   
>
>
> *   **target** - If target is negative, it is treated as length+target where length is the
> *   **start** - If start is negative, it is treated as length+start. If end is negative, it
> *   **end** - If not specified, length of the this object is used as its default value.
>
>   
>

## \[Symbol.iterator]

> ```ts
> () => IterableIterator<Value>
> ```
>
> Iterator

## entries

> ```ts
> () => IterableIterator<[number, Value]>
> ```
>
> Returns an iterable of key, value pairs for every entry in the array

## keys

> ```ts
> () => IterableIterator<number>
> ```
>
> Returns an iterable of keys in the array

## values

> ```ts
> () => IterableIterator<Value>
> ```
>
> Returns an iterable of values in the array

## \[Symbol.unscopables]

> ```ts
> () => { copyWithin: boolean; entries: boolean; fill: boolean; find: boolean; findIndex: boolean; keys: boolean; values: boolean; }
> ```
>
> Returns an object whose properties have the value 'true'
>
> when they will be absent when used in a 'with' statement.

## includes

> ```ts
> (searchElement: Value, fromIndex?: number) => boolean
> ```
>
> Determines whether an array includes a certain element, returning true or false as appropriate.
>
>   
>
>
> *   **searchElement** - The element to search for.
> *   **fromIndex** - The position in this array at which to begin searching for searchElement.
>
>   
>

> ```ts
> [k: number]: Value
> ```