//@flow
import styled from 'styled-components/native'
import { palette } from 'Closies/app/__config/Theme'

export const Container = styled.View`
  padding: 20px 10px 10px 10px;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  margin-top: 40px;
  background-color: ${palette.white};
`
export const IconStyle = {
  color: palette.cerulean,
  fontSize: 35,
  marginRight: 15,
}
