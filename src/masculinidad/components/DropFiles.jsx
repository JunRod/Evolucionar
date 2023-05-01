import { useDropzone } from 'react-dropzone';
import styled from 'styled-components'

const secondary = "#bac9d8"
const fontRegular = "Satoshi Regular, sans-serif";
const styleRegular = "normal";
const weightRegular = "normal";

const getColor = (props) => {
  if (props.isDragAccept) return ".5vh";
  if (props.isDragReject) return '#b40024';
  return '0';
}

const Container = styled.div`
  position: relative;
  top: .3vh;
  text-align: center;
  padding: 1.8vh;
  border: ${props => getColor(props)} solid ${secondary};
  border-bottom: solid .5vh ${secondary};
  transition: border .1s ease-in-out;
  p {
    margin: 0;
  }
`;

const Files = styled.div`
  text-align: center;
  list-style: none;
  font-size: 2vh;
  padding: 2vh;
  font-family: ${fontRegular};
  font-weight:${weightRegular};
  font-style:${styleRegular};
`
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
