//@flow
import styled from 'styled-components/native'
import { Text } from 'Closies/app/components/shared/Common.style'
import { palette } from 'Closies/app/__config/Theme'

export const Container = styled.View`
  flex-direction: row;
  padding: 20px;
  border-bottom-color: ${palette.silver};
  border-bottom-width: 1px ;
`
export const Type = styled(Text)`
  width: 60px;
`
