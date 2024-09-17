const textInput = document.getElementById("textInput");
const convertTextBtn = document.getElementById("convertTextBtn");
const textAudioPlayer = document.getElementById("textAudioPlayer");

const audioFileInput = document.getElementById("audioFileInput");
const modelIdInput = document.getElementById("modelIdInput");
const voiceSettingsInput = document.getElementById("voiceSettingsInput");
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
  const audioFile = audioFileInput.files[0];
  const modelId = modelIdInput.value;
  const voiceSettings = voiceSettingsInput.value;

  if (!audioFile || !modelId || !voiceSettings) {
    alert("Please provide all required inputs.");
    return;
  }

  const form = new FormData();
  form.append("model_id", modelId);
  form.append("voice_settings", voiceSettings);
  form.append("seed", "123");
  form.append("audio", audioFile);

  const options = {
    method: 'POST',
    headers: {
      'xi-api-key': 'YOUR_API_KEY_HERE' // Replace with your actual API key
    },
    body: form
  };

  try {
    const response = await fetch('https://api.elevenlabs.io/v1/speech-to-speech/voice_id', options);
    const audioBlob = await response.blob();
    const audioUrl = URL.createObjectURL(audioBlob);
    speechAudioPlayer.src = audioUrl;
  } catch (error) {
    console.error("Error converting speech to speech:", error);
    alert("An error occurred while converting speech to speech. Please try again.");
  }
});
