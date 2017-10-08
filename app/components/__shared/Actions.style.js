//@flow
import styled from 'styled-components/native'
import { palette } from 'Closies/app/__config/Theme'
import MUIIconSource from 'react-native-vector-icons/MaterialCommunityIcons'

export const Container = styled.View`
  margin-right: 15px;
  flex-direction: row;
`
export const MUIIcon = styled(MUIIconSource)`
  font-size: 35px;
  color: ${props => props.disabled ? palette.boulder : palette.cerulean};
  border-radius: 18px;
`
export const TextButton = styled.Text`
  color: ${props => props.disabled ? palette.boulder : palette.cerulean};
  font-size: 18px;
`
