

export function speak(text, type ) {
  // Lấy danh sách kiểu đọc ex: en-US
  let voices = []
  voices = synth.getVoices()
  // Check
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = getVoices;
  }
  // Check đang đọc một sync khác
  if (synth.speaking) {
    console.error("already speaking...")
    return;
  }
  if (text !== '' ) {
    //Get speak test
    const speakText = new SpeechSynthesisUtterance(text)
    speakText.onend = e => {
      console.log('Done speaking...')
    }
    speakText.onerror = e => {
      console.error('Something went wrong...')
    }
    speakText.voice = voices[4]
    // set pitch and rate
    speakText.volume = 1;
    speakText.rate = 0.8;
    speakText.pitch = 1;
    // Speak  
    synth.speak(speakText)
  }
}
