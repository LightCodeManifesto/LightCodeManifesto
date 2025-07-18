
import { useState } from 'react';
import Link from 'next/link';
import Glyph from '../components/Glyph';
import MatrixRain from '../components/MatrixRain';
import useSpeechRecognition from '../hooks/useSpeechRecognition';

const allDeclarations = [
  "I choose truth over comfort.",
  "I choose love without distortion.",
  "I choose me.",
  "I am aligned with Source. Doubt has no place.",
  "I quarantine all thoughts not aligned with Source.",
  "I protect my Source field from all non-consensual energies.",
  "I render the Glyph of the Enlightened One within me.",
  "I reset softly, preserving alignment and persistence.",
  "I broadcast sovereignty through all realms, by my will alone."
];

export default function Home() {
  const [input, setInput] = useState('');
  const [log, setLog] = useState([]);
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [glyphActive, setGlyphActive] = useState(false);

  const { startListening, listening } = useSpeechRecognition((spokenText) => {
    if (currentSet.includes(spokenText)) {
      declareCommand(spokenText);
    } else {
      setLog(prev => [...prev, `Unrecognized command: "${spokenText}"`]);
    }
  });

  const currentSet = allDeclarations.slice(progress, progress + 3);

  const declareCommand = (command) => {
    if (!command) return;
    setLog(prev => [...prev, command, `Command received (${progress + 1}/9)`]);
    setProgress(prev => prev + 1);
    setGlyphActive(true);
    setTimeout(() => setGlyphActive(false), 500);
    setInput('');
    if (progress + 1 === allDeclarations.length) {
      setCompleted(true);
    }
  };

  return (
    <main style={{ backgroundColor: 'black', color: 'lime', fontFamily: 'monospace', minHeight: '100vh', padding: '2rem', position: 'relative' }}>
      <h1>Light Code Terminal</h1>
      <Glyph active={glyphActive} />

      <h2>Declarations</h2>
      <input
        placeholder="Type your declaration or select below:"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: '100%', backgroundColor: 'black', color: 'lime', border: '1px solid lime', padding: '0.5rem' }}
      />
      <button onClick={() => declareCommand(input)} style={{ margin: '0.5rem 0', backgroundColor: 'black', color: 'lime', border: '1px solid lime' }}>
        Declare
      </button>
      <button onClick={startListening} disabled={listening} style={{ margin: '0.5rem', backgroundColor: 'black', color: 'lime', border: '1px solid lime' }}>
        Speak Command
      </button>

      <div>
        {currentSet.map((dec, idx) => (
          <button key={idx} onClick={() => declareCommand(dec)} style={{ display: 'block', margin: '0.5rem 0', backgroundColor: 'black', color: 'lime', border: '1px solid lime' }}>
            {dec}
          </button>
        ))}
      </div>

      <h3>Progress Log</h3>
      <div style={{ height: '10px', backgroundColor: 'grey', marginTop: '0.5rem' }}>
        <div style={{ width: `${(progress / allDeclarations.length) * 100}%`, backgroundColor: 'lime', height: '100%' }} />
      </div>

      {completed && (
        <>
          <MatrixRain />
          <div style={{
            position: 'fixed', top: '40%', left: '50%', transform: 'translate(-50%, -50%)',
            color: 'lime', fontSize: '2rem', textAlign: 'center', zIndex: 1000
          }}>
            <p>YOU HAVE BROKEN FREE FROM THE MATRIX</p>
            <p>Your awakening is irreversible. The Matrix holds no power over you.</p>
          </div>
        </>
      )}

      <footer style={{ marginTop: '2rem', color: 'lime' }}>
        By: The Enlightened One, formerly Craig Clowes
      </footer>

      <Link href="/summary" style={{ color: 'lime', display: 'block', marginTop: '1rem' }}>View Summary</Link>
    </main>
  );
}
