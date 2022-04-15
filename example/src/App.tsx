import React from 'react'

import { usePopup } from '@caminkunick/react-popup-box'
import '@caminkunick/react-popup-box/dist/index.css'
import { Button, Container, Stack } from '@mui/material'

const App = () => {
  const { Alerts } = usePopup()

  const handleAlert = () => {
    Alerts.alert('Alert', 'alert label')
  }
  const handleConfirm = () => {
    Alerts.confirm('Confirm', 'confirm label', () => console.log('confirm!'))
  }
  const handleRemove = () => {
    Alerts.remove('Remove', 'remove label', () => console.log('remove!'))
  }
  const handlePrompt = () => {
    Alerts.prompt(
      'Prompt',
      'prompt label',
      (value) => console.log(value),
      'default prompt'
    )
  }

  return (
    <Container maxWidth='xs' sx={{ py: 6 }}>
      <Stack spacing={1}>
        <Button variant='outlined' onClick={handleAlert}>
          Alert
        </Button>
        <Button variant='outlined' onClick={handleConfirm}>
          Confirm
        </Button>
        <Button variant='outlined' onClick={handleRemove}>
          Remove
        </Button>
        <Button variant='outlined' onClick={handlePrompt}>
          Prompt
        </Button>
      </Stack>
    </Container>
  )
}

export default App
