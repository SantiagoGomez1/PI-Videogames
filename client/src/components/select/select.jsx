import React from "react";

export default function Select({ list, name, id, onClick }) {
  return (
    <div>
      <select name={name} onClick={onClick}>
        <option>
            Select
        </option>
            {list?.map((g) => (
              <option>{g.name}</option>
            ))}
      </select>
    </div>
  );
}
