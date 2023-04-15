/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    console.log("Developer proffession students using map ");
    arr.map(mapcallback);

    function mapcallback(element) {
        if (element.profession == "developer") {
            console.log(element.id, element.name, element.age, element.profession);
        }
    }
}

function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    console.log("Developer proffession students using forEach");
    arr.forEach(callbackforEach);

    function callbackforEach(element) {
        if (element.profession == "developer") {
            console.log(element.id, element.name, element.age, element.profession);
        }
    }
}

function addData() {
    //Write your code here, just console.log
    arr.push({ id: 4, name: "susan", age: "20", profession: "intern" });
    for (let i in arr) {
        console.log(arr[i]);
    }
}

function removeAdmin() {
    //Write your code here, just console.log
    for (let i in arr) {
        if (arr[i].profession == "admin") {
            delete arr[i];
        }
    }
    for (let i in arr) {
        console.log(arr[i]);
    }
}

function concatenateArray() {
    //Write your code here, just console.log
    let arr1 = [
        { id: 4, name: "Vaish", age: "22" },
        { id: 5, name: "Pranju", age: "23" },
        { id: 6, name: "Anya", age: "24" },
    ];
    let arr2 = arr.concat(arr1);
    for (let i in arr) {
        console.log(arr2[i]);
    }

}