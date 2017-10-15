//@flow
import { css } from 'styled-components'
import styled from 'styled-components/native'
import { palette } from 'Closies/app/__config/Theme'

export const absoluteFill = css`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`
export const debug = css`
  border: 1px #000;
`
export const Container = styled.View`
  ${absoluteFill}
  background-color: ${palette.white};
`
export const Text = styled.Text`
  color: ${palette.mineshaft};
  font-size: 16px;
`
export const AccentText = styled(Text)`
  color: ${palette.cerulean};
`
export const Spacer = styled.View`
  flex: 1;
`
