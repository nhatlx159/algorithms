function romanToInt(s) {
    var result = 0;
    var array = [];
    var array1 = [];
    for (var i = 0; i < s.length; i++) {
        var ele = s[i];
        array.push(elementString(ele));
    }
    console.log(array);
    for (var i = 0; i < array.length; i++) {
        var ele = array[i];
        if (ele < array[i + 1]) {
            var num = array[i + 1] - ele;
            array1.push(num);
            i++;
            continue;
        }
        array1.push(ele);
    }
    for (var i = 0; i < array1.length; i++) {
        var ele = array1[i];
        result = result + ele;
    }
    console.log(array1);
    console.log(result);
    return result;
}
;
var elementString = function (s) {
    switch (s) {
        case "I":
            return 1;
        case "V":
            return 5;
        case "X":
            return 10;
        case "L":
            return 50;
        case "C":
            return 100;
        case "D":
            return 500;
        case "M":
            return 1000;
        default:
            break;
    }
    return 0;
};
romanToInt("MCMXCIV");
