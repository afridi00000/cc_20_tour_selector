// src/components/DestinationSelector.jsx
import React from 'react';

export default function DestinationSelector({ tours, selected, onChange }) {
  const options = ['All', ...new Set(tours.map(t => t.name))];

  return (
    <div style={{ margin: '1rem 0' }}>
      <label htmlFor="dest">Filter by destination:&nbsp;</label>
      <select
        id="dest"
        value={selected}
        onChange={e => onChange(e.target.value)}
      >
        {options.map(name => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}
