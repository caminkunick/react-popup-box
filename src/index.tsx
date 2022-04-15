import * as React from 'react'
import { PopupAlert } from './alert'
import { PopupConfirm } from './confirm'
import { PopupContext, PopupProviderProps, stateTypes } from './context'
import { PopupPrompt } from './prompt'
import { PopupRemove } from './remove'

export { PopupProviderProps } from './context'

export const usePopup = () => {
  const { Alerts } = React.useContext(PopupContext)
  return { Alerts }
}

export const PopupProvider = (props: PopupProviderProps) => {
  const [state, setState] = React.useState<stateTypes>({
    type: '',
    title: '',
    label: ''
  })

  const handleClose = () => setState((s) => ({ ...s, type: '' }))
  const t = (text: string) => props.translate?.(text) || text

  const Alerts = {
    alert: (title: string, label: string) => {
      setState({ type: 'alert', title, label })
    },
    confirm: (
      title: string,
      label: string,
      onConfirm: () => void | Promise<void>
    ) => {
      setState({ type: 'confirm', title, label, onConfirm })
    },
    remove: (
      title: string,
      label: string,
      onConfirm: () => void | Promise<void>
    ) => {
      setState({ type: 'remove', title, label, onConfirm })
    },
    prompt: (
      title: string,
      label: string,
      onChange: (value: string) => void | Promise<void>,
      defaultValue?: string
    ) => {
      setState({ type: 'prompt', title, label, onChange, defaultValue })
    }
  }

  return (
    <PopupContext.Provider value={{ ...props, state, setState, Alerts, t }}>
      {props.children}
      <PopupAlert
        open={state.type === 'alert'}
        onClose={handleClose}
        title={state.title}
        label={state.label}
      />
      <PopupConfirm
        open={state.type === 'confirm'}
        onClose={handleClose}
        title={state.title}
        label={state.label}
        onConfirm={state.onConfirm}
      />
      <PopupRemove
        open={state.type === 'remove'}
        onClose={handleClose}
        title={state.title}
        label={state.label}
        onConfirm={state.onConfirm}
      />
      <PopupPrompt
        open={state.type === 'prompt'}
        onClose={handleClose}
        title={state.title}
        label={state.label}
        onChange={state.onChange}
        defaultValue={state.defaultValue}
      />
    </PopupContext.Provider>
  )
}
