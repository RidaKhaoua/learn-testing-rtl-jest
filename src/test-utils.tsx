import React, {ReactElement} from 'react'
import {render, RenderOptions} from '@testing-library/react'
import AppProvders from './providers/AppProviders'



const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AppProvders, ...options})

export * from '@testing-library/react'
export {customRender as render}

