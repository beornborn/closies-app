//@flow
import styled from 'styled-components/native'
import { palette } from 'Closies/app/__config/Theme'
import { Text } from 'Closies/app/components/shared/Common.style'

export const Container = styled.View`
  flex-direction: row;
  padding: 15px 20px;
  border-bottom-color: ${palette.silver};
  border-bottom-width: 1px;
  align-items: center;
`
export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  borderRadius: 25px;
`
export const Name = styled(Text)`
  margin-left: 20px;
`
export const Admin = styled(Text)`
  color: ${palette.cerulean};
`
