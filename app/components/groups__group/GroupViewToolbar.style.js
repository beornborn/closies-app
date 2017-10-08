//@flow
import styled from 'styled-components/native'
import { palette } from 'Closies/app/__config/Theme'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export const Container = styled.View`
  margin-right: 15px;
`
export const Invite = styled.Text`
  color: ${props => props.disabled ? palette.boulder : palette.cerulean};
  font-size: 18px;
`
export const Toolbar = styled.View`
  flex-direction: row;
`
export const DeleteIcon = styled(Icon)`
  font-size: 25px;
`
