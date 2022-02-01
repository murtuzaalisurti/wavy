
function wavy(element, words){
    console.log(element);
    console.log(words.words);
    const skills_name = words.words;
    let iteration = 1;
    let array_of_skills_splitted = skills_name.map((skill) => {
        return skill.split("");
    })
    console.log("Array containing skills splitted into letters => ", array_of_skills_splitted);
    
    let array_of_final_html_string = array_of_skills_splitted.map((a_skill) => {
        console.log("\nSingle skill splitted into letters => ", a_skill);
        let array_of_html_of_letter = a_skill.map((letter) => {
            if(letter == " "){
                return `<span>&nbsp;<span>`;
            }
            return `<span>${letter}</span>`;
        })
        console.log("\nArray containing letters with <span> => ", array_of_html_of_letter);
        return array_of_html_of_letter.join("");
    })
    
    console.log("Resultant HTML string => ", array_of_final_html_string);
    
    // let text_string = document.querySelector(".desc_text");
    let text_string = element;

    text_string.innerHTML = array_of_final_html_string[0];
    function text_animate() {
        console.log(element.childNodes);
        let spans = element.childNodes;
        // let spans = document.querySelectorAll(".desc_text span");
    
        for (let i = 0; i < spans.length; i++) {
            let word_length = spans.length;
            let zoom_in = text_string.animate([
                {
                    transform: `scale(${Number(1.5)})`
                },
                {
                    transform: `scale(${Number(1)})`
                }
            ], {
                // delay: 300,
                delay: `${Number((word_length/3)*100)}`,
                duration: 400,
                iterations: 1,
                easing: `ease-in-out`,
                fill: `both`
            });
            let animation = spans[i].animate([
                {
                    opacity: 0,
                    transform: `translateY(${Number(10)}px)`
                },
                {
                    opacity: 1,
                    transform: `translateY(${Number(0)}px)`
                }
            ], {
                delay: ((i + 2) / 2) * 100,
                duration: (i + 0.1) * 10,
                easing: `ease-out`,
                iterations: 1,
                fill: `forwards`
            })
    
            if (i == (spans.length - 1)) {
                setTimeout(() => {
                    spans.forEach((span) => {
                        span.style = `opacity: 0`;
                    })
    
                    for(let k = 0; k < skills_name.length; k++){
                        if(iteration == (k+1)){
                            text_string.innerHTML = array_of_final_html_string[k];
                            break;
                        }
                    }
    
                    text_animate();
                }, 2000)
            }
        }
        console.log(iteration)
        if(iteration == skills_name.length){
            iteration = 1;
        } else {
            iteration++;
        }
    }
    
    text_animate();
}

// wavy(document.querySelector(".description"), {words: ["Accenture", "Instagram", "Wordle", "Ginger"]});