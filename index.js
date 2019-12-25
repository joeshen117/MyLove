window.onload=function(){
    showSelector(0);
}
function process(){
    showSelector(1)
    setTimeout(function(){
        showSelector(2);
        nextProcess()}, 1000);
}

function nextProcess(){
    setTimeout(function(){
        showSelector(3);
    },3000)
}

function showSelector(index) {
    var sections = document.getElementsByClassName("section");
    for (i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
    sections[index].style.display = "block";
}


function nextNext(){
    showSelector(4);
    document.body.style="background-image:url('iou1.jpg');background-repeat:repeat;"
}

function final(){
    alert('亲爱的福小姐，恭喜您已经成为本王的女朋友，从今天开始享受VVVVIP服务！')
}