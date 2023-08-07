function keyHasBeenClicked(){
    let textAreaContent = document.querySelector('textArea');
    let charCount = document.querySelector('.charCount')
    charCount.innerHTML = String(textAreaContent.value).length;
    let charLimit = 200;
    let charLimitElement = document.querySelector('.charLimitSpan');
    charLimitElement.innerHTML = charLimit-textAreaContent.value.length;

    let wordCount = document.querySelector('.wordCount');
    let wordsArray = String(textAreaContent.value).split(' ');
    wordCount.innerHTML = wordsArray.length

    if(textAreaContent.value.length>200){
        textAreaContent.value = String(textAreaContent.value).substring(0,charLimit)
    }
}

document.querySelector('.clearButton').addEventListener('click',()=>{
    document.querySelector('textArea').value=''
    document.querySelector('.charCount').innerHTML = 0;
    document.querySelector('.wordCOunt').innerHTML = 0;
})