import React, {FC, FormEvent, useState} from "react";
import {
    MoneyBlock,
    MoneyContainer,
    MoneyImg,
    MoneyInput,
    MoneyInputContainer,
    MoneyRub,
    MoneyTitle
} from "./Elements/Money";
import rub from "./Elements/union.svg";

type PropsType = {
    setViews : Function
    setSubs : Function
}
const MoneyComponent : FC<PropsType> = ({setSubs, setViews}) => {

    const [inputValue, setValue] = useState<string>('10000')

    const calculation = (value : string ) => {
        setValue(value)
        setViews(Math.floor(+value/1.1))
        setSubs(Math.floor(+value/100))
    }

   return (
       <MoneyContainer>
           <MoneyBlock>
               <MoneyTitle>
                   Введите сумму, чтобы увидеть прогноз по подписчикам и просмотрам
               </MoneyTitle>
               <MoneyInputContainer>
                   <MoneyImg src={rub}/>
                   <MoneyInput onChange={(e: FormEvent<HTMLInputElement>) => calculation(e.currentTarget.value)}
                               value={inputValue}
                               maxLength={7}
                   />
                   <MoneyRub>руб.</MoneyRub>
               </MoneyInputContainer>
           </MoneyBlock>
       </MoneyContainer>
   )
}

export default MoneyComponent