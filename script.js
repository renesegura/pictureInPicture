const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select which media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }

  } catch (error) {
    // catch errors
    console.log('whoops, error here: ', error);
  }
}
button.addEventListener('click', async () => {
  // Disable the button
  button.disabled = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset button, will only happen if await videoElement finishes
  button.disabled = false;
})

// On Load
selectMediaStream();