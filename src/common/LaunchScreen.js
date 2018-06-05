"use strict";

import React from "react";
import { Dimensions, StyleSheet, View, Image } from "react-native";

const WIN_WIDTH = Dimensions.get("window").width,
  WIN_HEIGHT = Dimensions.get("window").height;

/**
* ==============================================================================
* <LaunchScreen />
* ------------------------------------------------------------------------------
* @return {ReactElement}
* ==============================================================================
*/

class LaunchScreen extends React.Component {
  static __cards__;

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Image
          source={require("./img/launchscreen.png")}
          style={styles.image}
        />
      </View>
    );
  }
}

/* StyleSheet =============================================================== */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray'
  },
  image: {
    position: "absolute",
    left: 0,
    top: 0,
    width: WIN_WIDTH,
    height: WIN_HEIGHT,
    resizeMode: "cover"
  }
});

/* playground cards ========================================================= */

const launchScreen = LaunchScreen;
launchScreen.__cards__ = define => {
  define("Default", _ => <LaunchScreen />);
};

/* exports ================================================================== */
module.exports = launchScreen;
