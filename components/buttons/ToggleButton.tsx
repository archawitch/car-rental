import {
  Text,
  StyleSheet,
  GestureResponderEvent,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

type ToggleButtonProp = {
  title: string;
  isActive: boolean;
  disabled?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

const ToggleButton = (props: ToggleButtonProp) => {
  const bgColor = props.isActive ? "#2B2930" : "white";
  const textColor = props.isActive ? "white" : "#A1A1A6";
  const borderColor = props.isActive ? "black" : "#cccccc";

  if (props.disabled) {
    return (
      <TouchableWithoutFeedback>
        <View
          style={[
            styles.button,
            { backgroundColor: bgColor, borderColor: borderColor },
          ]}>
          <Text style={[styles.title, { color: textColor }]}>
            {props.title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: bgColor, borderColor: borderColor },
      ]}
      onPress={props.onPress}>
      <Text style={[styles.title, { color: textColor }]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    paddingVertical: 8,
    borderRadius: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
  },
  title: {
    fontSize: 16,
  },
});

export default ToggleButton;
