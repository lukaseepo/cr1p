const mediaFiles = [
    { type: 'video', src: '/assets/VID_123010318_231236_359.mp4' },
    { type: 'video', src: '/assets/VID_123010420_090516_306.mp4' },
    { type: 'video', src: '/assets/VID_123011018_080935_467.mp4' },
    { type: 'video', src: '/assets/VID_123020414_163109_367.mp4' },
    { type: 'video', src: '/assets/received_1476050337122161.mp4' },
    { type: 'video', src: '/assets/received_840399514339734.mp4' },
    { type: 'video', src: '/assets/received_810557034170510.mp4' },
    { type: 'video', src: '/assets/received_797241972477822.mp4' },
    { type: 'video', src: '/assets/VID_118051230_205356_644.mp4' },
    { type: 'video', src: '/assets/VID_118060129_081636_591.mp4' },
    { type: 'video', src: '/assets/VID_118060305_181132_111.mp4' },
    { type: 'image', src: '/assets/IMG_20240721_160830_981.jpg' },
    { type: 'image', src: '/assets/IMG_20221228_093607.jpg' },
    { type: 'image', src: '/assets/IMG_20240721_160819_684.jpg' },
    { type: 'image', src: '/assets/IMG_20240721_160833_267.jpg' },
    { type: 'image', src: '/assets/IMG_20240721_160835_815.jpg' },
    { type: 'image', src: '/assets/IMG_20240721_160838_399.jpg' },
    { type: 'image', src: '/assets/IMG_20240721_160846_725.jpg' },
    { type: 'image', src: '/assets/IMG_20240721_160849_470.jpg' },
    { type: 'image', src: '/assets/IMG_20240721_160908_057.jpg' },
    { type: 'image', src: '/assets/IMG_20240721_160910_072.jpg' },
    { type: 'image', src: '/assets/IMG_20240721_160917_141.jpg' },
    { type: 'image', src: '/assets/IMG_20240731_194958_217.jpg' },
    { type: 'image', src: '/assets/IMG_20241112_175908_263.jpg' },
    { type: 'image', src: '/assets/IMG_20241112_175910_011.jpg' },
    { type: 'image', src: '/assets/IMG_20241112_175911_671.jpg' },
    { type: 'image', src: '/assets/IMG_20241112_175913_286.jpg' },
    { type: 'image', src: '/assets/IMG_20241112_175915_309.jpg' },
    { type: 'image', src: '/assets/IMG_20241112_175928_435.jpg' },
    { type: 'image', src: '/assets/IMG_20241112_175931_084.jpg' },
    { type: 'image', src: '/assets/received_326156150465121.jpeg' },
    { type: 'image', src: '/assets/received_332207673179726.jpeg' },
    { type: 'image', src: '/assets/received_398191949419704.jpeg' },
    { type: 'image', src: '/assets/received_431562782675795.jpeg' },
    { type: 'image', src: '/assets/received_448837521453730.jpeg' },
    { type: 'image', src: '/assets/received_468525142706110.jpeg' },
    { type: 'image', src: '/assets/received_469259055857536.jpeg' },
    { type: 'image', src: '/assets/received_469665142436365.jpeg' },
    { type: 'image', src: '/assets/received_502117662472672.jpeg' },
    { type: 'image', src: '/assets/received_502468615574022.jpeg' },
    { type: 'image', src: '/assets/received_512231887815407.jpeg' },
    { type: 'image', src: '/assets/received_724351436441484.jpeg' },
    { type: 'image', src: '/assets/received_811063117458836.jpeg' },
    { type: 'image', src: '/assets/received_834219768357303.jpeg' },
    { type: 'image', src: '/assets/received_844873893913496.jpeg' },
    { type: 'image', src: '/assets/received_851142860409554.jpeg' },
    { type: 'image', src: '/assets/received_858362312290516.jpeg' },
    { type: 'image', src: '/assets/received_908718224630159.jpeg' },
    { type: 'image', src: '/assets/received_1006978681084810.jpeg' },
    { type: 'image', src: '/assets/received_1008447620525748.jpeg' },
    { type: 'image', src: '/assets/received_1015112910024798.jpeg' },
    { type: 'image', src: '/assets/received_1019116723158747.jpeg' },
    { type: 'image', src: '/assets/received_1027058902107574.jpeg' },
    { type: 'image', src: '/assets/received_1058480632290319.jpeg' },
    { type: 'image', src: '/assets/received_1069799191166156.jpeg' },
    { type: 'image', src: '/assets/received_1123910965365106.jpeg' },
    { type: 'image', src: '/assets/received_1143138663651027.jpeg' },
    { type: 'image', src: '/assets/received_1143570160087792.jpeg' },
    { type: 'image', src: '/assets/received_1146622886409198.jpeg' },
    { type: 'image', src: '/assets/received_1202903401053938.jpeg' },
    { type: 'image', src: '/assets/received_1213479519658046.jpeg' },
    { type: 'image', src: '/assets/received_1214423909566496.jpeg' },
    { type: 'image', src: '/assets/received_1411251812871770.jpeg' },
    { type: 'image', src: '/assets/received_1515043302553812.jpeg' },
    { type: 'image', src: '/assets/received_1525355651675929.jpeg' },
    { type: 'image', src: '/assets/received_1533633784028354.jpeg' },
    { type: 'image', src: '/assets/received_1538960066654855.jpeg' },
    { type: 'image', src: '/assets/received_1622626421905879.jpeg' },
    { type: 'image', src: '/assets/received_1645323426289392.jpeg' },
    { type: 'image', src: '/assets/received_1845526619314225.jpeg' },
    { type: 'image', src: '/assets/received_1986970515092246.jpeg' },
    { type: 'image', src: '/assets/received_2183006298732531.jpeg' },
    { type: 'image', src: '/assets/received_2846423995515689.jpeg' },
    { type: 'image', src: '/assets/received_3041320896007703.jpeg' },
    { type: 'image', src: '/assets/received_6598818500243000.jpeg' },
    { type: 'image', src: '/assets/received_8083767481679482.jpeg' },
];

var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");

function disableScroll() {
    document.body.style.overflow = 'hidden';
}

function enableScroll() {
    document.body.style.overflow = 'auto';
}

function openModal(src) {
    modal.style.display = "flex";
    modalImg.src = src;
    disableScroll();
}

function closeModal() {
    modal.style.display = "none";
    enableScroll();
}

function addAllMedia() {
    const fileContainer = document.querySelector('.file-container');
    mediaFiles.forEach(file => {
        const fileDiv = document.createElement('div');
        fileDiv.className = 'file';

        if (file.type === 'video') {
            const video = document.createElement('video');
            video.controls = true;
            const source = document.createElement('source');
            source.src = file.src;
            source.type = 'video/mp4';
            video.appendChild(source);
            fileDiv.appendChild(video);
        } else if (file.type === 'image') {
            const img = document.createElement('img');
            img.src = file.src;
            img.alt = '';
            fileDiv.appendChild(img);

            img.onclick = function() {
                openModal(file.src);
            }
        }

        fileContainer.appendChild(fileDiv);
    });
}

var span = document.getElementsByClassName("close")[0];

span.onclick = closeModal;

window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}

modal.addEventListener('touchstart', function(e) {
    if (e.target === modal) {
        closeModal();
    }
});

// Call this function to add all media when the page loads
document.addEventListener('DOMContentLoaded', addAllMedia);