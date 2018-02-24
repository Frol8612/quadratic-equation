module.exports = function solveEquation(equation) {
    let arr = equation.split(' ');
    
    let a = 0,
        b = 0,
        c = 0;
    a = Number (arr[0]);
 
    if (arr[3] == '-') {
        b = Number (arr[3] + arr[4]);
    } else {
        b = Number (arr[4]);
    }

    if (arr[7] == '-') {
        c = Number (arr[7] + arr[8]);
    } else {
        c = Number (arr[8]);
    }

    let d = Math.pow(b, 2) - (4 * a *c);
        
    if (d > 0) {
        let x = ((-b) + Math.sqrt(d)) / (2 * a),
            y = ((-b) - Math.sqrt(d)) / (2 * a),
            newArr = [Math.round(x), Math.round(y)];
            if (a > 0) {
                return newArr.reverse();
            }
            return newArr;
    }
    
  // your implementation
}
