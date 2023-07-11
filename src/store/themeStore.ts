import proxyWithPersist, {
  PersistStrategy,
  ProxyPersistStorageEngine,
} from 'valtio-persist'
import { subscribeKey } from 'valtio/utils'
import {
  saveItemToLocalStorage,
  getItemFromLocalStorage,
  removeItemFromLocalStorage,
} from '../utils/storage'

export const gradients = {
  white: ['#FFFFFF', '#FFFFFF', '#FFFFFF'],
  default: ['#FCAB87', '#F771A4', '#FF3CBF'],
  pinkish: ['#FCAB87', '#F771A4', '#FF3CBF'],
  crimsonTide: ['#C6426E', '#C6426E', '#642B73'],
  orangeCoral: ['#ff9966', '#ff9966', '#ff5e62'],
  purpleRain: ['#AA44A2', '#7957B3', '#8482FF'],
  greenMeadows: ['#50ECB1', '#309E90', '#023D86'],
}

export type IGradientName = keyof typeof gradients

export const schemePrimaryColor: Record<IGradientName, string> = {
  white: '#FFFFFF',
  default: '#FF59B1',
  pinkish: '#FF59B1',
  crimsonTide: '#C6426E',
  orangeCoral: '#ff9966',
  purpleRain: '#9C5CC4',
  greenMeadows: '#2E9F9F',
}

export interface IThemeStore {
  colorScheme: 'dark' | 'light'
  setColorScheme: (colorScheme: 'dark' | 'light') => void
  gradientName: IGradientName
  setGradientName: (val: IGradientName) => void
  toggleColorScheme: () => void
}

const storage: ProxyPersistStorageEngine = {
  getItem: (name: string) => getItemFromLocalStorage(name) || '',
  setItem: (name: string, value: any) => saveItemToLocalStorage(name, value),
  removeItem: (name: string) => removeItemFromLocalStorage(name),
  getAllKeys: () => Promise.resolve(['']),
}

/**
 * connects and syncs async storage with valtio proxy states
 */
export const themeStore = proxyWithPersist<IThemeStore>({
  /**
   * name must be unique, files/paths will be created with this prefix
   */
  name: 'themeState',
  initialState: {
    colorScheme: 'dark',
    gradientName: 'default',
    setGradientName(val: IGradientName) {
      this.gradientName = val
    },
    toggleColorScheme() {
      if (this.colorScheme === 'dark') {
        this.colorScheme = 'light'
      } else {
        this.colorScheme = 'dark'
      }
    },
    setColorScheme(colorScheme) {
      this.colorScheme = colorScheme
    },
  },
  persistStrategies: PersistStrategy.SingleFile,
  version: 0,
  migrations: {},

  getStorage: () => storage,
})

subscribeKey(themeStore._persist, 'error', error => {
  if (error) {
    // eslint-disable-next-line no-console
    console.log({ valtioPersistError: error })
  }
})
