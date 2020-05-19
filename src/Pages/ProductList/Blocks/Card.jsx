import React, { useState } from 'react';
import { Card as CardComponent } from 'antd';
import { Link } from 'react-router-dom'

const { Meta } = CardComponent;

export const Card = ({ el }) => {

    const [qty, setQty] = useState(0)

    function add() {
        setQty(qty + 1);
    }

    function subtract() {
        if (qty > 0) {
            setQty(qty - 1);
        }
    }

    return (

        <div>
            <CardComponent
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={el.image} style={{ minHeight: '320px' }} />}
            >
                <Link to="/details"><Meta title={el.name} /></Link>
            </CardComponent>
            <p>Вы добавили {qty} раз(а)</p>
            <button onClick={add}>
                + Add
                   </button>

            <button onClick={subtract}>
                - Remove
            </button>
        </div>
    );
}