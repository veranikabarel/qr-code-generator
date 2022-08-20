const form = document.getElementById("generate");
const qr = document.getElementById("qrcode");

const onGenerateSubmit = (e) => {
    e.preventDefault();
    clearUI();

    const url = document.getElementById("url").value;
    const size = document.getElementById("size").value;
    const color = document.getElementById("color").value;

    url === "" ? alert("Please enter the URL") : generateQrCode(url, size, color);

    setTimeout(() => {
        const saveUrl = qr.querySelector('img').src;
        createBtn(saveUrl);
    }, 50)
};

const generateQrCode = (url, size, color) => {
    const qrcode = new QRCode("qrcode", {
        text: url,
        width: size,
        height: size,
        colorDark: color,
    });
};

const clearUI = () => {
    qr.innerHTML = '';
    const saveQR = document.getElementById('save-link');
    saveQR && saveQR.remove();
}

const createBtn = (saveUrl) => {
    const link = document.createElement('a');
    link.id = 'save-link';
    link.classList = 'bg-gray-600 w-1/2 rounded text-white py-3 px-4 mt-5 hover:bg-[#c55339]';
    link.href = saveUrl;
    link.download = 'qrcode';
    link.innerHTML = 'Save QR Code';
    document.getElementById('download').appendChild(link);
}

form && form.addEventListener("submit", onGenerateSubmit);
