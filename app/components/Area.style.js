//@flow
import styled from 'styled-components/native'
import { css } from 'styled-components'
import { absoluteFill } from 'Closies/app/components/shared/Common.style'

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
