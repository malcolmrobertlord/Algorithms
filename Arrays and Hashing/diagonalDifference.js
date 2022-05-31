// Given a square matrix, calculate the absolute difference between the sums of its diagonals.


function diagonalDifference(arr) {
    let d1 = 0;
    let d2 = 0;
    let size = arr[0]
    for (let i = 1; i <= size; i++){
        d1 += arr[i][i-1]
        d2 += arr[i][size-i]
    }
    return Math.abs(d1-d2)
}

console.log(diagonalDifference(
    [3,
    [11, 2, 4],
    [4 , 5, 6],
    [10, 8, -12]
    ]))