import styled from 'styled-components';

export const Input = styled.input`
    appearance: none;
    background-color: rgb(255, 255, 255);
    background-image: none;
    border: 0px;
    border-radius: 4px;
    box-shadow: rgb(179, 179, 179) 0px 0px 0px 1px inset;
    box-sizing: border-box;
    color: rgb(24, 24, 24);
    display: block;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 24px;
    margin-bottom: 15px;
    margin-top: 0px;
    padding: 14px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    width: 100%;
`;

export const Title = styled.div`
    font-size: 32px;
    font-weight: 900;
    margin-bottom: 20px;
`;

export const PrimaryButton = styled.button`
    background-color: rgb(29, 185, 84);
    border: 0px;
    border-radius: 500px;
    box-sizing: border-box;
    color: rgb(255, 255, 255);
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

    &:hover{
        cursor:pointer;
      }
`;

export const ButtonsContainer = styled.div`
    display:flex;
    justify-content:flex-end;
`;

export const Container = styled.div`
    background-color: white;
    border-radius: 4px;
    border: 1px solid #d9dadc;
    font-size: 14px;
    font-weight: bold;
    line-height: 20px;
    padding: 32px;
    width: 727px;
`;