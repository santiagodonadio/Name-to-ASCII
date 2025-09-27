const input = document.getElementById("input")

const out1 = document.getElementById("output1")

const myMap = new Map();

    myMap.set("A", 65)
    myMap.set("B", 66)
    myMap.set("C", 67)


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

    let value = input.value
    let change = convert(value)


}

