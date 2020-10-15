import React from 'react';
import './App.scss';
import {Container} from "./components/Elements/Container";
import {Title} from "./components/Elements/Title";
import {Subtitle} from "./components/Elements/Subtitle";
import {ViewsBlock, ViewsContainer, ViewsSubtitle, ViewsTitle} from "./components/Elements/Views";
import {
    MoneyBlock, MoneyContainer,
    MoneyDescription,
    MoneyImg,
    MoneyInput,
    MoneyInputContainer,
    MoneyRub,
    MoneyTitle
} from "./components/Elements/Money";
import rub from './components/Elements/union.svg'
import Chart from "./components/ChartComponent/Chart";


function App() {
    return (
        <div className="app__container">
            {/*<Chart/>*/}
            <Title>
                Прогноз продвижения
            </Title>
            <Container>
                <Subtitle>
                    Мы пользуемся только официальными инструментами рекламы, рекомендуемыми самим YouTube,
                    поэтому все приведенные нами просмотры, лайки и комментарии будут настоящими,
                    а подписчики живыми и заинтересованными в тематике Вашего канала
                </Subtitle>
                <ViewsContainer>
                    <ViewsBlock>
                        <ViewsTitle>+9 090</ViewsTitle>
                        <ViewsSubtitle>просмотров</ViewsSubtitle>
                    </ViewsBlock>
                    <ViewsBlock>
                        <ViewsTitle>+100</ViewsTitle>
                        <ViewsSubtitle>подписчиков</ViewsSubtitle>
                    </ViewsBlock>
                </ViewsContainer>
            </Container>

            <Container>
                <MoneyContainer>
                    <MoneyBlock>
                        <MoneyTitle>
                            Введите сумму, чтобы увидеть прогноз по подписчикам и просмотрам
                        </MoneyTitle>
                        <MoneyInputContainer>
                            <MoneyImg src={rub}/>
                            <MoneyInput/>
                            <MoneyRub>руб.</MoneyRub>
                        </MoneyInputContainer>
                    </MoneyBlock>
                    <MoneyDescription>
                        Прогноз подписчиков зависит от Вашего контента. Сделайте его интересным и старайтесь не снижайть
                        планку
                    </MoneyDescription>
                </MoneyContainer>
                <Chart/>
            </Container>
        </div>
    );
}

export default App;
