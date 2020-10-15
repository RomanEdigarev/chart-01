import React, {FC} from "react";
import {ViewsBlock, ViewsContainer, ViewsSubtitle, ViewsTitle} from "./Elements/Views";

type PropsType = {
    views : number
    subs : number
}
const ViewsComponent : FC<PropsType> = ({views,subs}) => {








    return (
        <ViewsContainer>
            <ViewsBlock>
                <ViewsTitle>{`+${views.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')}`}</ViewsTitle>
                <ViewsSubtitle>просмотров</ViewsSubtitle>
            </ViewsBlock>
            <ViewsBlock>
                <ViewsTitle>{`+${subs}`}</ViewsTitle>
                <ViewsSubtitle>подписчиков</ViewsSubtitle>
            </ViewsBlock>
        </ViewsContainer>
    );
};

export default ViewsComponent;