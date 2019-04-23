import React, { useState } from "react";
import TextArea from "./TextArea";

function App() {
  const [text, setText] = useState();
  return (
    <div>
      <TextArea
        value={text}
        onChange={value => {
          setText(value);
        }}
      />
    </div>
  );
}

export default App;
