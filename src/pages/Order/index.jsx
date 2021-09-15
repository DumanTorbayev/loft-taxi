import React, {useState} from 'react';
import './index.scss';
import {OrderForm} from "../../components/OrderForm";
import {useActions} from "../../hooks/useActions";
import {useSelector} from "react-redux";
import {OrderConfirm} from "../../components/OrderConfirm";
import {Card} from "../../components/UI/Card";
import {Button} from "../../components/UI/Button";
import {useHistory} from "react-router-dom";
import CONSTANTS from "../../constants";
import {getCard, getCoordinates} from "../../store/selectors";

export const Order = () => {
    const {fetchAddressList, fetchCard} = useActions()
    const coordinates = useSelector(state => getCoordinates(state.order))
    const card = useSelector(state => getCard(state.profile))
    const history = useHistory()

    useState(() => {
        fetchAddressList()
        fetchCard()
    }, [])

    return (
        <div className="order">
            {card || localStorage.getItem(CONSTANTS.IS_CARD)
                ? coordinates.length === 0
                    ? <OrderForm/>
                    : <OrderConfirm/>
                : <Card>
                    <div className="order-add">
                        <h2 className="order-add__title">Заполните профиль</h2>
                        <p className="order-add__descr">
                            У Вас в профиле на заполнены данные по карте. После заполнения, Вы сможете заказать такси
                        </p>
                        <Button onClick={() => history.push('/main/profile')}>Перейти в профиль</Button>
                    </div>
                </Card>
            }
        </div>
    );
};