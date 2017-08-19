//@flow
import styled from 'styled-components/native'
import { absoluteFill } from 'Closies/app/components/shared/Common.style'
import { palette } from 'Closies/app/__config/Theme'

export const Container = styled.View`
  ${absoluteFill}
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${palette.white};
`
export const Title = styled.Text`
  font-size: 30px;
`
export const ButtonStyle = {
  container: {
    backgroundColor: palette.facebook,
    width: '100%',
    height: 50,
  },
  text: {
    color: palette.white,
    fontSize: 20,
  }
}
export const IconStyle = {
  color: palette.white,
  fontSize: 30,
  marginRight: 15,
}
