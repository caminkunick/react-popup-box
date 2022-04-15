import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@mui/material'
import * as React from 'react'
import { stateTypes, useRPB } from './context'
import { DialogStyled } from './dialog.styled'

export interface PopupPromptProps {
  open: boolean
  onClose: () => void
  title: React.ReactNode
  label?: React.ReactNode
  onChange?: stateTypes['onChange']
  defaultValue?: stateTypes['defaultValue']
}
export const PopupPrompt = (props: PopupPromptProps) => {
  const { t } = useRPB()
  const [value, setValue] = React.useState('')

  const handleConfirm = () => {
    props?.onChange?.(value)
    props.onClose()
  }

  React.useEffect(() => {
    if (props.defaultValue) {
      setValue(props.defaultValue)
    }
  }, [props.defaultValue])

  return (
    <DialogStyled open={props.open} onClose={props.onClose}>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          fullWidth
          label={props.label}
          value={value}
          onChange={({ target: { value } }) => setValue(value)}
          sx={{ mt: 1 }}
        />
      </DialogContent>
      <DialogActions>
        <Button disabled={!Boolean(props.onChange)} onClick={handleConfirm}>
          {t('Confirm')}
        </Button>
        <Button color='error' onClick={props.onClose}>
          {t('Close')}
        </Button>
      </DialogActions>
    </DialogStyled>
  )
}
