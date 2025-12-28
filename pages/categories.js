import Navbar from '../components/Navbar';

export default function Categories() {
  const categories = [
    { id: 1, name: '📰 Täze habarlar', desc: 'Soňky habarlar we wakalar', count: 1, color: '#2E7D32' },
    { id: 2, name: '⚽ Sport', desc: 'Sport ýaryşlary we çempionatlar', count: 0, color: '#1565C0' },
    { id: 3, name: '💻 Tehnologiýalar', desc: 'Tehnika we programmalar', count: 0, color: '#6A1B9A' },
    { id: 4, name: '🎭 Medeniýet', desc: 'Medeni we sungat wakalary', count: 0, color: '#EF6C00' },
    { id: 5, name: '🏥 Saglyk', desc: 'Saglygy goraýyş maslahatlar', count: 0, color: '#C62828' },
    { id: 6, name: '📚 Bilim', desc: 'Bilim we okuw materiallar', count: 0, color: '#283593' },
    { id: 7, name: '👨‍🎓 Ýaşlar', desc: 'Ýaşlar üçin meňzeşlikler', count: 0, color: '#00838F' }
  ];

  return (
    <div>
      <Navbar />
      <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', color: '#008000' }}>
          📚 Blogyň ähli kategoriýalary
        </h1>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginTop: '30px'
        }}>
          {categories.map((cat) => (
            <a 
              key={cat.id}
              href={`/category/${cat.id}`}
              style={{
                background: cat.color,
                color: 'white',
                padding: '25px',
                borderRadius: '12px',
                textDecoration: 'none',
                display: 'block',
                transition: 'transform 0.3s'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <h3 style={{ margin: '0 0 10px 0', fontSize: '1.4rem' }}>
                {cat.name}
              </h3>
              <p style={{ margin: '0 0 15px 0', opacity: '0.9' }}>
                {cat.desc}
              </p>
              <div style={{
                background: 'rgba(255,255,255,0.2)',
                padding: '5px 15px',
                borderRadius: '20px',
                display: 'inline-block'
              }}>
                {cat.count} makala
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
