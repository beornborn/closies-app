//@flow
import styled from 'styled-components/native'
import { absoluteFill, Text } from 'Closies/app/components/shared/Common.style'
import { palette } from 'Closies/app/__config/Theme'

export const Container = styled.View`
  ${absoluteFill}
  background-color: ${palette.white};
`
export const HeaderContainer = styled.View`
  margin-top: 20px;
  align-items: center;
`
export const Body = styled.View`
  margin-top: 20px;
  padding: 20px;
`
export const Contact = styled.View`
  flex-direction: row;
  align-items: center;
  height: 50px;
`
export const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  borderRadius: 60px;
`
export const Name = styled(Text)`
  margin-top: 20px;
  font-size: 19px;
`
export const ContactAddress = styled(Text)`
  font-size: 16px;
  margin-left: 20px;
`
export const IconStyle = {
  color: palette.cerulean,
  fontSize: 35,
}
