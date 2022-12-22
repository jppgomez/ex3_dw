window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  
document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
          "body").style.visibility = "hidden";
        document.querySelector(
          "#loader").style.visibility = "visible";
          document.querySelector(
            "body").style.overflowY = "hidden";  
    } else {
        document.querySelector(
          "#loader").style.display = "none";
        document.querySelector(
          "body").style.visibility = "visible";
        document.querySelector(
            "body").style.overflowY = "initial"; 
    }
};

function design_skills_bar(n){
    let bar = document.querySelector(".design_skills_bar");
    let selector = document.querySelector(".design_skills_image_" + n);
    for(let a=0; a<7; a++){
        document.querySelector(".design_skills_image_" + a).classList.add("hide");
    }
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
    for(let a=0; a<5; a++){
        document.querySelector(".prog_skills_image_" + a).classList.add("hide");
    }
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
            document.querySelector(".prog_skills_image_" + a).classList.add("hide");
        }
        bar.style.width = '0%';
    }
    }

    function education_bar(n){
        let bar = document.querySelector(".education_bar");
        let selector = document.querySelector(".education_image_" + n);
        for(let a=0; a<3; a++){
            document.querySelector(".education_image_" + a).classList.add("hide");
        }
        selector.classList.remove("hide");
    
        let text = document.querySelector(".education_text");
        text.innerText = "";
        if(n==0 && bar.style.width != '2%'){
            bar.style.width = '2%';
            text.innerText = "Ciências e Tecnologias na Escola Secundária José Loureiro Botas";
        }
        else if(n==1 && bar.style.width != '35%'){
            bar.style.width = '35%';
            text.innerText = "Licenciatura em Design e Multimédia na Faculdade de Ciências e Tecnologia da Universidade de Coimbra";
        }
        else if(n==2 && bar.style.width != '70%'){
            bar.style.width = '70%';
            text.innerText = "Mestrado em Design e Multimédia na Faculdade de Ciências e Tecnologia da Universidade de Coimbra";
        }
        else {
            for(let a=0; a<3; a++){
                document.querySelector(".education_image_" + a).classList.add("hide");
            }
            bar.style.width = '0%';
        }

        }