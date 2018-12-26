var sec = ['.about','.home'];
var page = [`
<div class="home">
<div class="body">&lt;body&gt;</div>
    <div class="main-page">
        <div class="text-content">
            <h1>
                <span class="show">H</span>
                <span class="show">i</span>
                <span class="show">,</span> <br>
                <span class="show">I</span>
                <span class="show">&apos;</span>
                <span class="show">m</span> &nbsp; 
                <span class="show logo" style="background: transparent">A</span>
                <span class="show">K</span>
                <span class="show">S</span>
                <span class="show">H</span>
                <span class="show">I</span>
                <span class="show">T</span> <br>
                <span class="show">w</span>
                <span class="show">e</span>
                <span class="show">b</span> &nbsp;
                <span class="show">d</span>
                <span class="show">e</span>
                <span class="show">v</span>
                <span class="show">e</span>
                <span class="show">l</span>
                <span class="show">o</span>
                <span class="show">p</span>
                <span class="show">e</span>
                <span class="show">r</span>
                <span class="show">.</span>
            </h1>
            <div class="techs">Front End Developer / HTML / CSS / JS</div>
            <a href="#" class="contact">Contact me</a>
        </div>
    </div>
    <div class="extra"></div>
    <div class="body" style="top:90%">&lt;/body&gt;</div>
</div>
`,`<div class="body">&lt;body&gt;</div>
<div class="about">
    <h1>
        <span class="show">A</span>
        <span class="show">B</span>
        <span class="show">O</span>
        <span class="show">U</span>
        <span class="show">T</span>&nbsp;
        <span class="show">M</span>
        <span class="show">e</span>
    </h1>
    <div class="info">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus repellat
            quod a dignissimos maiores facere velit </p><p> expedita, inventore dolorem in possimus
            sequi deserunt debitis ipsum corporis totam alias ipsa obcaecati!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p> <p> Ipsa sunt totam maiores 
            sit qui distinctio facere debitis sapiente in aut harum voluptate eligendi repudiandae
            est doloremque, cum, enim omnis iusto!<p> Ipsa sunt totam maiores 
            sit qui distinctio facere debitis sapiente in aut harum voluptate eligendi repudiandae
            est doloremque, cum, enim omnis iusto! <p> Ipsa sunt totam maiores 
            sit qui distinctio facere debitis sapiente in aut harum voluptate eligendi repudiandae
            t doloremque, cum, enim omnis iusto!
        </p>
    </div>
</div>
<div class="body" style="top:90%">&lt;body&gt;</div>`]
showUp(document.querySelectorAll('.show'));
active = 0
function showUp(text){
    for(i=0;i<text.length;i++){
        text[i].style.animation = "rubberBand .6s ease "+i*.1+'s forwards';
    }    
    setTimeout(function(){    
        
        for(i=0;i<text.length;i++){
            text[i].style.opacity = "1";
            text[i].style.animation = '';
        }
    },2510 );
}
$('.sidebar-elements').click(function(){
    ind = $(this).index()
    if($(this).index()!=active) {
        console.log(document.querySelectorAll('.sidebar-elements')[active])
        document.querySelectorAll('.sidebar-elements')[active].setAttribute('class','sidebar-elements')
        console.log(document.querySelectorAll('.sidebar-elements')[0])
        console.log(document.querySelectorAll('.sidebar-elements')[ind])
        document.querySelectorAll('.sidebar-elements')[ind].setAttribute('class','sidebar-elements active')
        for(i=0;i<2;i++)
            $(sec[i]).hide();
        let text = `
        <div class ="container">
            <div class="logo" style="background:transparent">A</div>
            <div class="thinking">Akshit is thinking....</div>
            <div class="progress"><div class="move"></div></div>
        </div> 
        `;
        active = $(this).index();
        $('.body-wrapper').html(text)
            setTimeout(function(){
                $('.body-wrapper').html(page[ind]);
                text = document.querySelectorAll(".show");
                showUp(text);
            }, 1700);
    }
})


