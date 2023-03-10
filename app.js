

document.querySelector('input[type="checkbox"]').addEventListener('click', function (e) {

    alert('thank you for reading our terms of service')
})


const form = document.querySelector('#userInput');
form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    alert('you submitted your first name');
});




let formMemeGenerate = document.querySelector('#meme-form'); //dont need to check for blanks/chrome does
let addressURL = document.querySelector('input[name="URL"]');
console.log("this is a bigTest " + addressURL)
let textTop = document.querySelector('input[name="funnyTextTop"]');
console.log("this is a bigTest2 " + textTop)
let textBottom = document.querySelector('input[name="funnyTextBottom"]');
console.log("this is a bigTest3 " + textBottom)
let memeInSection = document.querySelector('#formContainerOutput');

var counter = 0

formMemeGenerate.addEventListener('submit', function (evt) {
    evt.preventDefault();
    console.log("this is test 2 " + addressURL.value, textTop.value, textBottom.value)
    let newMeme = generateMeme(addressURL.value, textTop.value, textBottom.value);
    alert('Your Meme Is Generating...');
    console.log(newMeme)
    memeInSection.appendChild(newMeme);

    this.reset()

});

function generateMeme(webaddress, top, bottom) {
    counter++
    const meme = document.createElement('div');
    meme.id = 'created div'
    meme.className = 'memeDiv'
    meme.innerHTML = top

    let img = document.createElement('img')
    img.src = webaddress
    meme.appendChild(img)


    //----------------------------------------------------------------
    const memeH1 = document.createElement('h1')
    memeH1.id = 'createdH1'
    memeH1.className = 'memeH1'
    memeH1.innerHTML = bottom
    //
    myArray = [webaddress, top, bottom]
    console.log('this is my array [' + myArray + ' ]')

    meme.appendChild(memeH1)
    //------------------------------------------------------------------

    const createButton = document.createElement('button')
    var buttonID = "deleteButtonID" + counter.toString()
    createButton.id = buttonID

    createButton.className = 'deleteButtonClassName'
    createButton.innerHTML = 'Click Here To Delete Meme'
    createButton.type = 'submit'
    meme.appendChild(createButton)



    //-----------------------------------------------------------------   
    document.body.appendChild(meme)
    const removeTheDiv = document.querySelector("#" + buttonID);

    removeTheDiv.addEventListener('click', function (e) {
        e.target.parentElement.remove();
    })

    return meme

}



const value = document.querySelector("#value")
console.log(value)
const input = document.querySelector("#rangeInput")
console.log(input)
const userSlides = input.value
console.log(userSlides)
let userValue = input.addEventListener("input", (event) => {
    value.textContent = event.target.value

    let finalValue = event.target.value
    console.log(finalValue)

    let finalFinal = parseInt(finalValue) //range is a text, had to convert to number with parseInt
    console.log(finalFinal)

});

const formHappyRange = document.querySelector('#happyRange');
formHappyRange.addEventListener('click', function (evt1) {
    evt1.preventDefault();
    alert('Click "Submit Feedback" to submit your Happiness Score!');
});






