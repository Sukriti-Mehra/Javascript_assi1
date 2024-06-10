// Arrays for each button
const nouns1 = ["turkey", "mom", "dog", "teacher", "elephant", "cat"];
const verbs = ["ate", "danced", "saw", "kissed", "liked"];
const adjectives = ["sad", "funny", "scary", "goofy", "slimy"];
const nouns2 = ["bird", "fish", "goat", "monkey", "frog"];
const places = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Variables to store the selected words
let noun1 = "";
let verb = "";
let adjective = "";
let noun2 = "";
let place = "";

// Function to generate a random story
function generateStory() {
    noun1 = getRandomWord(nouns1);
    verb = getRandomWord(verbs);
    adjective = getRandomWord(adjectives);
    noun2 = getRandomWord(nouns2);
    place = getRandomWord(places);

    const story = `${noun1} ${verb} with a ${adjective} ${noun2} ${place}.`;
    document.getElementById("story-output").innerHTML = story;
}

// Function to reset the story
function resetStory() {
    noun1 = "";
    verb = "";
    adjective = "";
    noun2 = "";
    place = "";
    document.getElementById("story-output").innerHTML = "";
}

// Function to generate a random word from an array
function getRandomWord(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Text-to-speech function
function textToSpeak(text) {
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}

// Event listeners for the buttons
document.getElementById("noun1-btn").addEventListener("click", () => {
    noun1 = getRandomWord(nouns1);
    console.log(`Noun 1: ${noun1}`);
});

document.getElementById("verb-btn").addEventListener("click", () => {
    verb = getRandomWord(verbs);
    console.log(`Verb: ${verb}`);
});

document.getElementById("adjective-btn").addEventListener("click", () => {
    adjective = getRandomWord(adjectives);
    console.log(`Adjective: ${adjective}`);
});

document.getElementById("noun2-btn").addEventListener("click", () => {
    noun2 = getRandomWord(nouns2);
    console.log(`Noun 2: ${noun2}`);
});

document.getElementById("place-btn").addEventListener("click", () => {
    place = getRandomWord(places);
    console.log(`Place: ${place}`);
});

document.getElementById("generate-btn").addEventListener("click", generateStory);

document.getElementById("random-btn").addEventListener("click", () => {
    generateStory();
});

document.getElementById("reset-btn").addEventListener("click", resetStory);

document.getElementById("speak-btn").addEventListener("click", () => {
    const story = document.getElementById("story-output").innerHTML;
    textToSpeak(story);
});