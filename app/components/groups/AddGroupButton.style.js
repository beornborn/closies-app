//@flow
import styled from 'styled-components/native'
import { palette } from 'Closies/app/__config/Theme'

export const Container = styled.View`
  margin-right: 15px;
`
export const getIconStyle = (canAddGroup: boolean) => {
  return {
    fontSize: 35,
    color: canAddGroup ? palette.cerulean : palette.silver,
    borderRadius: 18
  }
}
