import React from 'react'
import styles from './profile.module.scss'
import {Card} from '../../components/UI/Card'
import {ProfileForm} from '../../components/ProfileForm'
import {useSelector} from 'react-redux'
import {Button} from '../../components/UI/Button'
import {useHistory} from 'react-router-dom'
import {useActions} from '../../hooks/useActions'
import {getIsSuccess} from '../../store/selectors'
import {routesPath} from '../../components/RootRouter'

export const Profile = () => {
  const isSuccess = useSelector((state) => getIsSuccess(state.profile))
  const history = useHistory()
  const {setSuccess} = useActions()

  const moveToMainPage = () => {
    history.push(routesPath.order)
    setSuccess(false)
  }

  return (
    <div className={styles.profile}>
      <Card>
        <div className={styles.content}>
          <h2 className={styles.title}>Профиль</h2>
          <p className={styles}>
            {!isSuccess
              ? 'Ввдеите платежные данные'
              : 'Платёжные данные обновлены. Теперь вы можете заказывать такси.'}
          </p>
          {!isSuccess ? (
            <ProfileForm />
          ) : (
            <Button onClick={moveToMainPage}>Перейти на карту</Button>
          )}
        </div>
      </Card>
    </div>
  )
}
