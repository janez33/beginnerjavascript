window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
function start() {
    // see if their browser supports this
    if (!("SpeechRecognition" in window)) console.log("Sorry your browser does not support speech recognition.");
    // it does work
    console.log("Starting...");
    // make a new speech recognition
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.onresult = handleResult;
    recognition.start();
    console.log(recognition);
}
start();

//# sourceMappingURL=index.24a7de50.js.map
