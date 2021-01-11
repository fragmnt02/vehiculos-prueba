import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, TicketsContainer, TitleContainer, Title, Text } from './styles';
import { SecondaryButton } from '../../utils/globalStyles';
import { Ticket } from './Ticket';
import { TicketModel } from '../../utils/models/Ticket';

export const List = () => {
    const history = useHistory();
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`${process.env.REACT_APP_FETCH_URL}/tickets`);
            if (res.ok) {
                const data = await res.json();
                setTickets(data);
            }
        }
        fetchData();
    }, []);

    const create = () => {
        history.push('/create');
    }

    return (
        <Container>
            <TitleContainer>
                <Title color="white" size={32}>List tickets</Title>
                <SecondaryButton onClick={create} color="white" border={true} >Create ticket</SecondaryButton>
                <Text color='white'>Click on card to start maintainance</Text>
            </TitleContainer>
            <TicketsContainer>
                {
                    tickets.map((ticket: TicketModel, index: number) => <Ticket key={index} {...ticket} />)
                }
            </TicketsContainer>
        </Container>
    )
}