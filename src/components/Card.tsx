import React, {FC, useState} from 'react';

export enum variantsSet {
    bordered = 'bordered',
    primary = 'primary'
}

interface CardInterface {
    width?: number;
    height?: number;
    someVariant: variantsSet;
    onClick: (arg: number) => void;
}

const Card: FC<CardInterface> =
    ({
         width,
         height,
         someVariant,
         onClick,
         children
    }) => {

    const [state, setState] = useState(0);

    return (
        <div style={{
                        width,
                        height,
                        backgroundColor: someVariant === variantsSet.primary ? "bisque" : "lightgray",
                        border: someVariant === variantsSet.bordered ? "1px solid black" : "none"
                    }}
            onClick={() => onClick(state)}
        >
            {children}
        </div>
    );
};

export default Card;