import React, {FC, FormEvent} from "react";
import {
    MoneyBlock, MoneyContainer,
    MoneyDescription,
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

    const calculation = (value : string ) => {
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
                   <MoneyInput onChange={(e: FormEvent<HTMLInputElement>) => calculation(e.currentTarget.value)}/>
                   <MoneyRub>руб.</MoneyRub>
               </MoneyInputContainer>
           </MoneyBlock>
           <MoneyDescription>
               Прогноз подписчиков зависит от Вашего контента. Сделайте его интересным и старайтесь не снижайть
               планку
           </MoneyDescription>
       </MoneyContainer>
   )
}

export default MoneyComponent