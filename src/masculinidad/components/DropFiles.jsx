import { useDropzone } from 'react-dropzone';
import { Container, Files } from '../../styles/DropFilesStyles';

export const DropFiles = () => {

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragReject
  } = useDropzone();

  const files = acceptedFiles.map(file =>
    <li
      key={file.path}
    >
      {file.path} - {(file.size / 1048576).toString().slice(0, 4)} MB
    </li>
  );

  return (
    <>
      <Files >
        {files}
      </Files>
      <Container {
        ...getRootProps({
          className: 'dropzone',
          isDragAccept,
          isDragReject
        })
      }
      >
        <input
          multiple
          {...getInputProps()}
        />
        <p>Arrastre y suelte algunos archivos aquí, o haga clic aquí para seleccionar archivos</p>
      </Container>

    </>
  )
}
