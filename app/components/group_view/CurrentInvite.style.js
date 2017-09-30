//@flow
import styled from 'styled-components/native'
import { palette } from 'Closies/app/__config/Theme'
import { Text } from 'Closies/app/components/shared/Common.style'

export const Container = styled.View`
  flex: 1;
  background-color: ${palette.white};
  align-items: center;
  padding: 20px;
`
export const Title = styled(Text)`
  margin-top: 20px;
  font-size: 21px;
  color: ${palette.cerulean};
  text-align: center;
`
export const Code = styled(Text)`
  background-color: #FCFF96;
  padding: 25px;
  letter-spacing: 10;
  font-size: 17px;
  margin: 30px 0;
`
export const Explanations = styled.View`
  align-items: flex-start;
  margin-bottom: 30px;
`
export const Explanation = styled(Text)`
  color: ${palette.boulder};
  height: 25px;
`
export const Copied = styled(Text)`
  color: ${palette.cerulean};
  margin-bottom: 30px;
  font-size: 20px;
`
