// src/components/TourCard.jsx
import React, { useState } from 'react';

export default function TourCard({ tour, onNotInterested }) {
  const { name, info, image, price } = tour;
  const [readMore, setReadMore] = useState(false);

  return (
    <div
      className="tour-card"
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden'
      }}
    >
      <img
        src={image}
        alt={name}
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
      <div style={{ padding: '0.5rem' }}>
        <h2>{name}</h2>
        <h4>${price}</h4>
        <p>
          {readMore ? info : `${info.slice(0, 200)}…`}{' '}
          <button
            onClick={() => setReadMore(r => !r)}
            style={{
              border: 'none',
              background: 'none',
              color: '#0066cc',
              cursor: 'pointer'
            }}
          >
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <button
          onClick={onNotInterested}
          style={{
            padding: '0.5rem 1rem',
            marginTop: '0.5rem',
            cursor: 'pointer'
          }}
        >
          Not Interested
        </button>
      </div>
    </div>
  );
}
