import React from 'react'
import {Text, View} from 'react-native'
import {DangerZone} from 'expo'

const { DeviceMotion } = DangerZone

export default class MotionScreen extends React.Component {

  state = {
    rotation: {
      alpha: 0,
      beta: 0,
      gamma: 0
    }
  }

  componentDidMount(){
    DeviceMotion.addListener(({rotation}) => {
      this.setState({rotation})
    })
  }

  render(){
    return(
      <View>
        <Text>{this.state.rotation.alpha}</Text>
        <Text>{this.state.rotation.beta}</Text>
        <Text>{this.state.rotation.gamma}</Text>
      </View>
    )
  }
}
