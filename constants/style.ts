import type { ImageStyle, TextStyle, ViewStyle } from 'react-native'
import { StyleSheet } from 'react-native'

const xs = 3.25
const sm = 7.5
const md = 15
const lg = 17
const xl = 20
const xxl = 25

const base = {
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
} as const

type TBase = keyof typeof base
type TSM = keyof ViewStyle | keyof TextStyle | keyof ImageStyle | ''
type TStyle = ViewStyle | TextStyle | ImageStyle

function c(namespace: TSM) {
  const result: Record<TBase, TStyle> = {} as Record<TBase, TStyle>
  for (const key in base) {
    result[key as TBase] = { [namespace]: base[key as TBase] }
  }

  return StyleSheet.create(result)
}

const m = c('margin')
const mt = c('marginTop')
const mr = c('marginRight')
const mb = c('marginBottom')
const ml = c('marginLeft')
const mx = c('marginHorizontal')
const my = c('marginVertical')

const p = c('padding')
const pt = c('paddingTop')
const pr = c('paddingRight')
const pb = c('paddingBottom')
const pl = c('paddingLeft')
const px = c('paddingHorizontal')
const py = c('paddingVertical')

const round = c('borderRadius')
const round_r = c('borderTopRightRadius')
const round_l = c('borderTopLeftRadius')
const round_b = c('borderBottomLeftRadius')
const round_t = c('borderBottomRightRadius')

const o = c('opacity')

const lh = c('lineHeight')

const { b_r, b, b_b, b_l, b_t } = StyleSheet.create({
  b: {
    borderWidth: 1,
  },
  b_r: {
    borderRightWidth: 1,
  },
  b_t: {
    borderTopWidth: 1,
  },
  b_l: {
    borderLeftWidth: 1,
  },
  b_b: {
    borderBottomWidth: 1,
  },
})

const fs = StyleSheet.create({
  xs: {
    fontSize: 10,
  },
  sm: {
    fontSize: 12,
  },
  md: {
    fontSize: 14,
  },
  lg: {
    fontSize: 16,
  },
  xl: {
    fontSize: 18,
  },
  xxl: {
    fontSize: 20,
  },
})

const { flex, alignCenter, center, alignEnd, alignStart, around, between, evenly, end, start, baseline, stretch } = StyleSheet.create({
  flex: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
  },
  end: {
    justifyContent: 'flex-end',
  },
  start: {
    justifyContent: 'flex-start',
  },
  between: {
    justifyContent: 'space-between',
  },
  around: {
    justifyContent: 'space-around',
  },
  evenly: {
    justifyContent: 'space-evenly',
  },

  alignCenter: {
    alignItems: 'center',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  baseline: {
    alignItems: 'baseline',
  },
  stretch: {
    alignItems: 'stretch',
  },
})

function b_c(color: string) {
  return { borderColor: color }
}

const shadow = c('shadowOpacity')
const shadow_r = c('shadowRadius')
const offset = c('shadowOffset')

const { absolute, relative, static: _static } = StyleSheet.create({
  absolute: {
    position: 'absolute',
  },
  static: {
    position: 'static',
  },
  relative: {
    position: 'relative',
  },
})

export {
  _static,
  absolute,
  alignCenter
  ,
  alignEnd,
  alignStart,
  around,
  b,
  b_b,
  b_c,
  b_l,
  b_r,
  b_t,
  baseline,
  between,
  center,
  end,
  evenly,
  flex,
  fs,
  lh,
  m,
  mb,
  ml,
  mr,
  mt,
  mx,
  my,
  o,
  offset,
  p,
  pb,
  pl,
  pr,
  pt,
  px,
  py,
  relative,
  round,
  round_b,
  round_l,

  round_r,
  round_t,
  shadow,
  shadow_r,
  start,
  stretch,
}
