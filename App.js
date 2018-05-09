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
        <View style={styles.header}>
          <Animated.Image source={CF} style={[styles.image, imageStyle]} />
          <Animated.View style={[styles.buttons, fadeButtonStyle]}>
            <View style={styles.button}>
              <Text>I'm a Button</Text>
            </View>
            <View style={styles.button}>
              <Text>I'm a Button</Text>
            </View>
          </Animated.View>
        </View>
        <View style={styles.scrollView}>
          <ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { y: this.animated } } }
            ])}
          >
            <View style={styles.fakeContent}>
              <Text style={styles.fakeText}>Top</Text>
            </View>
          </ScrollView>
        </View>
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
    height: 1000,
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
