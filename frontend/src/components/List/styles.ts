import styled from 'styled-components';

interface TitleProps {
    size: number,
    color: string,
}

interface TextProps {
    color: string,
}

interface CardProps {
    backgroundColor: boolean,
}

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
`;

export const TitleContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 150px;
    justify-content: center;
    width: 100%;
`;
export const TicketsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: calc(100% - 150px);
    justify-content: center;
    overflow: scroll;
    width: 100%;
`;

export const Title = styled.div`
    color: ${({ color }: TitleProps) => color};
    font-size: ${({ size }: TitleProps) => size}px;
    font-weight: 900;
    text-align: center;
    margin-bottom: 10px;
`;

export const Image = styled.img`
    height: 168px;
    object-fit: contain;
    width: 300px;
`;

export const Card = styled.div`
    background-color: ${({ backgroundColor }: CardProps) => backgroundColor ? 'green' : 'white'};
    border-radius: 5px;
    height: 300px;
    margin: 25px;
    padding-top:10px;
    overflow: hidden;
    width: 300px;

    &:hover{
        cursor:pointer;
      }
`;

export const TextContainer = styled.div`
    margin: 5px;
`;

export const Text = styled.div`
    color: ${({ color }: TextProps) => color};
    margin:5px;
`;