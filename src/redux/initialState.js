import {defaultStyles, defaultTitle} from '@/constants'
import {clone} from '../core/util'

const defaultState = {
  title: defaultTitle,
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  currentStyles: defaultStyles,
  openedDate: new Date().toJSON()
}

const normalize = state => ({
  ...state,
  currentStyles: defaultStyles,
  currentText: ''

})

export function normilizeInitialState(state) {
  return state ? normalize(state) : clone(defaultState)
}
