//@flow
import styled from 'styled-components/native'
import { palette } from 'Closies/app/__config/Theme'
import { Text } from 'Closies/app/components/shared/Common.style'

export const Container = styled.View`
  background-color: ${palette.white};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
`
export const Label = styled(Text)`
  font-size: 13px;
  padding-left: 5px;
  color: ${palette.boulder};
`
export const InputStyle = {
  fontSize: 19,
}
