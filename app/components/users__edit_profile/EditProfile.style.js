//@flow
import styled from 'styled-components/native'
import { palette } from 'Closies/app/__config/Theme'
import { Text } from 'Closies/app/components/__shared/Common.style'

export const Container = styled.View`
  background-color: ${palette.white};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
export const SubContainer = styled.View`
  padding: 20px;
`
export const Divider = styled.View`
  margin: 0px 0;
  border-top-width: 0.6px;
  border-top-color: ${palette.alto};
`
export const Label = styled(Text)`
  font-size: 13px;
  padding-left: 5px;
  color: ${palette.boulder};
`
export const ReachMe = styled(Text)`
  font-size: 19px;
  padding-left: 5px;
`
export const InputStyle = {
  fontSize: 19,
}
export const CheckboxStyle = {
  label: {fontSize: 15}
}
