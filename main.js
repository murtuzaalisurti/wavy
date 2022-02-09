
function wavy(element, words, options) {
    
    const defaults = {
        color: 'black',
        fontSize: '1rem',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        transform: 'scale(1.5)'
    }

    function setOptions(type){
        return (options !== undefined) ? ((Object.keys(options).length !== 0) ? (options[type] !== undefined ? options[type] : defaults[type]) : defaults[type]) : defaults[type];
    }

    element.style = ` 
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content; 
    -webkit-transform: ${setOptions('transform')};
    transform: ${setOptions('transform')};
    font-family: ${setOptions('fontFamily')};
    font-size: ${setOptions('fontSize')};
    `;

    const skills_name = words.words;
    let iteration = 1;
    let array_of_skills_splitted = skills_name.map((skill) => {
        return skill.split("");
    })
    
    let array_of_final_html_string = array_of_skills_splitted.map((a_skill) => {
        let array_of_html_of_letter = a_skill.map((letter) => {
            if(letter == " "){
                return `<span>&nbsp;<span>`;
            }
            return `<span>${letter}</span>`;
        })
        return array_of_html_of_letter.join("");
    })
        
    let text_string = element;

    text_string.innerHTML = array_of_final_html_string[0];
    function text_animate() {
        text_string.childNodes.forEach((child) => {
            child.style = `
            display: inline-block;
            opacity: 0;
            transform: translateY(10px);
            color: ${setOptions('color')};
            `;
        })

        let spans = element.childNodes; // document.querySelectorAll(".class span");
    
        for (let i = 0; i < spans.length; i++) {
            let word_length = spans.length;
            let zoom_in = text_string.animate([
                {
                    transform: `${setOptions('transform')}` // default = `scale(${Number(1.5)})`
                },
                {
                    transform: `scale(${Number(1)})`
                }
            ], {
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
                        span.style = `opacity: 0;`;
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
        if(iteration == skills_name.length){
            iteration = 1;
        } else {
            iteration++;
        }
    }
    
    text_animate();
}

/* --use--

wavy(
    document.querySelector(".description"), 
    {words: ["Accenture", "Instagram", "Wordle", "Ginger"]},
    {color: 'green', fontSize: '2rem', fontFamily: 'Poppins, sans-serif', transform: 'scale(1.8)'}
); 

*/