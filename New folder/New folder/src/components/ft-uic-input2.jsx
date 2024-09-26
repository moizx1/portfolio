import React, { useEffect, useState, useRef, useCallback } from "react";
import "../stylesheets/ft-uic-input-shared-styles.css";
import "../stylesheets/ft-uif-icons-font.css";

const FcUitInput2 = ({
  inputId,
  disabled = false,
  readonly = false,
  invalid = false,
  name,
  preventInvalidInput = false,
  label,
  value: initialValue = "",
  type = "text",
  placeholder = "",
  pattern,
  title = "",
  required = false,
  autosave,
  tabindex,
  multiple = false,
  results,
  accept,
  autocorrect,
  errorMessage = "",
  minlength,
  maxlength,
  min,
  max,
  autoValidate = false,
  customValidator,
  forceShowError = false,
  focused: initialFocused = false,
  asNavElement = false,
  autocapitalize = false,
  hideErrorMessage = false,
  autofocus = false,
  onChange: externalOnChange,
  onBlur: externalOnBlur,
  onFocus: externalOnFocus,
}) => {
  const [value, setValue] = useState(initialValue);
  const [isFocused, setIsFocused] = useState(initialFocused);
  const [isInvalid, setIsInvalid] = useState(invalid);
  const [componentLoaded, setComponentLoaded] = useState(false);
  const [initialized, setInitialized] = useState(false);

  const inputRef = useRef(null);
  const host = useRef(null)

  useEffect(() => {
    setComponentLoaded(true);
    if (autofocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autofocus]);

  const validate = useCallback(() => {
    let isValid = true;
    if (customValidator && typeof customValidator === "function") {
      isValid = customValidator();
    } else if (inputRef.current) {
      isValid = inputRef.current.checkValidity();
    }

    if (isValid && minlength) {
      isValid = value.length >= parseFloat(minlength);
    }
    if (isValid && maxlength) {
      isValid = value.length <= parseFloat(maxlength);
    }

    setIsInvalid(!isValid);
    return isValid;
  }, [customValidator, minlength, maxlength, value]);

  const handleInputChange = (e) => {
    const newValue = e.target.value;

    if (preventInvalidInput) {
      if (newValue.length > 0 && !inputRef.current.checkValidity()) {
        inputRef.current.value = value || "";
        return;
      }
    }

    setValue(newValue);
    if (externalOnChange) {
      externalOnChange(e);
    }
  };

  const handleBlur = (e) => {
    if (value !== null) {
      setValue(value.trim());
    }
    setIsFocused(false);

    if (externalOnBlur) {
      externalOnBlur(e);
    }
  };

  const handleFocus = (e) => {
    setIsFocused(true);
    if (externalOnFocus) {
      externalOnFocus(e);
    }
  };

  useEffect(() => {
    if (componentLoaded) {
      const shouldValidate =
        autoValidate && !(value === "" && !initialized) && value !== undefined;

      const forceValidation = forceShowError && !initialized;
      if (shouldValidate || forceValidation) {
        validate();
      }

      setInitialized(true);
    }
  }, [
    value,
    autoValidate,
    forceShowError,
    initialized,
    validate,
    componentLoaded,
  ]);

  useEffect(() => {
    if (readonly) {
        host.current.setAttribute('readonly', true);
    } else {
      host.current.removeAttribute('readonly');
    }
}, [readonly])

  return (
    <div className="host"  ref={host}>
      {label && <label htmlFor={inputId}>{label}</label>}
      <div className="input-field-container">
        <div className="simple-flex">
          <slot className="input-slot-prefix" name="prefix" />
          <div className="input-field">
            <input
              ref={inputRef}
              id={inputId}
              value={value}
              name={name}
              disabled={disabled}
              readOnly={readonly}
              title={title}
              type={type}
              placeholder={placeholder}
              pattern={pattern}
              required={required}
              minLength={minlength}
              maxLength={maxlength}
              min={min}
              max={max}
              tabIndex={tabindex}
              autoSave={autosave}
              results={results}
              accept={accept}
              multiple={multiple}
              autoCorrect={autocorrect}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {readonly && <i className="ico-locked readonly-icon"></i>}
          </div>
          <slot className="input-slot-suffix" name="suffix"></slot>
        </div>
      </div>
      {isInvalid && !hideErrorMessage && (
        <div className="add-on-content">
          <div className="error" aria-live="assertive" title={errorMessage}>
            {errorMessage}
          </div>
        </div>
      )}
    </div>
  );
};

export default FcUitInput2;
