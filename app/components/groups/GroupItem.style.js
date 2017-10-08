//@flow
import styled from 'styled-components/native'
import { palette } from 'Closies/app/__config/Theme'
import { Text as CommonText } from 'Closies/app/components/shared/Common.style'

export const Container = styled.View`
  flex-direction: row;
  padding: 20px;
  background-color: ${props => props.selected ? palette.cerulean : palette.white};
`
export const Text = styled(CommonText)`
  color: ${props => props.selected ? palette.white : palette.mineshaft};
`
export const Type = styled(Text)`
  width: 60px;
`
