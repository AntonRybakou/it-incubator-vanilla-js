import React from 'react';
import {ManType} from "./destructuring.test";

export type ManComponentPropsType = {
    title: string,
    man: ManType,
}

export const ManComponent: React.FC<ManComponentPropsType> = ({title, man: {name}, ...props}) => {
    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {name}
            </div>
        </div>
    );
}