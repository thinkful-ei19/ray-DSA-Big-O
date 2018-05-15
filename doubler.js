function doubleArrayValues(array) {
    for (let i=0; i<array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

// O(n) Linear Time - this algorithm run times depends on the size of the input array. The bigger the array, the longer the run times.
