let imgbox = document.getElementById("imgbox");
let qrImage = document.getElementById("qrImage");
let qrtext = document.getElementById("qrtext");   

function generateQR() {
    if(qrtext.value.length == 0) {
        alert("กรุณาใส่ข้อความหรือลิ้งค์");
        return;
    }
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrtext.value;
    imgbox.classList.add("show-img");
}