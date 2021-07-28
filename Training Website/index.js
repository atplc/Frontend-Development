var per = ["images/per1.jpg", "images/per2.jpg", "images/per3.jpg"];
var i = 0;

var para = ["Really nice experience.Praesent lacinia, leo eget consectetur hendrerit, neque sem tincidunt felis, vel aliquam diam mi vel massa. Donec ut nisi non enim hendrerit scelerisque.", "Lots of learning.gula. Nulla facilisi. Mauris metus erat, tincidunt eget tellus at, placerat hendrerit eros. Aenean id faucibus est. Nullam elementum dolor risus, ut consequat nisl accumsan non. Etiam viverra elementum diam et facilisis. Morbi id interdum mauris. Donec b", "More problems and challenges to learn.perdiet arcu. Praesent porttitor auctor blandit. Nullam imperdiet luctus malesuada. Phasellus commodo porta molestie. Praesent lacinia, leo eget consectetur hendrerit, neque sem tincidunt felis, vel aliquam diam mi vel massa. Donec ut nisi non enim hendrerit scelerisque."]

function next() {
    i = i + 1;
    if (i == 3) {
        i = 0;
    }
    document.getElementById("person").src = per[i];
    document.getElementById("feedbackpara").innerHTML = para[i];

}

function prev() {
    i = i - 1;
    if (i < 0) {
        i = 2;
    }
    document.getElementById("person").src = per[i];
    document.getElementById("feedbackpara").text = para[i];

}
