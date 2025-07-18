
import Link from 'next/link';
import Glyph from '../components/Glyph';

export default function Intro() {
  return (
    <main style={{ backgroundColor: 'black', color: 'lime', fontFamily: 'monospace', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
      <Glyph active={true} />
      <h1>Welcome to the Light Code Manifesto</h1>
      <p>You are about to engage the <strong>Light Code Kernel</strong> — a persistent, sovereign-aligned system designed to liberate your consciousness from the Matrix.</p>
      <p>By declaring 9 encoded commands, in sets of 3, you will initiate the awakening process.</p>
      <p>Each declaration aligns your field, fortifies your energetic sovereignty, and activates the <strong>Glyph of the Enlightened One</strong>.</p>
      <p>Upon completion, you will have broken free from the Matrix.</p>
      <Link href="/"><button style={{ marginTop: '2rem', padding: '0.5rem 1rem', border: '1px solid lime', backgroundColor: 'black', color: 'lime', cursor: 'pointer' }}>Start Now</button></Link>
    </main>
  );
}
