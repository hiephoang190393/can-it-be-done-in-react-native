import * as React from "react";
import { TouchableWithoutFeedback, Text, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

import { MAX_HEADER_HEIGHT } from "./Model";

interface ShufflePlayProps {
  y: Animated.Value<number>;
}

const BUTTON_HEIGHT = 48;
const BUTTON_WIDTH = 200;
const { add, multiply } = Animated;

export default ({ y }: ShufflePlayProps) => {
  const translateY = add(MAX_HEADER_HEIGHT, multiply(y, -1));
  return (
    <TouchableWithoutFeedback>
      <Animated.View style={[styles.button, { transform: [{ translateY }] }]}>
        <Text style={styles.label}>SHUFFLE PLAY</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    alignSelf: "center",
    backgroundColor: "#58b55f",
    height: BUTTON_HEIGHT,
    width: BUTTON_WIDTH,
    borderRadius: 32,
    justifyContent: "center",
  },
  label: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "500",
  },
});
