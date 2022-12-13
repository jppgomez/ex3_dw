let container_base = document.querySelector('.about_text_base');
let container_over = document.querySelector('.about_text_over');
fetch('assets/info.txt')
.then(response => response.text())
.then(text => {
    info_array = text.split(" ");
    let i = 0; 
    info_array.forEach(function(words){
        //base text
        let HTML_base_word = '<p class="about_base_text_word" onclick = "changeVisibility('+i+')">'+words+'&#160'+'</p>';
        container_base.innerHTML += HTML_base_word;
        //over text
        let HTML_over_word = '<p class="about_over_text_word hide" id="about_over_text_word_'+i+'" onclick = "changeVisibility('+i+')">'+words+'&#160'+'</p>';
        container_over.innerHTML += HTML_over_word;
        i++;  
    },
    //container.innerHTML = HTML_array
    );
});

 function changeVisibility(word){
    let id = "about_over_text_word_" + word;
    let elem = document.querySelector('#'+id);
    console.log(word);
    elem.classList.add("puff-out-center");
    container_over.classList.remove("hide");
    if(elem.classList.contains("puff-in-center")){
        elem.classList.remove("puff-in-center");
        elem.classList.add("puff-out-center");
    }
    else{
        elem.classList.add("puff-in-center");
        elem.classList.remove("puff-out-center");
    }
    elem.classList.toggle("hide");
    };
