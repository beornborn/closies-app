//@flow
import styled from 'styled-components/native'
import { css } from 'styled-components'
import { absoluteFill } from 'Closies/app/components/shared/Common.style'
import { View, Text } from 'react-native'

export const Container = styled.View`
  ${absoluteFill}
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #fff;
`
export const Title = styled.Text`
  font-size: 30px;
`
