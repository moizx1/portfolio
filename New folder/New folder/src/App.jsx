import React, { useState } from "react";
import FtUicInput2 from "./components/ft-uic-input2";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showErrors, setShowErrors] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password || password.length < 8) {
      setShowErrors(true);
    } else {
      setShowErrors(false);
      console.log("Form submitted successfully");
    }
  };

  return (
    <div className="h-screen w-full bg-gray-200">
      <FtUicInput2 name="inp4" autoValidate label="this input has prefilled an invalid value (only alphabets are allowed, auto-validate)" pattern="[a-zA-Z]*" value="123" />
    </div>
  );
};

export default App;
