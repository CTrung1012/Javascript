let character_01 = {
    name: "John",
    color: "Black",
    height: 200,
    width: 200,
}

document.querySelector(".character_01").innerHTML =
    "Tên : " + character_01.name +
    "<br>" + "Màu : " + character_01.color +
    "<br>" + "Chiều dài : " + character_01.width + "px" +
    "<br>" +  "Chiều rộng : " + character_01.height + "px"
console.log(character_01)

let character_02 = {
    name: "Tommy",
    color: "Red",
    height: 300,
    width: 300,
}

document.querySelector(".character_02").innerHTML =
    "Tên : " + character_02.name +
    "<br>" + "Màu : " + character_02.color +
    "<br>" + "Chiều dài : " + character_02.width + "px" +
    "<br>" +  "Chiều rộng : " + character_02.height + "px"
console.log(character_02)
