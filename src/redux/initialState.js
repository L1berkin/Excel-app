import {defaultStyles, defaultTitle} from '@/constants'
import {storage} from '@core/util'

const defaultState = {
  title: defaultTitle,
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  currentStyles: defaultStyles
}

const normalize = state => ({
  ...state,
  currentStyles: defaultStyles,
  currentText: ''

})

export const initialState = storage('excel-state')
  ? normalize(storage('excel-state'))
  : defaultState
