function setup() {
    video=createCapture(VIDEO)
    video.size(500,500)

    poseNet = ml5.posenet(video, ModelLoaded)
    poseNet.on('pose', gotPoses)
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results)
    }
}