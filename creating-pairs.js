function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}


// O(n^2) Polynomial Time Complexity - this algorithm has a nested loop so the size of the input data can be squared.