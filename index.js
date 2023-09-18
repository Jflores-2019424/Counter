const text = document.querySelectorAll(".text")

text.forEach(text =>{
    text.innerText = '0'

    const updateText = () =>{
        const target = +text.getAttribute('data-target')
        const res = +text.innerText

        const sum = target / 200

        if(res < target) {
            text.innerText = `${Math.ceil(res+sum)}`
            setTimeout(updateText, 1)
        }else{
            text.innerText = target
        }
    }

    updateText()
})