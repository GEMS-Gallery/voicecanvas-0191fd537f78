const textInput = document.getElementById("textInput");
const convertTextBtn = document.getElementById("convertTextBtn");
const textAudioPlayer = document.getElementById("textAudioPlayer");

const speechInput = document.getElementById("speechInput");
const convertSpeechBtn = document.getElementById("convertSpeechBtn");
const speechAudioPlayer = document.getElementById("speechAudioPlayer");

// Simulated ElevenLabs API call for text-to-speech
async function simulateTextToSpeech(text) {
  console.log("Simulating text-to-speech conversion:", text);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("data:audio/mp3;base64,SGVsbG8sIHRoaXMgaXMgYSBkdW1teSBhdWRpbyBmaWxlLg==");
    }, 1000);
  });
}

// Simulated ElevenLabs API call for speech-to-speech
async function simulateSpeechToSpeech(text) {
  console.log("Simulating speech-to-speech conversion:", text);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("data:audio/mp3;base64,SGVsbG8sIHRoaXMgaXMgYW5vdGhlciBkdW1teSBhdWRpbyBmaWxlLg==");
    }, 1000);
  });
}

convertTextBtn.addEventListener("click", async () => {
  const text = textInput.value;
  if (text.trim() === "") {
    alert("Please enter some text.");
    return;
  }

  try {
    const audioUrl = await simulateTextToSpeech(text);
    textAudioPlayer.src = audioUrl;
  } catch (error) {
    console.error("Error converting text to speech:", error);
    alert("An error occurred while converting text to speech. Please try again.");
  }
});

convertSpeechBtn.addEventListener("click", async () => {
  const text = speechInput.value;
  if (text.trim() === "") {
    alert("Please enter some text to simulate speech input.");
    return;
  }

  try {
    const audioUrl = await simulateSpeechToSpeech(text);
    speechAudioPlayer.src = audioUrl;
  } catch (error) {
    console.error("Error converting speech to speech:", error);
    alert("An error occurred while converting speech to speech. Please try again.");
  }
});
