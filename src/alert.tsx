import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material'
import React, { ReactNode } from 'react'
import { useRPB } from './context'
import { DialogStyled } from './dialog.styled'

interface PopupAlertProps {
  open: boolean
  onClose: () => void
  title: ReactNode
  label?: ReactNode
}
export const PopupAlert = (props: PopupAlertProps) => {
  const { t } = useRPB()

  return (
    <DialogStyled open={props.open} onClose={props.onClose}>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{props.label}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose}>{t('OK')}</Button>
      </DialogActions>
    </DialogStyled>
  )
}
