// Declare shout function
function shout(string) {
     return string.toUpperCase();
  }
  //Declare whisper function
function whisper(string){
    return string.toLowerCase();
}
//Declare logShout function
function logShout(string) {
    console.log(string.toUpperCase());
}
//Declare logWhisper function
function logWhisper(string) {
    console.log(string.toLowerCase());
}
//Declare sayHiToHeadphonedRoommate function
function sayHiToHeadphonedRoommate(string) {
    if(string === "hello")
        return "I can\'t hear you!"
    else if (string === "HELLO") 
        return 'YES INDEED!'
    else (string === "Let\'s have dinner together!") 
        return "I would love to!"

        
    
}
  
  