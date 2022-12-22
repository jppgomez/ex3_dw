
function design_skills_bar(n){
    let bar = document.querySelector(".design_skills_bar");
    let selector = document.querySelector(".design_skills_image_" + n);
    selector.classList.remove("hide");
    if(n==0 && bar.style.width != '70%'){
        bar.style.width = '70%';
    }
    else if(n==1 && bar.style.width != '83%'){
        bar.style.width = '83%';
    }
    else if(n==2 && bar.style.width != '90%'){
        bar.style.width = '90%';
    }
    else if(n==3 && bar.style.width != '86%'){
        bar.style.width = '86%';
    }
    else if(n==4 && bar.style.width != '55%'){
        bar.style.width = '55%';
    }
    else if(n==5 && bar.style.width != '65%'){
        bar.style.width = '65%';
    }
    else if(n==6 && bar.style.width != '60%'){
        bar.style.width = '60%';
    }
    else {
        for(let a=0; a<7; a++){
            document.querySelector(".design_skills_image_" + a).classList.add("hide");
        }
        bar.style.width = '0%';
    }

}

function prog_skills_bar(n){
    let bar = document.querySelector(".prog_skills_bar");
    let selector = document.querySelector(".prog_skills_image_" + n);
    selector.classList.remove("hide");

    if(n==0 && bar.style.width != '75%'){
        bar.style.width = '75%';
    }
    else if(n==1 && bar.style.width != '74%'){
        bar.style.width = '74%';
    }
    else if(n==2 && bar.style.width != '70%'){
        bar.style.width = '70%';
    }
    else if(n==3 && bar.style.width != '85%'){
        bar.style.width = '85%';
    }
    else if(n==4 && bar.style.width != '87%'){
        bar.style.width = '87%';
    }
    else {
        for(let a=0; a<5; a++){
            console.log(document.querySelector(".prog_skills_image_" + a));
            document.querySelector(".prog_skills_image_" + a).classList.add("hide");
        }
        bar.style.width = '0%';
    }
    }
