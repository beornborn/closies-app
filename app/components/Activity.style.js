//@flow
import styled from 'styled-components/native'
import { palette } from 'Closies/app/__config/Theme'

export const Container = styled.View`
  flex: 1;
  background-color: ${palette.white};
  padding: 20px;
`
export const AvatarContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`
export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  borderRadius: 50px;
`
