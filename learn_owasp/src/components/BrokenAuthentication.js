import React from 'react';
import styled from "styled-components";

const TitleStyle = styled.div`
html, body{
    height: 100%;
}
flex-grow: 100;  
h1{
    text-align: center; 
}
`

const BrokenAuthentication = () => {
    return <TitleStyle>
    <h1>Broken Authentication</h1>
        </TitleStyle>  
};

export default BrokenAuthentication; 