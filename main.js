function setup(){
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
}
function preload(){
    classifier= ml5.imageClassifier('DoodleNet');
}
function clearcanvas(){
    background("white");

}
function ClassifyCanvas(){
    classifier.classify(canvas,gotresults);
}