import React from 'react';
import './index.scss';
import {Card} from "../../components/UI/Card";
import {ProfileForm} from "../../components/ProfileForm";
import {useSelector} from "react-redux";
import {Button} from "../../components/UI/Button";
import {useHistory} from "react-router-dom";
import {useActions} from "../../hooks/useActions";
import {getIsSuccess} from "../../store/selectors";

export const Profile = () => {
    const isSuccess = useSelector(state => getIsSuccess(state.profile))
    const history = useHistory()
    const {setSuccess} = useActions()

    return (
        <div className="profile">
            <div className={!isSuccess ? 'profile__form-container' : 'profile__alert'}>
                <Card>
                    <div className="profile__content">
                        <h2 className="profile__title">Профиль</h2>
                        <p className="profile__description">
                            {!isSuccess
                                ? 'Ввдеите платежные данные'
                                : 'Платёжные данные обновлены. Теперь вы можете заказывать такси.'
                            }
                        </p>
                        {!isSuccess
                            ? <ProfileForm/>
                            : <Button onClick={() => {
                                history.push('/main/order')
                                setSuccess(false)
                            }}>
                                Перейти на карту
                            </Button>
                        }
                    </div>
                </Card>
            </div>
        </div>
    );
};