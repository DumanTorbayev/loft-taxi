import React from 'react'
import {AuthLayout} from '../../components/AuthLayout'
import {Card} from '../../components/UI/Card'
import {LoginForm} from '../../components/LoginForm'

export const Login = () => {
  return (
    <AuthLayout>
      <Card>
        <LoginForm />
      </Card>
    </AuthLayout>
  )
}
