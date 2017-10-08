//@flow
import styled from 'styled-components/native'
import { palette } from 'Closies/app/__config/Theme'

export const Container = styled.View`
  padding: 20px;
`
export const CloseIconContainer = styled.View`
  position: absolute;
  right: 30px;
  top: 30px;
`
export const CloseIconStyle = {
  fontSize: 35,
  color: palette.black,
  backgroundColor: palette.white,
  padding: 0,
  margin: 0,
  borderRadius: 18
}
