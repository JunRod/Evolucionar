import insta from "/images/insta.svg"

export const SocialRedes = ({social}) => {
  return social ? <a href="https://www.instagram.com/fernandoperaltafit/"  target="_blank" ><img src={insta} /></a> : <></>
}
