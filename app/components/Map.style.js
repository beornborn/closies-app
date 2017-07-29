//@flow
import styled from 'styled-components/native'
import { css } from 'styled-components'

const absoluteFillObject = css`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`

export const Container = styled.View`
  ${absoluteFillObject}
  justify-content: flex-end;
  align-items: center;
`

export const ActionButtonIconStyle = {
  fontSize: 20,
  height: 22,
  color: 'white',
}
