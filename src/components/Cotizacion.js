import React from 'react';
import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    span{
        font-weight: bold;
    }
`;

const Info = styled.p`
    font-size: 18px;
    span{
        font-weight: bold;
    }
`;

const Precio = styled.p`
    font-size: 30px;
`;

const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0) return null;
    console.log(resultado);
    return ( 
        <ResultadoDiv>
            <Precio>El Precio es <span>{resultado.PRICE}</span> </Precio>
            <Info>El Precio mas alto del día <span>{resultado.HIGHDAY}</span> </Info>
            <Info>El Precio mas bajo del día <span>{resultado.LOWDAY}</span> </Info>
            <Info>Variación las últimas 24hr <span>{resultado.CHANGEPCT24HOUR}</span> </Info>
            <Info>Última actualización <span>{resultado.LASTUPDATE}</span> </Info>
        </ResultadoDiv>
     );
}
 
export default Cotizacion;