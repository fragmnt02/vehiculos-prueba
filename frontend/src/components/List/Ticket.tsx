import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Image, Title, TextContainer } from './styles';
import { TicketModel } from '../../utils/models/Ticket';

export const Ticket = ({ description, brand, model, estimatedate, image, km, _id, working }: TicketModel) => {
    const history = useHistory();
    const [maintaining, setMaintaining] = useState(working)
    const [imageSrc, setImageSrc] = useState(image);
    const update = async () => {
        if (maintaining) {
            alert('Car maintainance finished, deleting ticket.')
            await fetch(`${process.env.REACT_APP_FETCH_URL}/tickets/${_id}`,{
                method:'DELETE'
            });
            window.location.reload(); 
            return;
        }
        alert('Starting car maintainance.');
        const body = {
            working: true
        };
        setMaintaining(true);
        const res = await fetch(`${process.env.REACT_APP_FETCH_URL}/tickets/${_id}`,{
            method:'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(body)
        });
        if (!res.ok) {
            setMaintaining(false);
            const data = await res.json();
            alert(`There was an error: ${data.message}`);
        }
    }

    return (
        <Card onClick={update} backgroundColor={maintaining}>
            <Image src={imageSrc} onError={() => setImageSrc('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq3ykgrvyQhgXuogNNjlvziP3X7nf88FiT6A&usqp=CAU')} />
            <Title color='black' size={25}>{`${model} - ${brand}`}</Title>
            <TextContainer>
                <div>Description: {description}</div>
                <div>Estimated Delivery Date: {estimatedate}</div>
                <div>{km || 'N/A'} kms.</div>
            </TextContainer>
        </Card>
    )
}