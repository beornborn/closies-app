//@flow
import styled from 'styled-components/native'
import { absoluteFill } from 'Closies/app/components/__shared/Common.style'
import { palette } from 'Closies/app/__config/Theme'

export const Container = styled.View`
  ${absoluteFill}
  background-color: ${palette.white};
`
