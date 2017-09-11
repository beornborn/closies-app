//@flow
import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 10px 20px;
  flex-direction: row;
`
export const Content = styled.View`
  flex-direction: column;
  flex-grow: 1;
  padding: 0px 10px;
`
export const Avatar = styled.Image`
  width: 54px;
  height: 54px;
  border-radius: 27px;
  border-width: 1px;
  border-color: ${props => props.color};
`
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
export const Name = styled.Text`
  font-weight: bold;
`
export const CreatedAt = styled.Text`
`
export const Description = styled.Text`
`
