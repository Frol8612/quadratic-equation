module.exports = function solveEquation(equation) {
    let [a, b, c] = equation.split(' ').map((el, i, arr) => {
        if (el === '-') {
            arr[i + 1] = el + arr[i + 1];
        }
        return Number(el);
    }).filter(el => !isNaN(el));

    let d = b**2 - (4 * a * c);

    if (d > 0) {

        let newArr = [
            Math.round((-b + Math.sqrt(d)) / (2 * a)),
            Math.round((-b - Math.sqrt(d)) / (2 * a)),
        ];

        if (a > 0) {
            return newArr.reverse();
        }
        
        return newArr;
    }

    // your implementation
};
