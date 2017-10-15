//@flow
import styled from 'styled-components/native'
import { palette } from 'Closies/app/__config/Theme'
import { Text } from 'Closies/app/components/__shared/Common.style'

export const Container = styled.View`
  border-top-width: 1px;
  border-top-color: ${palette.silver};
  padding: 15px 20px 10px 20px;
  flex-direction: row;
`
export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  borderRadius: 25px;
`
export const Content = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 0px 0px 0px 20px;
`
export const Name = styled.Text`
  color: ${palette.cerulean};
  font-size: 17px;
  font-weight: bold;
`
export const Body = styled(Text)`
  margin-top: 5px;
`
export const Footer = styled.View`
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
`
export const DateView = styled(Text)`
  font-size: 13px;
  color: ${palette.boulder};
`
export const CheckedAvatarContainer = styled.View`
  flex-direction: row;
`
export const CheckedAvatar = styled.Image`
  width: 20px;
  height: 20px;
  borderRadius: 10px;
  border-width: 0.2px;
  border-color: ${palette.boulder};
`
