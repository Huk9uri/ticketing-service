'use client';

import { useState } from 'react';

type SeatStatus = 'AVAILABLE' | 'SELECTED';

type Seat = {
    id: number;
    status: SeatStatus;
};

export default function SeatGrid()  {
    // 임시 좌석 데이터 (20석)
    const initialSeats: Seat[] = Array.from({ length: 20 }).map((_, i) => ({
      id: i + 1,
      status: 'AVAILABLE',
    }));

    const [seats, setSeats] = useState<Seat[]>(initialSeats);

    const handleClick = (id: number) => {
        setSeats(seats.map((seat) => seat.id === id ? { ...seat, status: seat.status === 'AVAILABLE' ? 'SELECTED' : 'AVAILABLE' } : seat));
    };

    return (
        <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 60px)',
        gap: 8,
        marginTop: 12,
      }}
    >
        {seats.map((seat) => (
            <div
              key={seat.id}
              onClick={() => handleClick(seat.id)}
              style={{
                width: 60,
                height: 60,
                border: '1px solid #333',
                cursor: 'pointer',
                backgroundColor:
                  seat.status === 'SELECTED' ? '#4f46e5' : '#fff',
                color: seat.status === 'SELECTED' ? '#fff' : '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {seat.id}
            </div>
        ))}
        </div>
    );
}