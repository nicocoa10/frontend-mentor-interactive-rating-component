// get the number buttons\
const ratingButtons = document.querySelectorAll('.rating')

console.log(ratingButtons)

//tracking variable for the rating the user chooses
let ratingSelected = 0;

ratingButtons.forEach((button)=> {

    button.addEventListener('click',(e) => {
        //reset buttons to default color
        ratingButtons.forEach((button)=>{
            if (button.classList.contains('selected')){
                button.classList.remove('selected')
            }
        })
        ratingSelected=e.target.textContent
        e.target.classList.add('selected')
    })
})


// get the submit button

const submitButton = document.querySelector('.submit')

submitButton.addEventListener('click', () => {

    const cardContainer = document.querySelector('.card-container')
    cardContainer.classList.add('hide')

    const thanksContainer = document.querySelector('.thankyou-container')
    thanksContainer.classList.remove('hide')
    const selectionSpan = document.querySelector('.selection')
    selectionSpan.textContent = ratingSelected

})
