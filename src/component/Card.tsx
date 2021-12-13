import React, {FC, useState} from 'react';

interface CardProps {
    width?: string,
    height?: string,
    background?: string,
    margin?: string,
    onClick: (num: number) => void
}

const Card: FC<CardProps> = ({
                                 width,
                                 height,
                                 onClick
                             }) => {
    const [num, setNum] = useState(0);
    return (
        <div
            onClick={() => onClick(num)}
            style={{width, height, border: '1px solid teal'}}
        >

        </div>
    );
};

export default Card;