import styled, { createGlobalStyle } from 'styled-components'

interface SecondaryButtonProps {
  color:string;
  border:boolean;
}

export const GlobalStyle = createGlobalStyle`
  body {
      align-items: center;
      background-image: linear-gradient(#212c39, #121e3d 50%, #000);
      display: flex;
      font-family: 'Roboto', sans-serif;
      height: 100vh;
      justify-content: center;
      margin: 0;
      padding: 0;
      width: 100vw;
  }
`

export const SecondaryButton = styled.button`
    background-color: transparent;
    box-sizing: border-box;
    border: ${({border}:SecondaryButtonProps)=>border ? '1px solid white' : '0px'};
    border-radius: 500px;
    color: ${({color}:SecondaryButtonProps)=>color};
    display: inline-block;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 2px;
    line-height: 1;
    padding: 17px 48px;
    position: relative;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    touch-action: manipulation;
    transform: translate3d(0px, 0px, 0px);
    transition-duration: 33ms;
    transition-property: background-color, border-color, color, box-shadow, filter, transform;
    user-select: none;
    vertical-align: middle;
    margin-bottom:10px;

    &:hover{
      cursor:pointer;
    }
`;