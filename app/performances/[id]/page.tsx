import SeatGrid from './SeatGrid';

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
          <SeatGrid />
        </section>
      </>
    );
  }
  