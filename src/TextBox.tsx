import React, { useState } from 'react';
import './TextBox.css'; // Import the CSS for the text box

// Functional React component with a big rounded text box
const TextBox: React.FC = () => {
  const [text, setText] = useState<string>(''); // State to store the input value

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value); // Update the state when the input changes
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter text here"
        className="big-rounded-textbox" // Apply the CSS class
        rows={5} // Adjust height with rows
      />
    </div>
  );
};

export default TextBox;
