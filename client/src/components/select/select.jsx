import React from "react";

export default function Select({ list, name, onChange }) {
  return (
    <div>
      <select name={name} onChange={onChange}>
        <option>Select</option>
            {list?.map((g) => (
              <option key={g.id}>{g.name}</option>
            ))}
      </select>
    </div>
  );
}
