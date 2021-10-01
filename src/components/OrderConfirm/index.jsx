import React from 'react';
import {Card} from "../UI/Card";
import {Button} from "../UI/Button";
import {useActions} from "../../hooks/useActions";
import PropTypes from "prop-types";

export const OrderConfirm = ({styles}) => {
    const {setRoutes} = useActions()

    const onNewOrder = () => {
        setRoutes([])
    }

    return (
        <Card>
            <div className={styles.orderPopup}>
                <h2 className={styles.title}>Заказ размещен</h2>
                <p className={styles.descr}>
                    Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
                </p>
                <Button onClick={onNewOrder}>Сделать новый заказ</Button>
            </div>
        </Card>
    );
};

OrderConfirm.propTypes = {
    styles: PropTypes.object.isRequired
}