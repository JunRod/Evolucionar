
function ObjectViewer({ object }) {
  const formattedText = object.replace(/"({|})"/g, "$1"); // Eliminar las comillas alrededor de las llaves

  return (
    <pre>
      <code>{formattedText}</code>
    </pre>
  );
}

export default ObjectViewer;
