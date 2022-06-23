Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 100
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function (data_url) {
        document.getElementById("result").innerHTML = '<img id="ci" src="' + data_url + '">';
    });
}

console.log('ml5 version:', ml5.version);
var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/W88QSGUrE/model.json', modelLoaded);

function modelLoaded() {
    console.log("Hack has been loaded");
}

function check() {
    img = document.getElementById("ci");
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.error(error);
    } 
    else {
        console.log(results);
        document.getElementById("ron").innerHTML = results[0].label;
        document.getElementById("roa").innerHTML = Math.floor(results[0].confidence * 100) + "%";
    }
}