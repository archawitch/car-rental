import { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import {
  RootStackParamList,
  AuthStackParamList,
} from "@appTypes/navigation/navigationTypes";
import AuthInput from "@components/inputs/AuthInput";
import ButtonLarge from "@components/buttons/ButtonLarge";
import Alert from "@components/alert/Alert";

type LoginScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<AuthStackParamList, "Login">,
  StackNavigationProp<RootStackParamList>
>;

const LoginScreen: React.FC<{ navigation: LoginScreenNavigationProp }> = ({
  navigation,
}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPressed, setIsPressed] = useState<boolean>(false);

  const handleLogin = () => {
    // TODO: handle login logic here ...
    const result: boolean = false;

    // if authenticated, navigate to the Home screen
    // else,show pop up alert
    if (result) {
      navigation.navigate("Main", {
        screen: "HomeTab",
        params: {
          screen: "Home",
        },
      });
      return;
    }

    // toggle state to show the alert pop up
    setIsPressed(true);
  };

  // Toggle alert popup when clicking sign up button
  useEffect(() => {
    if (isPressed) {
      setTimeout(() => {
        setIsPressed(false);
      }, 3000);
    }
  }, [isPressed]);

  return !isPressed ? (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("@assets/images/illustrations/login-illustration.png")}></Image>
      <Text style={styles.title}>Log in</Text>
      <View style={styles.inputContainer}>
        <AuthInput
          label="Email"
          inputText={email}
          onChangeText={setEmail}
          placeholder="Your email"
        />
        <AuthInput
          label="Password"
          inputText={password}
          onChangeText={setPassword}
          placeholder="Your password"
          secureTextEntry
        />
      </View>
      <ButtonLarge title="Log in" onPress={handleLogin} />
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>
          Don't have an account?{" "}
          <Text
            style={styles.signUpButton}
            onPress={() => navigation.navigate("Signup")}>
            Sign up
          </Text>
        </Text>
      </View>
    </View>
  ) : (
    <Alert
      type="auth"
      isSuccess={false}
      title="Login failed"
      details="Your email or password is not correct."
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 24,
    paddingHorizontal: 28,
    backgroundColor: "white",
  },
  image: {
    width: 337,
    height: 222,
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 32,
    marginTop: 44,
    marginBottom: 26,
  },
  inputContainer: {
    gap: 16,
    marginBottom: 40,
  },
  signUpContainer: {
    alignItems: "center",
    marginTop: 56,
  },
  signUpText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
  },
  signUpButton: {
    fontFamily: "Poppins_700Bold",
  },
});

export default LoginScreen;