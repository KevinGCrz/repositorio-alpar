function shift(array) {

    const value = array[0]

    for(let i = 0; i < array.length - 1; i++)
    {
        array[i] = array[i + 1]
    }
    
    array.length -= 1

    return value;
}

const arr = [ '']
console.log(shift(arr))
console.log(arr)