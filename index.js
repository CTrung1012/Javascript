var ten = document.querySelector("#name");
var tuoi = document.querySelector("#age");
var sdt = document.querySelector("#phone");

function handleChange() {
    var ketqua = document.querySelector("#ketqua")
    ketqua.style.border = "1px solid black"
    ketqua.innerHTML =
    "Họ và tên : " + ten.value + "<br>" + "Tuổi : " + tuoi.value + "<br>" + "SĐT : " + sdt.value;
}