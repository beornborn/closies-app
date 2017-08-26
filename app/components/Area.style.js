//@flow
import styled from 'styled-components/native'
import { absoluteFill } from 'Closies/app/components/shared/Common.style'
import { palette } from 'Closies/app/__config/Theme'

export const Container = styled.View`
  ${absoluteFill}
  justify-content: flex-end;
  align-items: center;
`

export const ActionButtonStyle = {
  container: {
    backgroundColor: palette.white,
    borderWidth: 2,
    borderColor: palette.cerulean,
  },
  icon: {
    color: palette.cerulean,
  }
}
