// const time = document.querySelector("#time");
function inNgayGio() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    document.querySelector("#time").innerHTML = `${hours}:${minutes}:${seconds}`;
}
setInterval(inNgayGio, 1000);