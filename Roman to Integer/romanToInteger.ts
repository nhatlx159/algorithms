function romanToInt(s: string): number {
    let result: number = 0
    let array: Array<number> = []
    let array1: Array<number> = []
    for (let i = 0; i < s.length; i++) {
        const ele = s[i];
        array.push(elementString(ele))
    }
    for (let i = 0; i < array.length; i++) {
        const ele = array[i];
        if(ele < array[i+1]){
            const num = array[i+1] - ele
            array1.push(num)
            i++
            continue
        }
        array1.push(ele)
    }
    for (let i = 0; i < array1.length; i++) {
        const ele = array1[i];
        result = result + ele
    }
    console.log(array1);
    console.log(result);
    return result
};
const elementString = (s: string): number => {
    switch (s) {
        case "I":
            return 1
        case "V":
            return 5
        case "X":
            return 10
        case "L":
            return 50
        case "C":
            return 100
        case "D":
            return 500
        case "M":
            return 1000
        default:
            break;
    }
    return 0
}

romanToInt("MCMXCIV")
