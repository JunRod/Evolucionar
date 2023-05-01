import styled, { css } from 'styled-components'
import { DropFiles } from "./DropFiles"
import { useDispatch, useSelector } from "react-redux";
import { setOnButtonsContruibuitors } from "../../store/masculinidad";

const InputLink = styled.input`
    &:focus {
        border: .5vh solid ${props => props.theme.secundario};
        outline: 0;
    }

    &::placeholder { 
        color: ${props => props.theme.secundario};
    }
    border: 0;
    text-align: center;
    padding: 4vh 4vh;
    color: ${props => props.theme.secundario};
    margin-top: 8.7vh;
    transition: border .1s ease;
    border-bottom: .5vh solid ${props => props.theme.secundario};
    position: relative;
    top: .4vh;
    background-color: transparent;
    width: 100%;
    height: 5vh;
`

const InputButtonLeft = styled.div`
    display: flex;
`

const Button = styled.div`
    ${props => {
        if (props.isActive) return css`
        background-color: ${props => props.theme.secundario};
        color: ${props => props.theme.primario} !important;
    `}};
    
    color: ${props => props.theme.secundario};
    cursor: pointer;
    border: 0.6vh solid ${props => props.theme.secundario};
    position: relative;
    height: 6vh;
    width: 20vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: background-color .2s ease;

    &:nth-child(2) {
        border-left: none;
    }

    &:hover {
        background-color: ${props => props.theme.secundario};
        color: ${props => props.theme.primario};
    }

`

const ButtonSend = styled(Button)`
    border-left: 0.6vh solid ${props => props.theme.secundario} !important;
    font-size: 3vh;
    &:hover {
        color: ${props => props.theme.primario};
    }
`

const Title = styled.div`
    font-family: ${props => props.theme.fontBoldItalic};
    font-weight: ${props => props.theme.weightBoldItalic};
    font-style: ${props => props.theme.styleBoldItalic};
    font-size: 4vh;
    color: ${props => props.theme.secundario};
    letter-spacing: 2vh;
    text-transform: uppercase;
`

const FlexInput = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10vh;
    width: 80vh;
`

const DescripcionInput = styled.div`
    color: ${props => props.theme.secundario};
    font-size: 3vh;
    font-family: ${props => props.theme.fontRegular};
    font-weight: ${props => props.theme.weightRegular};
    font-style: ${props => props.theme.styleRegular};
`

const Input = styled.div`
    display: flex;
    justify-content: space-between;
`

const Icon = styled.svg`
    height: 4vh;
`

export const Aportar = () => {

    const dispatch = useDispatch()
    const { onButtonsContruibuitors } = useSelector(state => state.masculinidad)

    return (
        <>
            <Title>
                ¿Quieres aportar?
            </Title>

            <FlexInput>
                <DescripcionInput>
                    {
                        onButtonsContruibuitors
                            ? <DropFiles />
                            : <InputLink
                                type="text"
                                placeholder="Introduce el link"
                            />
                    }
                </DescripcionInput>
                <Input >
                    <InputButtonLeft>
                        <Button
                            isActive={onButtonsContruibuitors}
                            onClick={() => dispatch(setOnButtonsContruibuitors(true))}
                        >
                            <Icon
                                xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round" strokeLinejoin="round"
                                    d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                                />
                            </Icon>
                        </Button>
                        <Button
                            isActive={!onButtonsContruibuitors}
                            onClick={() => dispatch(setOnButtonsContruibuitors(false))}
                        >
                            <Icon
                                xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round" strokeLinejoin="round"
                                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                                />
                            </Icon>
                        </Button>
                    </InputButtonLeft>
                    <ButtonSend>
                        Enviar
                    </ButtonSend>
                </Input>
            </FlexInput>
        </>
    )
}
