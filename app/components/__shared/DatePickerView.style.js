//@flow
import styled from 'styled-components/native'
import { palette } from 'Closies/app/__config/Theme'
import MUIIconSource from 'react-native-vector-icons/MaterialCommunityIcons'

export const Container = styled.View`
  padding: 15px 20px;
  flex-direction: row;
  align-items: center;
`
export const MUIIcon = styled(MUIIconSource)`
  font-size: 35px;
  color: ${palette.mineshaft};
  border-radius: 18px;
`
