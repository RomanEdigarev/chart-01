import styled from "styled-components";

export const ViewsContainer = styled.div`
display:flex;
justify-content: flex-end;
margin-bottom: 30px;
margin-left: 24px;

 @media screen and (max-width:  960px) {
    flex-direction: column;
    justify-content: flex-start;
    width: 348px;
    margin-bottom: 0px;
 }
 
 @media screen and (max-width:  414px) {
 width: 100%;
  flex-direction:row;
  justify-content: space-between;
  margin: 0 20px;
 }
`

export const ViewsBlock = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items: center;
    text-align: center;
    border-radius: 6px;
    margin-left: 24px;
    width: 100%;
    max-width: 240px;
    height: 112px;
    background-color: rgba(188, 154, 244, 0.3);
    
    @media screen and (max-width:  960px) {
      max-width: 100%;
      max-height: 92px;
      margin-bottom: 25px;
      margin-left: 0;
    }
    
    @media screen and (max-width:  960px) {
      max-width: 179px;
    }
   
`

export const ViewsTitle = styled.h1`
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 40px;
    
     @media screen and (max-width:  960px) {
     font-size: 21px;
     }
`

export const ViewsSubtitle = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 31px;
    color: #4B4B4B;
    
    @media screen and (max-width:  960px) {
     font-size: 15px;
     }
`

