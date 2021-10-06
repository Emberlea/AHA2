Webcam.set({
    height:300,
    width:350,
    image_format:'png',
    png_quality:99
});
var AF=document.getElementById("alfafa");
Webcam.attach(AF);

function snappic(){
    Webcam.snap(function(data_uri){
        document.getElementById("hay").innerHTML="<image id='fo' src='"+data_uri+"'>";
    });
}

console.log('ml5',ml5.version);
var Al=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/a47CgEEM4/' ,modelLoad);
function modelLoad(){
    console.log("Model Successfully Loaded!")
}
function tellus(){
    a=document.getElementById("image1");
    Al.classify(a,gotit);
}
function gotit(error, result){
    if(error){
        console.log(error);
    }
    if(result){
        console.log(result);
        document.getElementById("who").innerHTML=result[0].label;
        document.getElementById("an").innerHTML=result[0].confidence.toFixed(2);
    }
}