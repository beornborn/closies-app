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
  color: 'white',
}

export const ActionButtonStyle = {
  container: {
    backgroundColor: palette.orange
  }
}
