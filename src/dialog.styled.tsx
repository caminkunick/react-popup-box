import { Dialog, DialogProps, Slide, SlideProps } from '@mui/material'
import React from 'react'

export const DialogStyled = (props: DialogProps) => (
  <Dialog
    fullWidth
    maxWidth='xs'
    TransitionComponent={Slide}
    TransitionProps={{ direction: 'down' } as SlideProps}
    {...props}
  />
)
