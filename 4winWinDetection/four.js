const empty = [
    ['⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️'],
    ['⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️'],
    ['⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️'],
    ['⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️'],
    ['⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️'],
    ['⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️'],
];

const redDiagonalWin = [
    ['⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️'],
    ['⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️'],
    ['⚪️', '⚪️', '⚪️', '⚪️', '🔴', '⚪️', '⚪️'],
    ['⚪️', '⚪️', '⚪️', '🔴', '🔵', '⚪️', '⚪️'],
    ['⚪️', '⚪️', '🔴', '🔵', '🔴', '⚪️', '⚪️'],
    ['⚪️', '🔴', '🔵', '🔴', '🔵', '⚪️', '⚪️'],
];

const blueVerticalWin = [
    ['⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️'],
    ['⚪️', '⚪️', '⚪️', '⚪️', '🔵', '⚪️', '⚪️'],
    ['⚪️', '⚪️', '⚪️', '⚪️', '🔵', '⚪️', '⚪️'],
    ['⚪️', '⚪️', '⚪️', '🔴', '🔵', '⚪️', '⚪️'],
    ['⚪️', '⚪️', '⚪️', '🔴', '🔵', '⚪️', '⚪️'],
    ['⚪️', '⚪️', '⚪️', '🔴', '⚪️', '⚪️', '⚪️'],
];

const blueWinsHorizontally = [
    ['⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️'],
    ['⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️'],
    ['⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️'],
    ['⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️'],
    ['⚪️', '🔵', '🔵', '⚪️', '🔵', '🔵', '⚪️'],
    ['⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️', '⚪️'],
];


console.log('Bottom row:');
console.log(redDiagonalWin[5]);

console.log('Bottom left corner:');
console.log(redDiagonalWin[5][0]);

console.log('Entire board:');
for (let i = 0; i < 6; i++) {
    console.log(redDiagonalWin[i]);
}

console.log('Loop through entire board:');
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
        console.log('At row', i, 'and column', j, 'the field is', redDiagonalWin[i][j]);
    }
}

// Die folgenden Funktionen lassen sich alle mit einer geschachtelten for-Schleife lösen. (Wie oben in Loop through entire board gezeigt)

function didPlayerWinHorizontally(board, player) {
    let rowCounter = 0;
    for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
        for (let colIndex = 0; colIndex < 7; colIndex++) {
            if (board[rowIndex][colIndex] == player) {
                rowCounter++;
                if (rowCounter == 4) {
                    return true
                }   
            }
            else {rowCounter = 0;}
        }
        rowCounter = 0;
    }
    return false
}


function didPlayerWinVertically(board, player) {
    let colCounter = 0;
    for (let colIndex = 0; colIndex < 7; colIndex++) {
        for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
            if (board[rowIndex][colIndex] == player) {
                colCounter++;
                if (colCounter == 4) {
                    return true
                }   
            }
            else {colCounter = 0;}
        }
    }
    return false
}

// console.log(didPlayerWinVertically(blueVerticalWin, '🔵')) // true

function didPlayerWinDiagonallyBottomLeftToTopRight(board, player) {
    
    for (let startRow = 3; i <= 12; i++) {
    if (board[startRow][startCol] == player && board[startRow -1][startCol  +1] == player && board[startRow -2][startCol +2] == player && board [startRow -3][startCol +3] == player) {
        return true
    }
}
return false
}
// console.log(didPlayerWinDiagonallyBottomLeftToTopRight(redDiagonalWin, '🔴')) // true

function didPlayerWinDiagonallyTopLeftToBottomRight(board, player) {}
// console.log(didPlayerWinDiagonallyBottomLeftToTopRight(redDiagonalWin, '🔴')) // false

function didPlayerWin(board, player) {}

// console.log(didPlayerWin(redDiagonalWin, '🔴')) // true
// console.log(didPlayerWin(redDiagonalWin, '🔵')) // false
// console.log(didPlayerWin(blueVerticalWin, '🔵')) // true
// console.log(didPlayerWin(blueVerticalWin, '🔴')) // false


if (didPlayerWinHorizontally(blueWinsHorizontally, '🔵') == true) {
    // console.log('Blue Player won')
}
if (didPlayerWinVertically(blueVerticalWin, '🔵') == true) {
    // console.log ('Blue Player Won')
}
if (didPlayerWinDiagonallyBottomLeftToTopRight(redDiagonalWin, '🔴')==true) {
    console.log ('Red Player Won')
}