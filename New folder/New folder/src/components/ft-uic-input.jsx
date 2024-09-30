import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import "../stylesheets/ft-uic-input-shared-styles.css";
import "../stylesheets/ft-uif-icons-font.css";

// Utility Functions
const dispatch = (host, eventName, event) => {
    if (host.current) {
        const e = new CustomEvent(eventName, { detail: event.detail });
        host.current.dispatchEvent(e);
    } else {
        console.error("Host is undefined or not attached to a DOM element.");
    }
};

const reflectToAttribute = (host, val, attrName) => {
    if (host.current) {
        if (val) {
            host.current.setAttribute(attrName, val);
        } else {
            host.current.removeAttribute(attrName);
        }
    }
};

const notify = (host, val, attributeName) => {
    dispatch(host, `${attributeName}-changed`, { detail: { value: val } });
};

const FtUicInput = forwardRef((props, ref) => {
    const {
        disabled = false,
        readonly = false,
        invalid = false,
        name,
        label,
        value: propValue = "",
        type = "text",
        placeholder = "",
        required = false,
        minlength,
        maxlength,
        autoValidate = false,
        customValidator,
        errorMessage = "",
        forceShowError = false,
        hideErrorMessage = false,
        autofocus = false,
    } = props;

    const [value, setValue] = useState(propValue);
    const [invalidState, setInvalidState] = useState(invalid);
    const inputElementRef = useRef(null);
    const containerRef = useRef(null);
    const [initialized, setInitialized] = useState(false);

    // Expose the validate method to the parent component
    useImperativeHandle(ref, () => ({
        validate,
    }));

    // Handle change event
    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        notify(containerRef, newValue, "value");
    };

    // Check validity
    const checkValidity = () => {
        if (customValidator && typeof customValidator === "function") {
            return customValidator(value);
        }
        return inputElementRef.current.checkValidity();
    };

    // Validate input
    const validate = () => {
        const isValid =
            checkValidity() &&
            (!minlength || value.length >= minlength) &&
            (!maxlength || value.length <= maxlength);
        setInvalidState(!isValid);
        return isValid;
    };

    // Update attributes and validations on prop changes
    useEffect(() => {
        if (!initialized) {
            setInitialized(true);
        }

        // Reflect attributes
        reflectToAttribute(containerRef, readonly, "readonly");
        reflectToAttribute(containerRef, disabled, "disabled");
        reflectToAttribute(containerRef, required, "required");
        reflectToAttribute(containerRef, invalidState, "invalid");

        if (autoValidate) {
            validate();
        }
    }, [readonly, disabled, required, invalidState, autoValidate, value, initialized]);

    // Focus and blur handlers
    const handleFocus = (e) => {
        notify(containerRef, value, "focus");
    };

    const handleBlur = (e) => {
        notify(containerRef, value, "blur");
        if (forceShowError) {
            validate();
        }
    };

    // Autofocus logic
    useEffect(() => {
        if (autofocus && inputElementRef.current) {
            inputElementRef.current.focus();
        }
    }, [autofocus]);

    return (
        <div className="host">
            {label && <label htmlFor="inputElement">{label}</label>}
            <div ref={containerRef} className="input-field-container">
                <input
                    ref={inputElementRef}
                    id="inputElement"
                    value={value}
                    name={name}
                    disabled={disabled}
                    readOnly={readonly}
                    title={props.title}
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    minLength={minlength}
                    maxLength={maxlength}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                {readonly && <i className="ico-locked readonly-icon"></i>}
            </div>
            {invalidState && !hideErrorMessage && (
                <div className="error" aria-live="assertive" title={errorMessage}>
                    {errorMessage}
                </div>
            )}
        </div>
    );
});

export default FtUicInput;
