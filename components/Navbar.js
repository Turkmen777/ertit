export default function Navbar() {
  return (
    <nav style={{
      background: '#008000',
      color: 'white',
      padding: '15px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '40px',
          height: '40px',
          background: 'white',
          color: '#008000',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '1.2rem'
        }}>
          E
        </div>
        <a href="/" style={{
          color: 'white',
          textDecoration: 'none',
          fontSize: '1.5rem',
          fontWeight: 'bold'
        }}>
          ERTIT
        </a>
      </div>

      <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
        <a href="/" style={{ color: 'white', textDecoration: 'none' }}>
          🏠 Baş sahypa
        </a>
        <a href="/categories" style={{ color: 'white', textDecoration: 'none' }}>
          📚 Kategoriýalar
        </a>
        <a href="/articles" style={{ color: 'white', textDecoration: 'none' }}>
          📖 Makalalar
        </a>
        <a href="/about" style={{ color: 'white', textDecoration: 'none' }}>
          ℹ️ Biz barada
        </a>
        
        <a href="/register" style={{
          background: '#CC0000',
          color: 'white',
          padding: '8px 20px',
          borderRadius: '5px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          📝 Registrasiýa
        </a>
      </div>
    </nav>
  );
}
