import React, { useState } from "react";
import "./FileUpload.css";

const FileUpload = () => {
  const [file, setFile] = useState();
  const handleFile = (e) => {
    setFile(e.target.files);
    console.log(e.target.files);
  };
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", file);
    fetch("url", {
      method: "POST",
      body: formData,
    })
      .then((responce) => responce.json())
      .then((result) => {
        console.log("success", result);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };
  return (
    <div>
      <h2>The file upload here</h2>
      <div className="main">
        <form onSubmit={handleUpload}>
          <input
            type="file"
            name="file"
            placeholder="upload a file"
            onChange={handleFile}
          />
        </form>
        <button onClick={() => handleUpload()}>Upload</button>
      </div>
    </div>
  );
};

export default FileUpload;
