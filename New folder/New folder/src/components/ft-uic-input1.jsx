import React from "react";
// import './stylesheets/color.css';
// import './stylesheets/ft-theme-light.css';
// import './stylesheets/iron-flex-layout.css';
// import './stylesheets/ft-uic-input-shared-styles.css';
// import './stylesheets/ft-uif-icons-font.css';
import './ft-uic-input.css'

export default function ftUicInput1({
  label,
  name,
  value,
  type = "text",
  placeholder,
  disabled = false,
  readOnly = false,
  required = false,
  onChange,
  errorMessage
}) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <div
        className={`input-field-container ${readOnly ? "readonly" : ""} ${
          disabled ? "disabled" : ""
        }`}
      >
        <slot class="input-slot-prefix" name="prefix" />
        <div class="input-field">
          <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            onChange={onChange}
            className={`input-element ${readOnly ? "readonly-input" : ""}`}
          />
          <i id="readonlyIcon" class="ico-locked readonly-icon"></i>
        </div>
        <slot class="input-slot-suffix" name="suffix" />
      </div>

      <div class="add-on-content">
        <div class="error" aria-live="assertive" title="{errorMessage}">
          {errorMessage}
        </div>
      </div>
    </>
  );
}
