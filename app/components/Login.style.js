//@flow
import styled from 'styled-components/native'
import { absoluteFill } from 'Closies/app/components/shared/Common.style'

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
export const ButtonStyle = {
  container: {
    backgroundColor: '#3B5998',
    width: '100%',
    height: 50,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  }
}
export const IconStyle = {
  color: '#fff',
  fontSize: 30,
  marginRight: 15,
}
