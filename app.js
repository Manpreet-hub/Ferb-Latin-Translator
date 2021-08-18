var btnTranslate=document.querySelector("#btn-tranlate");
var inputTxt=document.querySelector("#txt-input");
var outputTxt =document.querySelector("#txt-output");
 
// var serverUrl="https://api.funtranslations.com/translate/yoda.json";
var serverUrl="https://api.funtranslations.com/translate/ferb-latin.json";
function getTranslationURL(text){
    return serverUrl+ "?"+ "text=" +text
}

function errorHandler(error){
    console.log("error occurded",error);
    alert("Something wrong with server ! Try after some time")
}

btnTranslate.addEventListener("click",function clickEventHandler(){
    var inputText=inputTxt.value;
    
    fetch(getTranslationURL(inputText))
    .then(response=> response.json())
    .then(json=>{
        var translatedText=json.contents.translated;
        outputTxt.innerText=translatedText; //taking output
        })
    .catch(errorHandler)
});