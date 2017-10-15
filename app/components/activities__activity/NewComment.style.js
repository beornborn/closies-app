//@flow
import styled from 'styled-components/native'
import { palette } from 'Closies/app/__config/Theme'
import MUIIconSource from 'react-native-vector-icons/MaterialCommunityIcons'

export const Container = styled.View`
  flex-direction: row;
  border-top-width: 1px;
  border-top-color: ${palette.cerulean};
  padding: 3px 20px;
  align-items: center;
`
export const InputStyle = {
  fontSize: 18,
  flex: 1,
  textAlignVertical: 'top',
  paddingRight: 10,
}
export const MUIIcon = styled(MUIIconSource)`
  font-size: 35px;
  color: ${props => props.disabled ? palette.boulder : palette.cerulean};
  border-radius: 18px;
`
