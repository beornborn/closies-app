//@flow
import styled from 'styled-components/native'
import { absoluteFill } from 'Closies/app/components/shared/Common.style'
import { palette } from 'Closies/app/__config/Theme'

export const Container = styled.View`
  ${absoluteFill}
  justify-content: flex-end;
  align-items: center;
`

export const ActionButtonIconStyle = {
  fontSize: 20,
  height: 22,
  color: palette.cerulean,
}

export const ActionButtonStyle = {
  container: {
    backgroundColor: palette.white,
    borderWidth: 2,
    borderColor: palette.cerulean,
  }
}
