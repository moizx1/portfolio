import React, { useEffect, useState } from "react";
import FcUicInput2 from "./components/ft-uic-input2";
import { FaBeer } from "react-icons/fa";
export default function App() {
  const [theme, setTheme] = useState("light");
  const [formValues, setFormValues] = useState({
    textInput: "",
    passwordInput: "",
    disabledInput: "Some value",
    readonlyInput: "Some value",
    maxLengthInput: "",
    validationInput1: "",
    validationInput2: "",
    validationInput3: "",
    validationInput4: "",
    validationInput5: "",
    clearableInput: "",
    forceShowErrorInput: "",
    readOnlyInput: "test",
  });

  const [errors, setErrors] = useState({});

  const toggleTheme = () => {
    let cTheme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
    let nTheme = cTheme === "dark" ? "light" : "dark";
    document.documentElement.classList.remove(cTheme);
    document.documentElement.classList.add(nTheme);
    setTheme(theme === "light" ? "dark" : "light");
  };

  const validateInput = (name, value) => {
    const patterns = {
      validationInput1: /^[a-zA-Z]*$/,
      validationInput2: /^[0-9]*$/,
      validationInput3: /^[a-zA-Z]*$/,
      clearableInput: /^[A-Z1-9]{4,}$/,
    };
    const messages = {
      validationInput1: "Letters only!",
      validationInput2: "Numbers only!",
      validationInput3: "This field is required!",
      clearableInput: "Minimum 4 characters uppercase or numbers!",
    };

    if (patterns[name] && !patterns[name].test(value)) {
      setErrors((prev) => ({ ...prev, [name]: messages[name] }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    validateInput(name, value);
  };

  const clearInput = () => {
    setFormValues((prev) => ({ ...prev, clearableInput: "" }));
  };

  const toggleReadonly = () => {
    setFormValues((prev) => ({
      ...prev,
      readOnlyInput: prev.readOnlyInput === "test" ? "" : "test",
    }));
  };

  return (
    <div className="min-h-screen px-36 py-16 bg-white transition-colors duration-300">
      {/* Theme Toggle Button */}
      <button
        type="button"
        id="themeChanger"
        onClick={toggleTheme}
        className="mb-6 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-700 transition"
      >
        Toggle {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      <h1 className="text-3xl font-semibold mb-6">Input Demo</h1>

      <div
        className={`${theme === "dark" ? "bg-[#333333]" : "bg-[#F2F2F2]"} p-4`}
      >
        <section className="mb-8">
          <h2
            className={`text-xl font-medium mb-4 ${
              theme === "light" ? "text-[#333333]" : "text-gray-100"
            }`}
          >
            Basic Inputs
          </h2>

          <div className="space-y-4 mb-16">
            <FcUicInput2
              inputId="username"
              label="Username"
              placeholder="Enter your username"
              prefix={<i><FaBeer /></i>}
            />
            <FcUicInput2
              autoValidate
              label="Text input"
              required
              errorMessage="This input is required"
              placeholder="Please fill in"
              name="textInput"
              value={formValues.textInput}
              onChange={handleChange}
            />
            <FcUicInput2
              label="Password input"
              type="password"
              placeholder="Please enter password"
              name="passwordInput"
              value={formValues.passwordInput}
              onChange={handleChange}
            />
            <FcUicInput2
              label="Disabled input"
              disabled
              value={formValues.disabledInput}
            />
            <FcUicInput2
              label="Readonly input"
              readonly
              value={formValues.readonlyInput}
            />
            <FcUicInput2
              label="Max length (3)"
              maxlength="3"
              name="maxLengthInput"
              value={formValues.maxLengthInput}
              onChange={handleChange}
            />
          </div>
        </section>

        <section className="mb-16">
          <h2
            className={`text-xl font-medium mb-4 ${
              theme === "light" ? "text-[#333333]" : "text-gray-100"
            }`}
          >
            Validation
          </h2>

          <div className="space-y-4">
            <FcUicInput2
              name="validationInput1"
              label="Letters only (Manual Validation, Not Required)"
              errorMessage={errors.validationInput1}
              value={formValues.validationInput1}
              onChange={handleChange}
            />
            <FcUicInput2
              name="validationInput2"
              label="Numbers only (Manual Validation, Required)"
              required
              errorMessage={errors.validationInput2}
              value={formValues.validationInput2}
              onChange={handleChange}
            />
            <FcUicInput2
              name="validationInput3"
              label="Only letters"
              value={formValues.validationInput3}
              onChange={handleChange}
              pattern="[a-zA-Z]*"
            />
          </div>
        </section>

        <section className="mb-16">
          <h2
            className={`text-xl font-medium mb-4 ${
              theme === "light" ? "text-[#333333]" : "text-gray-100"
            }`}
          >
            Clearable Input
          </h2>

          <FcUicInput2
            class="hello"
            name="clearableInput"
            label="Required, Minimum 4 characters uppercase or numbers"
            required
            errorMessage={errors.clearableInput}
            value={formValues.clearableInput}
            onChange={handleChange}
          />
          <button
            onClick={clearInput}
            className="mt-2 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-700 transition"
          >
            Clear
          </button>
        </section>

        <section className="mb-16">
          <h2
            className={`text-xl font-medium mb-4 ${
              theme === "light" ? "text-[#333333]" : "text-gray-100"
            }`}
          >
            Forced Show Error
          </h2>

          <FcUicInput2
            name="forceShowErrorInput"
            label="Force show error"
            forceShowError
            required
            errorMessage="This field is required!"
            value={formValues.forceShowErrorInput}
            onChange={handleChange}
          />
        </section>

        <section className="mb-8">
          <h2
            className={`text-xl font-medium mb-4 ${
              theme === "light" ? "text-[#333333]" : "text-gray-100"
            }`}
          >
            Toggle Readonly
          </h2>

          <FcUicInput2
            name="readOnlyInput"
            label="This input is readonly"
            readonly={!formValues.readOnlyInput}
            value={formValues.readOnlyInput}
            onChange={handleChange}
          />
          <button
            onClick={toggleReadonly}
            className="mt-2 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-700 transition"
          >
            Toggle Readonly
          </button>
        </section>
      </div>
    </div>
  );
}
