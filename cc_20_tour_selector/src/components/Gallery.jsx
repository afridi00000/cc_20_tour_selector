// src/components/Gallery.jsx
import React from 'react';
import TourCard from './TourCard';

export default function Gallery({
  tours,
  loading,
  error,
  selected,
  onNotInterested,
  onRefresh
}) {
  if (loading) return <p>Loading tours…</p>;

  if (error)
    return (
      <>
        <p>Error: {error}</p>
        <button onClick={onRefresh}>Retry</button>
      </>
    );

  const displayed =
    selected === 'All' ? tours : tours.filter(t => t.name === selected);

  if (displayed.length === 0) {
    return (
      <div>
        <p>No tours left. Refresh to reload.</p>
        <button onClick={onRefresh}>Refresh</button>
      </div>
    );
  }

  return (
    <div
      className="gallery"
      style={{
        display: 'grid',
        gap: '1rem',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'
      }}
    >
      {displayed.map(tour => (
        <TourCard
          key={tour.id}
          tour={tour}
          onNotInterested={() => onNotInterested(tour.id)}
        />
      ))}
    </div>
  );
}
