import { backend } from "declarations/backend";

const textInput = document.getElementById("textInput");
const convertBtn = document.getElementById("convertBtn");
const audioPlayer = document.getElementById("audioPlayer");

convertBtn.addEventListener("click", async () => {
  const text = textInput.value;
  if (text.trim() === "") {
    alert("Please enter some text.");
    return;
  }

  try {
    const hexEncodedText = await backend.textToSpeech(text);
    // Note: This won't produce valid audio data, it's just a placeholder
    const audioSrc = `data:audio/wav;base64,${hexEncodedText}`;
    audioPlayer.src = audioSrc;
  } catch (error) {
    console.error("Error converting text to speech:", error);
    alert("An error occurred while converting text to speech. Please try again.");
  }
});
