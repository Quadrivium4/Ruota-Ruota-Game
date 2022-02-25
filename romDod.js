
document.addEventListener('keydown', (event) => {
    up();
});
function up(){
    let t = /[0-9]/;
    let m = document.getElementById("char").style.marginTop.split("");
    m = m.filter((i) => t.test(i));
    m = parseInt(m.join(""),10)
    if(m >59){
    let i = 60;
    let d = 0;
    let i1 = 0.4;
    let x = setInterval(u,1);
    function u(){
        if(i>= 60 && d== 1){
            i = 60;
            i1 = 0.4;
            d=0;
            clearInterval(x);
            document.getElementById("char").style.marginTop = i+"vh";
        }
        else if(i>40 && d== 0){
            i-=i1;
            i1-=0.004;
            document.getElementById("char").style.marginTop = i+"vh";
        }
        else if(i < 60){
            i+=i1;
            i1+=0.004;
            d= 1;
            document.getElementById("char").style.marginTop = i+"vh";
        }
        
    }
}
}

function begin(){
    document.getElementById("start-page").style.display = "flex";
    document.getElementById("main-page").style.display = "none";
       
    }

function start(){
    document.getElementById("start-page").style.display = "none";
    document.getElementById("main-page").style.display = "flex";
    let meters = 0;
    let tree = 300;
    let vel = 0.1;
    let n = setInterval(function(){
    let t = /[0-9]/;
    let car = tree - 100;
    let house = tree- 200;
    let m = document.getElementById("char").style.marginTop.split("");
    m = m.filter((i) => t.test(m));
    m = parseInt(m.join(""),10);
    if(parseInt(meters,10) > 349){
        document.getElementById("start-page").style.display = "none";
        document.getElementById("main-page").style.display = "none";
        document.getElementById("finish-page").style.display = "flex"
    }
    else if(check(tree,m) == "false"||check(car,m) == "false" || check(house,m) == "false"){
        clearInterval(n);
        document.getElementById("title").innerHTML = "YOU LOSE";
    }
    
    else if(check(tree,m) == "reset" ){
        tree = 300;
        document.getElementsByClassName("tree")[0].style.marginLeft = tree+"vw";
        document.getElementsByClassName("car")[0].style.marginLeft = car+"vw";
        document.getElementsByClassName("house")[0].style.marginLeft = house+"vw";
        tree-=vel;
        vel += 0.00005; 
    }
    else{
        document.getElementsByClassName("tree")[0].style.marginLeft = tree+"vw";
        document.getElementsByClassName("car")[0].style.marginLeft = car+"vw";
        document.getElementsByClassName("house")[0].style.marginLeft = house+"vw";
        tree-=vel;
        vel += 0.00005; 
    }
     
    meters+= vel/10;
    document.getElementById("box-but").innerHTML = `<h1>`+parseInt(meters,10);+`</h1>`
},1

)
}
function restart(){
    localStorage.setItem("count",1)
    location.reload()
    start()
}
function check(x,m){
    if(x >= 2 ){
        return "true";
    }
    else if(x < 2 && x> 0){
        if(m <50){
            return "true"
            
        }else{
            return "false"
        }
    }
    
    else if(x<= 0){
        return "reset"
    }
}

/*
if(i >= 5 && c >= 5||i >= 5 && c <= 0){
        document.getElementsByClassName("tree")[0].style.marginLeft = i+"vw";
        document.getElementsByClassName("car")[0].style.marginLeft = c+"vw";
        i-=vel;
        vel += 0.00005;
    }
    else if(i < 5&& i>= -10 ){
        if(m <50){
            i-=vel;
            document.getElementsByClassName("tree")[0].style.marginLeft = i+"vw";
            document.getElementsByClassName("car")[0].style.marginLeft = c+"vw";
            vel += 0.00001;
            
        }else{
            document.getElementById("body").innerHTML ="<h1 >YOU LOSE</h1>";
        }
    }
    else if( c< 5&& c >=-10){
        if(m <55){
            i-=vel;
            document.getElementsByClassName("tree")[0].style.marginLeft = i+"vw";
            document.getElementsByClassName("car")[0].style.marginLeft = c+"vw";
            vel += 0.00001;
            
        }else{
            document.getElementById("body").innerHTML ="<h1 >YOU LOSE</h1>";
        }
    }
    else if(i< -10){
        i = 200;
        document.getElementsByClassName("tree")[0].style.marginLeft = i+"vw";
        document.getElementsByClassName("car")[0].style.marginLeft = c+"vw";
        i-=vel;
        vel += 0.00005; 
    }
*/