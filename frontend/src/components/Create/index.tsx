import React from 'react';
import { useState } from 'react';
import { Input, Title, PrimaryButton, Container, ButtonsContainer } from './styles';
import { SecondaryButton } from '../../utils/globalStyles';
import { useHistory } from 'react-router-dom';

export const Create = () => {
    const history = useHistory();
    const [description, setDescription] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [estimatedate, setEstimatedate] = useState('');
    const [image, setImage] = useState('');
    const [km, setKm] = useState(0);

    const submit = async () => {
        const body = {
            description,
            brand,
            model,
            estimatedate,
            image,
            km,
            working: false
        };
        const res = await fetch(`${process.env.REACT_APP_FETCH_URL}/tickets`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const data = await res.json();
        if (res.status === 201) {
            alert('Done');
            history.push('/');
        } else {
            alert(`There was an error: ${data.message}`);
        }
    }

    const cancel = () => {
        history.push('/');
    }

    return (
        <Container>
            <Title>Create ticket</Title>
            <div>Brand</div>
            <Input type='text' value={brand} onChange={event => setBrand(event.target.value)} placeholder='Nissan' />
            <div>Model</div>
            <Input type='text' value={model} onChange={event => setModel(event.target.value)} placeholder='Versa' />
            <div>Description</div>
            <Input type='text' value={description} onChange={event => setDescription(event.target.value)} placeholder='Change ligths' />
            <div>Estimate Date</div>
            <Input type='date' value={estimatedate} onChange={event => setEstimatedate(event.target.value)} />
            <div>Image (Link)</div>
            <Input type='text' value={image} onChange={event => setImage(event.target.value)} placeholder='http://3.23.108.188/cars/versa.jpg' />
            <div>Kilometers</div>
            <Input type='number' min='0' value={km} onChange={event => setKm(parseInt(event.target.value))} />
            <br/>
            <ButtonsContainer>
                <SecondaryButton onClick={cancel} color='rgba(0, 0, 0, 0.5)' border={false} >Cancel</SecondaryButton>
                <PrimaryButton onClick={submit}>Create</PrimaryButton>
            </ButtonsContainer>
        </Container>
    )
}