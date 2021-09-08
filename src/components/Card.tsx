import React from 'react';

interface CardInterface {
    width?: number;
    height?: number;
    children?: React.ReactChild | React.ReactNode;
}

const Card = ({width, height, children}:CardInterface) => {
    return (
        <div style={{width, height, backgroundColor: "bisque"}}>
            {children}
        </div>
    );
};

export default Card;