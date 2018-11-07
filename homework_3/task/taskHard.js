'use strict';

/**
 * Drazil and Factorial
 *
 * Drazil is playing a math game with Varda.
 * Let's define F(x) for positive integer x as a product of factorials of its digits.
 * For example, F(135) = 1! * 3! * 5! = 720
 *
 * First, they choose a decimal number a consisting of n digits that contains at least one digit larger than 1.
 * This number may possibly start with leading zeroes. Then they should find maximum positive number x satisfying
 * following two conditions:
 *
 * 1. x doesn't contain neither digit 0 nor digit 1.
 * 2. F(x) = F(a).
 * Help friends find such number.
 *
 * Input
 * One string input parameter length <= 15. There is at least one digit in a that is larger than 1.
 * Number a may possibly contain leading zeroes.
 *
 * Output
 * Output a maximum possible integer satisfying the conditions above.
 * There should be no zeroes and ones in this number decimal representation.
 */

var drazilTest = [
    {
        parameters: ["1234"],
        expectedResult: 33222
    },
    {
        parameters: ["555"],
        expectedResult: 555
    }
];
/**
 * In the first case, F(1234) = 1! * 2! * 3! * 4! = F(33222)
 */
    

function drazil(boys, girls) {
    boys = String(boys);
    var arr = [], arr1 = [], arrEnd = [];
    var arr7 = [7,5,3,3,2,2,2,2], arr5 =[5,3,2,2,2], arr3 = [3,2], arr2 = [2];
    for (var i=0; i<boys.length; i++){
        arr[i] = boys[i]
    };

    for (i=0;i<arr.length;i++){
        if (arr[i] == 2){arr1.push(2)};
        if (arr[i] == 3){arr1.push(3,2)};
        if (arr[i] == 4){arr1.push(2,2,3,2)};
        if (arr[i] == 5){arr1.push(5,2,2,3,2)};
        if (arr[i] == 6){arr1.push(3,2,5,2,2,3,2)};
        if (arr[i] == 7){arr1.push(7,3,2,5,2,2,3,2)};
        if (arr[i] == 8){arr1.push(2,2,2,7,3,2,5,2,2,3,2)};
        if (arr[i] == 9){arr1.push(3,3,2,2,2,7,3,2,5,2,2,3,2)};
    };

    function compareNumeric(a, b) {
        if (a < b) return 1;
        if (a > b) return -1;
    }

    arr1.sort(compareNumeric);

    while(arr1.length!=0) {
        if (arr1[0] == 7) {
            var j = 0;
            while(j<arr7.length) {
                for ( i = 0; i < arr1.length; i++) {
                    if (arr1[i] == arr7[j]) {
                        arr1.splice(i, 1);
                        j++
                    }
                }
            }
            arrEnd.push(7);
        };
        if (arr1[0] == 5) {
            j = 0;
            while(j<arr5.length) {
                for ( i = 0; i < arr1.length; i++) {
                    if (arr1[i] == arr5[j]) {
                        arr1.splice(i, 1);
                        j++
                    }
                }
            }
            arrEnd.push(5);
        };
        if (arr1[0] == 3) {
            j = 0;
            while(j<arr3.length) {
                for (i = 0; i < arr1.length; i++) {
                    if (arr1[i] == arr3[j]) {
                        arr1.splice(i, 1);
                        j++
                    }
                }
            }
            arrEnd.push(3);
        };
        if (arr1[0] == 2) {
            j = 0;
            while(j<arr2.length){
                for ( i = 0; i < arr1.length; i++) {
                    if (arr1[i] == arr2[j]) {
                        arr1.splice(i, 1);
                        j++
                    }
                }
            }
            arrEnd.push(2);
        };
    }
    return +arrEnd.join('');
}


tasks.push({
    title: "Drazil and Factorial",
    solution: drazil,
    tests: drazilTest
});
