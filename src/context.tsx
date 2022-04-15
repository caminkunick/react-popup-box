import * as React from 'react'

export type PopupTypes = 'alert' | 'confirm' | 'remove' | 'prompt'

export interface stateTypes {
  type: PopupTypes | ''
  title: React.ReactNode
  label: React.ReactNode
  onConfirm?: () => void | Promise<void>
  onChange?: (value: string) => void | Promise<void>
  defaultValue?: string
}

export interface PopupProviderProps {
  children?: React.ReactNode
  translate?: (text: string, dict?: { [key: string]: string }) => string
}

export interface PopupContextTypes
  extends Pick<PopupProviderProps, 'translate'> {
  state: stateTypes
  setState: React.Dispatch<React.SetStateAction<stateTypes>>
  Alerts: {
    alert: (title: React.ReactNode, label: React.ReactNode) => void
    confirm: (
      title: string,
      label: string,
      onConfirm: () => void | Promise<void>
    ) => void
    remove: (
      title: string,
      label: string,
      onConfirm: () => void | Promise<void>
    ) => void
    prompt: (
      title: string,
      label: string,
      onChange: (value: string) => void | Promise<void>,
      defaultValue?: string
    ) => void
  }
  t: (text: string, dict?: { [key: string]: string }) => string
}
export const PopupContext = React.createContext<PopupContextTypes>({
  state: {
    type: '',
    title: '',
    label: ''
  },
  setState: () => {},
  Alerts: {
    alert: () => {},
    confirm: () => {},
    remove: () => {},
    prompt: () => {}
  },
  t: () => ''
})

export const useRPB = () => React.useContext(PopupContext)
