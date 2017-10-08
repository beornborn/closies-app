//@flow
import styled from 'styled-components/native'
import { palette } from 'Closies/app/__config/Theme'

export const AbsoluteContainer = styled.View`
  background-color: ${palette.white};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
export const InputStyle = {
  fontSize: 25,
  padding: 25,
  textAlignVertical: 'top'
}
