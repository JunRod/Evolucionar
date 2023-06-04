import { DropFiles } from "./DropFiles"
import { useDispatch, useSelector } from "react-redux";
import { setOnButtonsContruibuitors } from "../../store/masculinidad";
import { Button, ButtonSend, DescripcionInput, FlexInput, Icon, Input, InputButtonLeft, Title } from '../../styles/AportarStyles';


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
