import { useEffect, useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/esm/styles/prism";

function App() {
  const [selectedImage, setSelectedImage] = useState([]);
  const [redSocial, setRedSocial] = useState("");
  const [preview, setPreview] = useState({});
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [link, setlink] = useState("");
  const [authors, setAuthors] = useState("");
  const [objectsToJSON, setObjectsToJSON] = useState("");
  const fileInputImage = useRef(null);
  let newPreview = {};

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage([URL.createObjectURL(file), file.name]);
  };

  const handleSelectedChange = (event) => {
    setRedSocial(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleIntroducing = () => {
    newPreview = preview;
    newPreview.image = `/images/${selectedImage[1]}`;

    const objectCode = JSON.stringify(newPreview, null, 2);
    const formattedCode = objectCode.replace(/"([^"]+)":/g, "$1:");
    setObjectsToJSON(prev => {
      return `${formattedCode}, ${prev}`
    })

    clearAll();
  };

  const clearAll = () => {
    if (fileInputImage.current) {
      fileInputImage.current.value = "";
    }
    setRedSocial("");
    setPreview({});
    setDescription("");
    setTitle("");
    setlink("");
    setAuthors("");
  };

  const handleLinkChange = (event) => {
    setlink(event.target.value);
  };

  const handleAuthorsChange = (event) => {
    setAuthors(event.target.value);
  };

  useEffect(() => {

    const preview = {
      seccion: redSocial,
      image: selectedImage[0],
      title,
      descripcion: description,
      link,
    };

    if(redSocial === "libros") {
      preview.authors = authors
    }

    setPreview(preview);
  }, [selectedImage, redSocial, description, title, link, authors]);

  return (
    <div className="container" style={{ height: "100vh" }}>
      <form>
        <input
          ref={fileInputImage}
          type="file"
          onChange={handleImageChange}
          accept="image/*"
        />

        <div className="description">
          Title
          <textarea type="text" onChange={handleTitleChange} value={title} />
        </div>

        <div className="description">
          Descripcion
          <textarea
            type="text"
            onChange={handleDescriptionChange}
            value={description}
          />
        </div>

        <div className="description">
          Link
          <textarea type="text" onChange={handleLinkChange} value={link} />
        </div>

        {redSocial === "libros" ? (
          <div className="description">
            Autores
            <textarea
              type="text"
              onChange={handleAuthorsChange}
              value={authors}
            />
          </div>
        ) : (
          <></>
        )}

        <div className="social">
          Red Social
          <select value={redSocial} onChange={handleSelectedChange}>
            <option value="">Selecciona</option>
            <option value="libros">Libros</option>
            <option value="youtube">YouTube</option>
            <option value="twitter">Twitter</option>
            <option value="tiktok">TikTok</option>
            <option value="telegram">Telegram</option>
            <option value="aplicaciones">Aplicaciones</option>
          </select>
        </div>

        {preview.image ? (
          <div className="preview">
            <img src={preview?.image} />
            <p>{preview?.title}</p>
            <p>{preview?.description}</p>
            <p>{preview?.seccion}</p>
            <p>{preview?.link}</p>
            <p>{preview?.authors}</p>
          </div>
        ) : (
          <></>
        )}

        <div className="contenedorButtons">
          <input onClick={handleIntroducing} type="button" value="Introducir" />
        </div>

        <pre>
          <SyntaxHighlighter  language="json" style={materialLight}>
            {objectsToJSON}
          </SyntaxHighlighter>
        </pre>
      </form>
    </div>
  );
}

export default App;

//Future Sitax

// import React, { useState } from 'react';

// function JsonGenerator() {
//   const [data, setData] = useState({
//     name: '',
//     age: '',
//     email: ''
//   });

//   const handleInputChange = (event) => {
//     setData({
//       ...data,
//       [event.target.name]: event.target.value
//     });
//   };

//   const generateJson = () => {
//     const jsonData = JSON.stringify(data);
//     console.log(jsonData);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         name="name"
//         value={data.name}
//         onChange={handleInputChange}
//         placeholder="Name"
//       />
//       <input
//         type="text"
//         name="age"
//         value={data.age}
//         onChange={handleInputChange}
//         placeholder="Age"
//       />
//       <input
//         type="email"
//         name="email"
//         value={data.email}
//         onChange={handleInputChange}
//         placeholder="Email"
//       />
//       <button onClick={generateJson}>Generate JSON</button>
//     </div>
//   );
// }

// export default JsonGenerator;
