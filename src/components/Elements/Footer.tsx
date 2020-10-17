import styled from "styled-components";

export const Footer = styled.p`
    position: absolute;
    left: 0;
    bottom: 0;
    max-width: 590px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: 0.02em;
    color: #717171;
    
    @media screen and (max-width: 960px) {
      position: relative;
      margin-top: 30px;
      margin-left: 20px;
    }
`
