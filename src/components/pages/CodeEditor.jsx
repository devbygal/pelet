// import Editor from "@monaco-editor/react";
import AceEditor from "react-ace";
import React, { useEffect, useState } from "react";
import { Header } from "./Header";

export default function CodeEditor(prop) {
  const { value, lang, setValue, displayName } = prop;
  const [colorTheme, setCurrentColor] = useState("vs-dark");

  function handleEditorChange(value, event) {
    setValue(value);
  }

  useEffect(() => {
    let getColor = localStorage.getItem("theme");
    setCurrentColor(getColor);
  }, [colorTheme])

  const getCurrentColor = (data) => {
    setCurrentColor(data);
  }

  return (
    <div className="editor"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine">
      <Header name={displayName} color={getCurrentColor} />

      <AceEditor
        width="100%"
        height="821px"
        defaultLanguage={lang}
        defaultValue={value}
        theme={colorTheme}
        onChange={handleEditorChange}
      />
    </div>
  );
}