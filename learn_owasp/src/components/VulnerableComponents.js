import React from 'react';
import styled from "styled-components";

const TitleStyle = styled.div`
h1{
    text-align: center; 
}
`

const VulnerableComponents = () => {
    return <TitleStyle>
    <h1>Using Components with Known Vulnerabilities</h1>
        </TitleStyle>  
};

export default VulnerableComponents; 