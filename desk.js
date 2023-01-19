img="";
status="";
objects=[];

function preload()
{
    img=loadImage("Screenshot_20230112_193448.png");
}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();

    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status:detecting objects";
    
}

function modelLoaded()
{
    console.log("modelLoaded");
    status="true";
    objectDetector.detect(img,gotResults);
}

function gotResults(error,results)
{
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}

function draw()
{
    image(img,0,0,640,420);
    if(status !="")
    {
        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML="status : objects detected";
            fill("blue");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
            stroke("blue");
            noFill();
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    
    }
}
}

