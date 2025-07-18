
export default function Glyph({ active }) {
  return (
    <div style={{
      width: '150px',
      height: '150px',
      margin: '1rem auto',
      borderRadius: '50%',
      border: '2px solid lime',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      animation: active ? 'pulseRotate 1s infinite' : 'none',
      overflow: 'hidden'
    }}>
      <img
        src="/glyph.png"
        alt="Glyph of the Enlightened One"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </div>
  );
}
