import {Page} from '@core/Page';
import {Excel} from '@/components/excel/Excel'
import {Table} from '@/components/table/Table';
import {Header} from '@/components/header/Header';
import {Formula} from '@/components/formula/Formula';
import {Toolbar} from '@/components/toolbar/Toolbar';
import {rootReducer} from '@/redux/rootReducer';
import {createStore} from '@core/createStore';
import {storage, debounce} from '@core/util';
import {normilizeInitialState} from '@/redux/initialState';

function storageName(param) {
  return 'excel:' + param
}

export class ExcelPage extends Page {
  getRoot() {
    const params = this.params ? this.params : Date.now().toString()

    const state = storage(storageName(params))
    const initialState = normilizeInitialState(state)
    const store = createStore(rootReducer, initialState)

    const stateListener = debounce(state => {
      storage(storageName(params), state)
    }, 400)

    store.subscribe(stateListener)

    this.excel = new Excel({
      components: [Header, Toolbar, Formula, Table],
      store
    })

    return this.excel.getRoot()
  }

  afterRender() {
    this.excel.init()
  }

  destroy() {
    this.excel.destroy()
  }
}
