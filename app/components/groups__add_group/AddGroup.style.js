//@flow
import styled from 'styled-components/native'
import { palette } from 'Closies/app/__config/Theme'
import { Text } from 'Closies/app/components/__shared/Common.style'

export const Container = styled.View`
  flex: 1;
  background-color: ${palette.white};
  padding: 20px;
`
export const Label = styled(Text)`
  font-size: 13px;
  padding-left: 5px;
  color: ${palette.boulder};
`
export const Or = styled(Text)`
  font-size: 20px;
  padding-top: 60px;
  padding-bottom: 30px;
  text-align: center;
`
export const InputStyle = {
  fontSize: 19,
}
