import styled from 'styled-components'

export const getColor = (props) => {
  if (props.isDragAccept) return ".5vh";
  if (props.isDragReject) return '#b40024';
  return '0';
}

export const Container = styled.div`
  position: relative;
  top: .3vh;
  text-align: center;
  padding: 1.8vh;
  border: ${props => getColor(props)} solid ${props => props.theme.secondary};;
  border-bottom: solid .5vh ${props => props.theme.secondary};
  transition: border .1s ease-in-out;
  p {
    margin: 0;
  }
`;

export const Files = styled.div`
  text-align: center;
  list-style: none;
  font-size: 2vh;
  padding: 2vh;
  font-family: ${props => props.theme.fontRegular};
  font-weight:${props => props.theme.weightRegular};
  font-style:${props => props.theme.styleRegular};
`