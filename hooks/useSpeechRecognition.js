
import { useState } from 'react';

export default function useSpeechRecognition(onResult) {
  const [listening, setListening] = useState(false);

  const startListening = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Speech Recognition not supported in this browser.');
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setListening(true);

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript.trim();
      onResult(speechResult);
    };

    recognition.onerror = (event) => {
      console.error('Speech Recognition Error', event);
    };

    recognition.onend = () => setListening(false);

    recognition.start();
  };

  return { startListening, listening };
}
