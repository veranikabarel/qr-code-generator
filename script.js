const form = document.getElementById("generate");
const qr = document.getElementById("qrcode");
const download = document.getElementById("download");

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
        addLinkText(url, color);
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
    download.innerHTML = '';
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

const addLinkText = (url, color) => {
    const linkText = document.createElement('p');
    linkText.id = 'link-text';
    linkText.classList = 'text-bold mt-5';
    linkText.innerHTML = `This is a QR Code in ${color} color for ${url} website.`;
    document.getElementById('download').appendChild(linkText);
}

form && form.addEventListener("submit", onGenerateSubmit);
