import React, { useState } from 'react';
import { Card as CardComponent } from 'antd';
import ReactCardFlip from 'react-card-flip';
import { Link } from 'react-router-dom'

const { Meta } = CardComponent;

export const Card = ({ el }) => {
    //const [isFlipped, changeFlipped] = useState(false)
    const [qty, setQty] = useState(0)

    const setQty = () => {
        console.log('qty', qty)
        changeQty(!isAdded)
    }
    /*const onChangeFlipped =()=> {
        console.log('isFlipped', isFlipped)
        changeFlipped(!isFlipped)
    }*/
    return (
        /*
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <CardComponent
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={el.image} style={{ minHeight: '320px' }} />}
                onClick={onChangeFlipped}
            >
                <Link to="/details"><Meta title={el.name} /></Link>
            </CardComponent>

            <CardComponent
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={el.image} style={{ minHeight: '320px' }} />}
                onClick={onChangeFlipped}
            >
                <Link to="/details"><Meta title={"back side"} /></Link>
            </CardComponent>
        </ReactCardFlip>
        */

        <div>
            <p>Вы добавили {qty} раз(а)</p>
            <button onClick={() => add(qty + 1)}>
                +
                   </button>
        </div>

        <div>
            <p>Вы добавили {qty} раз(а)</p>
            <button onClick={() => add(qty + 1)}>
                +
</button>
        </div>

            

    );
}