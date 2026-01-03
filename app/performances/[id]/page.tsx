export default async function PerformanceDetailPage({
    params,
  }: {
    params: Promise<{ id: string }>;
  }) {
    const { id } = await params;
    return (
      <>
        <h1>공연 상세 페이지</h1>
        <p>공연 ID: {id}</p>
  
        <section style={{ marginTop: 24 }}>
          <h2>좌석 선택</h2>
  
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 60px)',
              gap: 8,
              marginTop: 12,
            }}
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                style={{
                  width: 60,
                  height: 60,
                  border: '1px solid #333',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </section>
      </>
    );
  }
  