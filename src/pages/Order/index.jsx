import React, {useState} from 'react'
import styles from './order.module.scss'
import {OrderForm} from '../../components/OrderForm'
import {useActions} from '../../hooks/useActions'
import {useSelector} from 'react-redux'
import {OrderConfirm} from '../../components/OrderConfirm'
import {Card} from '../../components/UI/Card'
import {Button} from '../../components/UI/Button'
import {useHistory} from 'react-router-dom'
import Constant from '../../constants'
import {getCard, getCoordinates, getError} from '../../store/selectors'
import {MapContainer} from '../../components/MapContainer'
import {routesPath} from '../../components/RootRouter'
import {CustomPortal} from '../../components/UI/CustomPortal'
import {Alert} from '@material-ui/lab'

export const Order = () => {
  const {sagaFetchAddresses, sagaFetchCard} = useActions()
  const coordinates = useSelector((state) => getCoordinates(state.order))
  const addressError = useSelector((state) => getError(state.order))
  const card = useSelector((state) => getCard(state.profile))
  const cardError = useSelector((state) => getError(state.profile))
  const history = useHistory()

  useState(() => {
    sagaFetchAddresses()
    sagaFetchCard()
  }, [])

  const handleClick = () => {
    history.push(routesPath.profile)
  }

  return (
    <>
      <MapContainer>
        <div className={styles.container}>
          {card || localStorage.getItem(Constant.IS_CARD) ? (
            coordinates.length === 0 ? (
              <OrderForm />
            ) : (
              <OrderConfirm styles={styles} />
            )
          ) : (
            <Card>
              <div className={styles.orderPopup}>
                <h2 className={styles.title}>Заполните профиль</h2>
                <p className={styles.descr}>
                  У Вас в профиле на заполнены данные по карте. После
                  заполнения, Вы сможете заказать такси
                </p>
                <Button onClick={handleClick}>Перейти в профиль</Button>
              </div>
            </Card>
          )}
        </div>
      </MapContainer>
      {addressError && (
        <CustomPortal>
          <Alert severity="error">{addressError}</Alert>
        </CustomPortal>
      )}
      {cardError && (
        <CustomPortal>
          <Alert severity="error">{cardError}</Alert>
        </CustomPortal>
      )}
    </>
  )
}
