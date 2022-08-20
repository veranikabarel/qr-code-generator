const form = document.getElementById("generate");
const qr = document.getElementById("qrcode");

const onGenerateSubmit = (e) => {
    e.preventDefault();
    clearUI();

    const url = document.getElementById("url").value;
    const size = document.getElementById("size").value;

    url === "" ? alert("Please enter the URL") : generateQrCode(url, size);

    setTimeout(() => {
        const saveUrl = qr.querySelector('img').src;
        createBtn(saveUrl);
    }, 50)
};

const generateQrCode = (url, size) => {
    const qrcode = new QRCode("qrcode", {
        text: url,
        width: size,
        height: size,
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
    link.classList = 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-full m-auto my-5';
    link.href = saveUrl;
    link.download = 'qrcode';
    link.innerHTML = 'Save Image';
    document.getElementById('generated').appendChild(link);
}

form && form.addEventListener("submit", onGenerateSubmit);
