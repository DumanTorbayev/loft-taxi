import React from 'react';
import {Card} from "../UI/Card";
import {Button} from "../UI/Button";
import {useActions} from "../../hooks/useActions";

export const OrderConfirm = () => {
    const {setRoutes} = useActions()

    const onNewOrder = () => {
        setRoutes([])
    }

    return (
        <Card>
            <div className="order-confirm">
                <h2 className="order-confirm__title">Заказ размещен</h2>
                <p className="order-confirm__descr">
                    Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
                </p>
                <Button onClick={onNewOrder}>Сделать новый заказ</Button>
            </div>
        </Card>
    );
};