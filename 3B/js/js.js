var text = document.querySelectorAll(".show");
var sec = ['.about','.home'];
console.log(text);
for(i=0;i<text.length;i++){
    text[i].style.animation = "rubberBand .6s ease "+i*.1+'s forwards';
    // text[i].style.animation = "";
}
setTimeout(function(){    
    console.log('Hey');
    for(i=0;i<text.length;i++){
        text[i].style.opacity = "1";
        text[i].style.animation = '';
    }

},2510 );
$('.sidebar-elements').click(function(){
    for(i=0;i<2;i++)
        $(sec[i]).hide();
    let text = `
    <div class ="container">
        <div class="logo" style="background:transparent">A</div>
        <div class="thinking">Akshit is thinking....</div>
        <div class="progress"><div class="move"></div></div>
    </div> 
    `;
    console.log($(".active"));
    if(this==$(".active")) console.log('same');
    $('.body-wrapper').html(text);
    me = this;
    setTimeout(function(){
}, 2500)
})


