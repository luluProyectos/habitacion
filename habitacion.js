img="";
var status_modelo="";

function preload(){
    img=loadImage("recamara.png");
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();

    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Estatus: detectando objetos"
}

function modelLoaded(){
    console.log("Modelo cargado");
    status_modelo= true;
    objectDetector.detect(img, gotResult);
}

function draw() {
    image(img, 0, 0, 640, 420);
    /*fill(255, 0, 0);
    text("Perro", 45, 75);
    noFill();
    stroke(255, 0, 0);
    rect(30, 60, 450, 350 );*/
  }

  function pagina_Principal(){
        window.location="index.html";
  }

  function gotResult(error, results){
    if (error) {
      console.error(error);
    }else{
        console.log(results);
    }
}
