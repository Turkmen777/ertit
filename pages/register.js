export default function Register() {
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
        maxWidth: '500px'
      }}>
        {/* Логотип */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={{
            width: '70px',
            height: '70px',
            background: 'linear-gradient(135deg, #008000, #CC0000)',
            borderRadius: '50%',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '15px'
          }}>
            E
          </div>
          <h1 style={{ color: '#008000', margin: '0 0 10px 0' }}>
            Ertit registrasiýasy
          </h1>
          <p style={{ color: '#666', margin: 0 }}>
            Hasap açyň we ilkinji makalaňyzy ýazyň
          </p>
        </div>

        {/* Форма */}
        <form style={{ marginBottom: '30px' }}>
          {/* Никнейм */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: 'bold',
              color: '#333'
            }}>
              👤 Nickname (Ulanyjy adyňyz)
            </label>
            <input
              type="text"
              placeholder="mysal: ahmet_turkmen"
              required
              style={{
                width: '100%',
                padding: '15px',
                border: '2px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem',
                boxSizing: 'border-box',
                transition: 'border 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#008000'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
            <div style={{
              fontSize: '0.85rem',
              color: '#666',
              marginTop: '5px',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}>
              ⚡ Bu ady saýlaň: @ahmet_turkmen
            </div>
          </div>

          {/* Email */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: 'bold',
              color: '#333'
            }}>
              📧 Email salgyňyz
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              required
              style={{
                width: '100%',
                padding: '15px',
                border: '2px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem',
                boxSizing: 'border-box',
                transition: 'border 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#008000'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
          </div>

          {/* Пароль */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: 'bold',
              color: '#333'
            }}>
              🔒 Açar söz (parol)
            </label>
            <input
              type="password"
              placeholder="Iň az 8 belgi"
              required
              style={{
                width: '100%',
                padding: '15px',
                border: '2px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem',
                boxSizing: 'border-box',
                transition: 'border 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#008000'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
          </div>

          {/* Подтверждение пароля */}
          <div style={{ marginBottom: '30px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: 'bold',
              color: '#333'
            }}>
              🔁 Açar sözi tassyklamak
            </label>
            <input
              type="password"
              placeholder="Açar sözi gaýtadan ýazyň"
              required
              style={{
                width: '100%',
                padding: '15px',
                border: '2px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem',
                boxSizing: 'border-box',
                transition: 'border 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#008000'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
          </div>

          {/* Соглашение */}
          <div style={{
            background: '#f8fff8',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '25px',
            border: '1px solid #e0f0e0'
          }}>
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer' }}>
              <input type="checkbox" required style={{ marginTop: '3px' }} />
              <span style={{ fontSize: '0.9rem', color: '#555' }}>
                Men <a href="/rules" style={{ color: '#008000' }}>ulanyjy ylalaşygyny</a> we 
                <a href="/privacy" style={{ color: '#008000', marginLeft: '5px' }}>gizlinlik düzgünlerini</a> 
                okadym we kabul edýärin.
              </span>
            </label>
          </div>

          {/* Кнопка регистрации */}
          <button
            type="submit"
            style={{
              width: '100%',
              background: 'linear-gradient(135deg, #008000, #00a000)',
              color: 'white',
              padding: '18px',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 5px 15px rgba(0, 128, 0, 0.3)'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 20px rgba(0, 128, 0, 0.4)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 5px 15px rgba(0, 128, 0, 0.3)';
            }}
          >
            📝 Registrasiýa bol
          </button>
        </form>

        {/* Дополнительные опции */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#666', marginBottom: '15px' }}>
            Ýa-da
          </p>
          
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginBottom: '25px' }}>
            <button style={{
              background: '#4267B2',
              color: 'white',
              padding: '12px 25px',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: 'bold'
            }}>
              <span>f</span> Facebook
            </button>
            
            <button style={{
              background: '#DB4437',
              color: 'white',
              padding: '12px 25px',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: 'bold'
            }}>
              G+ Google
            </button>
          </div>

          {/* Ссылка на вход */}
          <div style={{
            background: '#f5f5f5',
            padding: '20px',
            borderRadius: '8px',
            marginTop: '20px'
          }}>
            <p style={{ margin: '0 0 10px 0', color: '#555' }}>
              Eýýäm hasabyňyz barmy?
            </p>
            <a href="/login" style={{
              display: 'block',
              background: 'transparent',
              color: '#008000',
              padding: '12px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 'bold',
              border: '2px solid #008000',
              textAlign: 'center'
            }}>
              🔑 Hasaba gir
            </a>
          </div>
        </div>

        {/* Ссылка назад */}
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <a href="/" style={{
            color: '#008000',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px'
          }}>
            ← Baş sahypa gaýdyp gel
          </a>
        </div>
      </div>
    </div>
  );
}
