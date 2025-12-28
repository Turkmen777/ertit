export default function FirstArticle() {
  return (
    <article style={{
      maxWidth: '800px',
      margin: '40px auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6'
    }}>
      {/* Заголовок */}
      <header style={{
        background: 'linear-gradient(90deg, #008000, #CC0000)',
        color: 'white',
        padding: '30px',
        borderRadius: '10px',
        marginBottom: '30px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{
            background: 'white',
            color: '#008000',
            padding: '5px 15px',
            borderRadius: '20px',
            fontSize: '0.9rem'
          }}>
            📰 TÄZE HABARLAR
          </span>
          <span style={{ fontSize: '0.9rem', opacity: '0.9' }}>
            25.12.2024 • 5 minut owal
          </span>
        </div>
        
        <h1 style={{ fontSize: '2.5rem', margin: '15px 0 10px 0' }}>
          Ertit blogy işe başlady!
        </h1>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: '#FF9800',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold'
          }}>
            AT
          </div>
          <div>
            <p style={{ margin: '0', fontWeight: 'bold' }}>Ahmet Täçmyradow</p>
            <p style={{ margin: '0', fontSize: '0.9rem', opacity: '0.9' }}>
              @ahmet • ilkinji makala
            </p>
          </div>
        </div>
      </header>

      {/* Содержимое статьи */}
      <div style={{ fontSize: '1.1rem' }}>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#008000' }}>
          Hoş geldiňiz! Ertit - Türkmenistanyň täze blog platformasy resmi işe başlady.
        </p>
        
        <p>
          <strong>Ertit</strong> blogynda size 7 sany kategoriýada täze makalalar, 
          gyzykly maglumatlar we täze habarlar hödürlenilýär. Platformamyz 
          her bir Türkmenistanyň raýatyna öz pikirlerni paýlaşmak mümkinçiligini berýär.
        </p>
        
        <div style={{
          background: '#f0f9f0',
          padding: '20px',
          borderRadius: '10px',
          margin: '25px 0',
          borderLeft: '5px solid #008000'
        }}>
          <h3 style={{ marginTop: 0, color: '#006600' }}>🎯 Ertit nämä gönükdirilen?</h3>
          <ul>
            <li>Her kes öz makalasyny ýazyp biler</li>
            <li>Makalalar 5-10 minut moderasiýadan geçýär</li>
            <li>7 kategoriýada 100-den gowrak makala</li>
            <li>Täzelikler her gün jaňlanýar</li>
          </ul>
        </div>
        
        <h2>Kategoriýalarymyz:</h2>
        <ol style={{ background: '#e3f2fd', padding: '20px 20px 20px 40px', borderRadius: '10px' }}>
          <li><strong>Täze habarlar</strong> - ýurtda we dünýäde bolýan täzelikler</li>
          <li><strong>Sport</strong> - futbol, tennis, olimpiada ýaryşlary</li>
          <li><strong>Tehnologiýalar</strong> - täze telefonlar, programmalar</li>
          <li><strong>Medeniýet</strong> - konsertler, kinolar, kitap tanıtmaları</li>
          <li><strong>Saglyk</strong> - saglykly ýaşaýyş, lukmançylyk maslahatlary</li>
          <li><strong>Bilim</strong> - okuw materiallar, synaglar, kurslar</li>
          <li><strong>Ýaşlar</strong> - ýaşlar üçin meşgullanalar, taslamalar</li>
        </ol>
        
        <p>
          <strong>Ýatda saklaň:</strong> Siz hem öz makalaňyzy ýazyp bilersiňiz! 
          Diňe registrasiýa bolup, öz nick-name-iňizi saýlaň we başlaň.
        </p>
        
        <div style={{
          background: '#fff3cd',
          padding: '20px',
          borderRadius: '10px',
          margin: '30px 0',
          textAlign: 'center'
        }}>
          <p style={{ margin: 0, fontWeight: 'bold' }}>
            🚀 Makala ýazmak isleseňiz, <a href="#" style={{ color: '#008000' }}>
            registrasiýa</a> boluň we ilkinji makalaňyzy iberiň!
          </p>
        </div>
      </div>

      {/* Футер статьи */}
      <footer style={{
        marginTop: '40px',
        paddingTop: '20px',
        borderTop: '2px solid #eee',
        color: '#666'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p style={{ margin: '0', fontSize: '0.9rem' }}>
              Makala statistikasy:
            </p>
            <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
              <span>👁️ 1,234 görüldi</span>
              <span>👍 57 halanma</span>
              <span>💬 3 teswir</span>
            </div>
          </div>
          
          <button style={{
            background: '#008000',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            👍 Hala
          </button>
        </div>
      </footer>
      
      {/* Кнопка назад */}
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <a href="/" style={{
          display: 'inline-block',
          background: '#f0f0f0',
          color: '#333',
          padding: '10px 25px',
          borderRadius: '5px',
          textDecoration: 'none'
        }}>
          ← Baş sahypa gaýdyp gel
        </a>
      </div>
    </article>
  );
}
