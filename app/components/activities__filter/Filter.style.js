//@flow
import styled from 'styled-components/native'
import { palette } from 'Closies/app/__config/Theme'
import { Text } from 'Closies/app/components/__shared/Common.style'

export const Container = styled.View`
  flex: 1;
  background-color: ${palette.white};
`
export const Title = styled(Text)`
  padding: 15px;
  background-color: ${palette.alto};
  font-size: 15px;
  font-weight: bold;
`
