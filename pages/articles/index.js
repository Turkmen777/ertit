import Navbar from '../components/Navbar';

export default function Articles() {
  const articles = [
    { 
      id: 1, 
      title: 'Ertit blogy işe başlady!', 
      category: 'Täze habarlar',
      author: 'Ahmet Täçmyradow',
      date: '25.12.2024',
      preview: 'Hoş geldiňiz! Ertit - Türkmenistanyň täze blog platformasy resmi işe başlady...',
      readTime: '3 min'
    }
  ];

  return (
    <div>
      <Navbar />
      <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ color: '#008000' }}>📖 Ähli makalalar</h1>
        
        {articles.map((article) => (
          <a 
            key={article.id}
            href={`/articles/${article.id}`}
            style={{
              display: 'block',
              background: '#f9f9f9',
              padding: '25px',
              margin: '20px 0',
              borderRadius: '10px',
              textDecoration: 'none',
              color: '#333',
              borderLeft: '5px solid #008000'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{
                background: '#008000',
                color: 'white',
                padding: '3px 10px',
                borderRadius: '15px',
                fontSize: '0.9rem'
              }}>
                {article.category}
              </span>
              <span style={{ color: '#666', fontSize: '0.9rem' }}>
                {article.date} • {article.readTime} okamak
              </span>
            </div>
            
            <h2 style={{ margin: '10px 0', color: '#008000' }}>
              {article.title}
            </h2>
            
            <p style={{ margin: '0 0 15px 0', color: '#555' }}>
              {article.preview}
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#666' }}>👤 {article.author}</span>
              <span style={{ color: '#008000', fontWeight: 'bold' }}>
                Dowamyny oka →
              </span>
            </div>
          </a>
        ))}
        
        {/* Пустое состояние */}
        {articles.length === 1 && (
          <div style={{
            textAlign: 'center',
            padding: '40px',
            background: '#f0f9f0',
            borderRadius: '10px',
            marginTop: '30px'
          }}>
            <p style={{ fontSize: '1.1rem' }}>
              🚀 Ýakyn wagtda köp sanly makalalar goşular!
            </p>
            <p>
              Siz hem öz makalaňyzy ýazyp bilersiňiz. <a href="/register" style={{ color: '#008000' }}>
              Registrasiýa</a> boluň!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
