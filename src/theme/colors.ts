export type ColorScheme = {
  background: {
    bg: string
    bgOpacity: string
    cardBg: string
    inactiveOpacityBgOld: string
    input: string
    cardBgOpacity: string
    inactiveOpacityBg: string
    notificationBg: string
    basic: string
    selectModal: string
    disabled: string
  }
  text: {
    primary: string
    secondary: string
    tertiary: string
    whiteConst: string
    hint: string
    disabled: string
    blackConst: string
    reverseBW: string
  }
  branding: {
    primary: string
    primary66: string
    primary20: string
    primaryOnDarkBg: string
    primary30: string
    primaryGradient: string[]
    secondaryGradient: string[]
    tertiaryGradient: string[]
  }
  semantic: {
    danger: string
    success: string
    warning: string
    info: string
    info20: string
    warning2: string
    danger10: string
    success10: string
    success30: string
    warning10: string
  }
  outline: {
    cardOld: string
    inputBorder: string
    card: string
    avatar: Array<string>
  }
  underlay: {
    popup: string
  }
}

const darkColorScheme: ColorScheme = {
  background: {
    bg: '#151515',
    bgOpacity: 'rgba(9, 9, 9, 0.56)',
    cardBg: '#2A282C',
    inactiveOpacityBgOld: 'rgba(9, 9, 9, 0.36)',
    input: 'rgba(119, 124, 131, 0.1)',
    cardBgOpacity: 'rgba(73, 73, 73, 0.3)',
    inactiveOpacityBg: 'rgba(55, 55, 55, 0.36)',
    notificationBg: 'rgba(9, 9, 9, 0.8)',
    basic: '#2A282C',
    selectModal: '#1F1F20',
    disabled: 'rgba(179, 179, 179, 0.3)',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#E8E8E8',
    tertiary: '#B3B3B3',
    whiteConst: '#FFFFFF',
    hint: '#B3B3B3',
    disabled: '#5C5C5C',
    blackConst: '#181A1F',
    reverseBW: '#292D38',
  },
  branding: {
    primary: '#EB64AE',
    primary66: 'rgba(235, 100, 174, 0.66)',
    primary20: 'rgba(235, 100, 174, 0.2)',
    primary30: 'rgba(235, 100, 174, 0.3)',
    primaryOnDarkBg: '#FD97DD',
    primaryGradient: ['#FCAB87', '#FF3CBF'] as string[],
    secondaryGradient: ['#50ECB1', '#5999FB'] as string[],
    tertiaryGradient: ['#EB4FBB', '#81D0C5'] as string[],
  },
  semantic: {
    danger: '#DC5858',
    success: '#039F76',
    warning: '#FFAA00',
    info: '#0390F4',
    info20: 'rgba(0, 149, 255, 0.2)',
    warning2: 'rgba(255, 170, 0, 0.3)',
    danger10: 'rgba(220, 88, 88, 0.1)',
    success10: 'rgba(22, 200, 153, 0.1)',
    success30: 'rgba(22, 200, 153, 0.3)',
    warning10: 'rgba(255, 170, 0, 0.1)',
  },
  outline: {
    cardOld: '#292929',
    inputBorder: '#494949',
    avatar: ['#EB4FBB', '#C859DB', '#81D0C5'] as string[],
    card: '#393939',
  },
  underlay: {
    popup: 'rgba(0, 0, 0, 0.6)',
  },
}

const lightColorScheme: ColorScheme = {
  background: {
    bg: '#F5F3F5',
    bgOpacity: 'rgba(255, 255, 255, 0.82)',
    cardBg: '#FAFAFA',
    inactiveOpacityBgOld: 'rgba(226, 226, 226, 0.36)',
    input: 'rgba(119, 124, 131, 0.1)',
    cardBgOpacity: 'rgba(255, 255, 255, 0.95)',
    inactiveOpacityBg: 'rgba(226, 226, 226, 0.36)',
    notificationBg: 'rgba(255, 255, 255, 0.9)',
    basic: '#2A282C',
    selectModal: '#E8E7EA',
    disabled: 'rgba(179, 179, 179, 0.3)',
  },
  text: {
    primary: '#1F1F1F',
    secondary: '#636874',
    tertiary: '#838383',
    whiteConst: '#FFFFFF',
    hint: '#838383',
    disabled: '#A6A6A6',
    blackConst: '#292D38',
    reverseBW: '#FFFFFF',
  },
  branding: {
    primary: '#DA5EB3',
    primary66: 'rgba(235, 100, 174, 0.66)',
    primary20: 'rgba(235, 100, 174, 0.2)',
    primary30: 'rgba(235, 100, 174, 0.3)',
    primaryOnDarkBg: '#EB64AE',
    primaryGradient: ['#FDA889', '#FF3EBF'] as string[],
    secondaryGradient: ['#50ECB1', '##5999FB'] as string[],
    tertiaryGradient: ['#EB4FBB', '#81D0C5'] as string[],
  },
  semantic: {
    danger: '#DC5858',
    success: '#16C899',
    warning: '#FFAA00',
    info: '#0095FF',
    info20: 'rgba(0, 149, 255, 0.2)',
    warning2: 'rgba(255, 170, 0, 0.3)',
    danger10: 'rgba(220, 88, 88, 0.1)',
    success10: 'rgba(22, 200, 153, 0.1)',
    success30: 'rgba(22, 200, 153, 0.3)',
    warning10: 'rgba(255, 170, 0, 0.1)',
  },
  outline: {
    cardOld: '#FAFAFA',
    inputBorder: '#DEDFE2',
    avatar: ['#EB4FBB', '#C859DB', '#81D0C5'] as string[],
    card: '#f9f6f8',
  },
  underlay: {
    popup: 'rgba(0, 0, 0, 0.6)',
  },
}

export const colors = {
  transparent: 'rgba(0, 0, 0, 0)',
  white: '#FFFFFF',
  black: '#000000',
  dark: darkColorScheme,
  light: lightColorScheme,
  nftCardBg: 'rgba(255, 255, 255, 0.4)',
  nftCardBorder: 'rgba(255, 255, 255, 0.5)',
  blackConst: '#292D38',
  white50: 'rgba(255, 255, 255, 0.5)',
} as const
