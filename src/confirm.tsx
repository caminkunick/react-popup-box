import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material'
import * as React from 'react'
import { stateTypes, useRPB } from './context'
import { DialogStyled } from './dialog.styled'

export interface PopupConfirmProps {
  open: boolean
  onClose: () => void
  title: React.ReactNode
  label?: React.ReactNode
  onConfirm?: stateTypes['onConfirm']
}
export const PopupConfirm = (props: PopupConfirmProps) => {
  const { t } = useRPB()

  const handleConfirm = () => {
    props?.onConfirm?.()
    props.onClose()
  }

  return (
    <DialogStyled open={props.open} onClose={props.onClose}>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{props.label}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button disabled={!Boolean(props.onConfirm)} onClick={handleConfirm}>
          {t('Confirm')}
        </Button>
        <Button color='error' onClick={props.onClose}>
          {t('Close')}
        </Button>
      </DialogActions>
    </DialogStyled>
  )
}
