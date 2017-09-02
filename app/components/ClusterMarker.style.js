//@flow
import styled from 'styled-components/native'
import moment from 'moment'
import { palette } from 'Closies/app/__config/Theme'

const getOpacity = (createdAt: string): number => {
  const secondsNow = Math.round(Date.now() / 1000)
  const activityCreatedAt = moment(createdAt).unix()
  const secondsPast = secondsNow - activityCreatedAt
  const secondsInDay = 24 * 60 * 60
  const percentPast = Math.round(secondsPast * 100 / secondsInDay)
  if (percentPast <= 25) return 1
  else if (percentPast <= 50) return 0.8
  else if (percentPast <= 75) return 0.65
  else return 0.5
}

export const NotificationContainer = styled.View`
  padding: 2px;
  border-width: ${props => props.newEvents ? '2px' : 0};
  border-color: ${palette.cerulean};
  border-style: dashed;
  opacity: ${props => getOpacity(props.createdAt)};
  border-radius: 20px;
`
export const Cluster = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border-width: 4px;
  background-color: ${palette.white};
  border-color: ${palette.cerulean};
  opacity: ${props => getOpacity(props.createdAt)};
  justify-content: center;
  align-items: center;
`
export const ChildrenNumber = styled.Text`
  color: ${palette.cerulean};
  font-size: 14px;
  font-weight: bold;
  opacity: ${props => getOpacity(props.createdAt)};
`
