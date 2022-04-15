import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material'
import * as React from 'react'
import { useRPB } from './context'
import { DialogStyled } from './dialog.styled'

interface PopupRemoveProps {
  open: boolean
  onClose: () => void
  title: React.ReactNode
  label: React.ReactNode
  onConfirm?: () => void | Promise<void>
}
export const PopupRemove = (props: PopupRemoveProps) => {
  const { t } = useRPB()

  const handleConfirm = () => {
    props.onClose()
    props?.onConfirm?.()
  }

  return (
    <DialogStyled open={props.open} onClose={props.onClose}>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{props.label}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose}>{t('Cancel')}</Button>
        <Button color='error' onClick={handleConfirm}>
          {t('Remove')}
        </Button>
      </DialogActions>
    </DialogStyled>
  )
}
