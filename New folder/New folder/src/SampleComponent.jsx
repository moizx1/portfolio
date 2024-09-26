import React from "react";

export default function SampleComponent({
  label,
  name,
  value,
  type = "text",
  placeholder,
  onValueChange
}) {
  const handleChange = (e) => {
    if (onValueChange) {
      onValueChange(e);
    }
    
    const customEvent = new CustomEvent('value-change', {
      detail: { value: e.target.value },
      bubbles: true,
      composed: true
    });
    e.target.dispatchEvent(customEvent);
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className="border bg-slate-400"
      />
    </div>
  );
}
