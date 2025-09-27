const input = document.getElementById("input")

const out1 = document.getElementById("output")

const myMap = new Map();



























    myMap.set("!", 33)
    myMap.set('"', 34)
    myMap.set("#", 35)
    myMap.set("$", 36)
    myMap.set("%", 37)
    myMap.set("&", 38)
    myMap.set("'", 39)
    myMap.set("(", 40)
    myMap.set(")", 41)
    myMap.set("*", 42)
    myMap.set("+", 43)
    myMap.set(",", 44)
    myMap.set("-", 45)
    myMap.set(".", 46)
    myMap.set("/", 47)
    myMap.set("0", 48)
    myMap.set("1", 49)
    myMap.set("2", 50)
    myMap.set("3", 51)
    myMap.set("4", 52)
    myMap.set("5", 53)
    myMap.set("6", 54)
    myMap.set("7", 55)
    myMap.set("8", 56)
    myMap.set("9", 57)
    myMap.set(":", 58)
    myMap.set(";", 59)
    myMap.set("<", 60)
    myMap.set("=", 61)
    myMap.set(">", 62)
    myMap.set("?", 63)
    myMap.set("@", 64)
    myMap.set("A", 65)
    myMap.set("B", 66)
    myMap.set("C", 67)
    myMap.set("D", 68)
    myMap.set("E", 69)
    myMap.set("F", 70)
    myMap.set("G", 71)
    myMap.set("H", 72)
    myMap.set("I", 73)
    myMap.set("J", 74)
    myMap.set("K", 75)
    myMap.set("L", 76)
    myMap.set("M", 77)
    myMap.set("N", 78)
    myMap.set("O", 79)
    myMap.set("P", 80)
    myMap.set("Q", 81)
    myMap.set("R", 82)
    myMap.set("S", 83)
    myMap.set("T", 84)
    myMap.set("U", 85)
    myMap.set("V", 86)
    myMap.set("W", 87)
    myMap.set("X", 88)
    myMap.set("Y", 89)
    myMap.set("Z", 90)
    myMap.set("[", 91)
    myMap.set("\\", 92)
    myMap.set("]", 93)
    myMap.set("^", 94)
    myMap.set("_", 95)
    myMap.set("`", 96)
    myMap.set("a", 97)
    myMap.set("b", 98)
    myMap.set("c", 99)
    myMap.set("d", 100)
    myMap.set("e", 101)
    myMap.set("f", 102)
    myMap.set("g", 103)
    myMap.set("h", 104)
    myMap.set("i", 105)
    myMap.set("j", 106)
    myMap.set("k", 107)
    myMap.set("l", 108)
    myMap.set("m", 109)
    myMap.set("n", 110)
    myMap.set("o", 111)
    myMap.set("p", 112)
    myMap.set("q", 113)
    myMap.set("r", 114)
    myMap.set("s", 115)
    myMap.set("t", 116)
    myMap.set("u", 117)
    myMap.set("v", 118)
    myMap.set("w", 119)
    myMap.set("x", 120)
    myMap.set("y", 121)
    myMap.set("z", 122)
    myMap.set("{", 123)
    myMap.set("|", 124)
    myMap.set("}", 125)
    myMap.set("~", 126)



function convert(value){

    i = 0;

    let returnValue = "";

    while(i < value.length){

        if (myMap.has(value[i])){
            let temp = myMap.get(value[i]);
            temp = temp + " "
            returnValue += temp;
        }

        i += 1


    }

    return returnValue;




}

function nameToASCII(){

    let value = input.value;
    let change = convert(value);

    document.getElementById("output").innerText = change;
}

