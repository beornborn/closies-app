//@flow
import styled from 'styled-components/native'
import { palette } from 'Closies/app/__config/Theme'
import { Text } from 'Closies/app/components/__shared/Common.style'

export const Container = styled.View`
  flex: 1;
  background-color: ${palette.white};
  padding: 20px;
`
export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 10px;
`
export const Header = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 0 0 20px;
`
export const Name = styled.Text`
  color: ${palette.cerulean};
  margin-top: 3px;
  font-size: 17px;
  font-weight: bold;
`
export const Created = styled(Text)`
  margin-top: 5px;
  font-size: 14px;
  color: ${palette.boulder};
  flex-grow: 1;
`
export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  borderRadius: 30px;
`
export const Content = styled(Text)`
  margin-top: 10px;
  font-size: 18px;
`
export const CheckedBy = styled.View`
  flex-direction: row;
`
export const CheckedByTitle = styled(Created)`
`
export const CheckedAvatarContainer = styled.View`
  flex: 10;
`
export const CheckedAvatar = styled.Image`
  margin-top: 5px;
  width: 20px;
  height: 20px;
  borderRadius: 10px;
`
