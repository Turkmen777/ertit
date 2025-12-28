export default function Login() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh',
      backgroundColor: '#f0f9f0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        padding: '40px',
        borderRadius: '15px',
        boxShadow: '0 10px 40px rgba(0, 128, 0, 0.1)',
        width: '100%',
        maxWidth: '450px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={{
            width: '60px',
            height: '60px',
            background: '#008000',
            borderRadius: '50%',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.8rem',
            color: 'white',
            marginBottom: '15px'
          }}>
            🔑
          </div>
          <h1 style={{ color: '#008000', margin: '0 0 10px 0' }}>
            Hasaba gir
          </h1>
          <p style={{ color: '#666', margin: 0 }}>
            Makala ýazmak üçin hasaba giriň
          </p>
        </div>

        <form>
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: 'bold',
              color: '#333'
            }}>
              👤 Nickname ýa-da Email
            </label>
            <input
              type="text"
              placeholder="nickname ýa-da email"
              required
              style={{
                width: '100%',
                padding: '15px',
                border: '2px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: 'bold',
              color: '#333'
            }}>
              🔒 Açar söz
            </label>
            <input
              type="password"
              placeholder="Açar söziňiz"
              required
              style={{
                width: '100%',
                padding: '15px',
                border: '2px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
            />
            <div style={{ textAlign: 'right', marginTop: '10px' }}>
              <a href="/forgot-password" style={{
                color: '#008000',
                fontSize: '0.9rem',
                textDecoration: 'none'
              }}>
                Açar sözi unutdyňyzmy?
              </a>
            </div>
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              background: '#008000',
              color: 'white',
              padding: '16px',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginBottom: '20px'
            }}
          >
            🚀 Hasaba gir
          </button>

          <div style={{ textAlign: 'center', margin: '25px 0' }}>
            <p style={{ color: '#666', marginBottom: '15px' }}>
              Hasabyňyz ýokmy?
            </p>
            <a href="/register" style={{
              display: 'block',
              background: '#f0f9f0',
              color: '#008000',
              padding: '14px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              border: '2px solid #008000'
            }}>
              📝 Täze hasap aç
            </a>
          </div>
        </form>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <a href="/" style={{
            color: '#008000',
            textDecoration: 'none'
          }}>
            ← Baş sahypa
          </a>
        </div>
      </div>
    </div>
  );
}
