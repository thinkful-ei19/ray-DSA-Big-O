function naiveSearch(array, item) {
    for (let i=0; i<array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

// O(n) Linear - This algorithm cycles through the input array to match an item. The run time would grow larger as the input size grows.