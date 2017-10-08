//@flow
import styled from 'styled-components/native'
import { palette } from 'Closies/app/__config/Theme'

export const Container = styled.View`
  margin-right: 15px;
  flex-direction: row;
`
export const Post = styled.Text`
  color: ${props => props.disabled ? palette.boulder : palette.cerulean};
  font-size: 18px;
`
