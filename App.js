import React from "react"
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  ScrollView
} from "react-native"
import CF from "./cf.png"

export default class App extends React.Component {
  componentWillMount() {
    this.animated = new Animated.Value(0)
  }

  render() {
    const hideImageInterpolate = this.animated.interpolate({
      inputRange: [0, 250],
      outputRange: [50, 0],
      extrapolate: "clamp"
    })

    const fontInterpolate = this.animated.interpolate({
      inputRange: [0, 250],
      outputRange: [24, 30]
    })

    const opacityInterpolate = this.animated.interpolate({
      inputRange: [0, 250],
      outputRange: [1, 0],
      extrapolate: "clamp"
    })

    const collaspseInterpolate = this.animated.interpolate({
      inputRange: [0, 250],
      outputRange: [50, 0],
      extrapolate: "clamp"
    })

    const imageStyle = {
      width: hideImageInterpolate,
      height: hideImageInterpolate
    }

    const titleStyle = {
      fontSize: fontInterpolate
    }

    const fadeButtonStyle = {
      opacity: opacityInterpolate,
      height: collaspseInterpolate
    }

    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleStyle: {
    marginBottom: 10
  },
  fakeContent: {
    heifht: 1000,
    backgroundColor: "#4A89DC"
  },
  fakeText: {
    padding: 15,
    textAlign: "center",
    color: "#FFF"
  },
  buttons: {
    flexDirection: "row"
  },
  image: {
    width: 50,
    height: 50
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    paddingTop: 30,
    alignItems: "center"
  },
  scrollView: {
    flex: 1
  }
})
