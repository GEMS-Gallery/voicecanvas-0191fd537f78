const textInput = document.getElementById("textInput");
const convertBtn = document.getElementById("convertBtn");
const audioPlayer = document.getElementById("audioPlayer");

// Simulated ElevenLabs API call
async function simulateTextToSpeech(text) {
  // This is a placeholder function that simulates the API call
  // In a real implementation, this would make an actual API request
  console.log("Simulating text-to-speech conversion:", text);
  return new Promise((resolve) => {
    setTimeout(() => {
      // Return a dummy audio URL
      resolve("data:audio/mp3;base64,SGVsbG8sIHRoaXMgaXMgYSBkdW1teSBhdWRpbyBmaWxlLg==");
    }, 1000);
  });
}

convertBtn.addEventListener("click", async () => {
  const text = textInput.value;
  if (text.trim() === "") {
    alert("Please enter some text.");
    return;
  }

  try {
    const audioUrl = await simulateTextToSpeech(text);
    audioPlayer.src = audioUrl;
  } catch (error) {
    console.error("Error converting text to speech:", error);
    alert("An error occurred while converting text to speech. Please try again.");
  }
});
