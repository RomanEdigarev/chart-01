import React from "react";
import styled from 'styled-components';

export const MoneyContainer = styled.div`
  display: flex;
  flex-direction:column;
`

export const MoneyBlock = styled.div`
    display:flex;
    flex-direction:column;
    width: 590px;
    height: 209px;
    background-color: #E2E5EE;
    border-radius: 6px;
    padding: 30px 50px;
    flex-wrap: wrap;
    margin-bottom: 30px;
`

export const MoneyTitle = styled.h2`
    display:block;
    width: 358px;
    margin-bottom: 40px;
    font-family: PT Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #212121;
`

export const MoneyInputContainer = styled.div`
  display:flex;
  flex-direction:row;
  align-items: center;
`

export const MoneyImg = styled.img`
display: block;
  width: 30px;
  height: 30px;
  border-radius: 100px;
  border: 1px solid #7045C4;
  padding: 4px;
`

export const MoneyInput = styled.input`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  width: 308px;
  height: 44px;
  border-radius: 6px;
  padding: 10px 20px;
  border: none;
  margin: 0 20px;
  
  &:focus {
    outline: none;
    border: 1px solid #7045C4;
  }
`

export const MoneyRub = styled.span`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #212121;
`
export const MoneyDescription = styled.p`
    max-width: 590px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: 0.02em;
    color: #717171;
`
