import { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { ProfileScreenProps } from "@appTypes/navigation/navigationTypes";
import { ProfileForm } from "@appTypes/screens/screenTypes";
import Header from "@components/headers/Header";
import LabelInput from "@components/inputs/LabelInput";
import ButtonLarge from "@components/buttons/ButtonLarge";
import Alert from "@components/alert/Alert";

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  const [form, setForm] = useState<ProfileForm>({
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  // TODO: fetch saved cars of the user
  const fetchEmail = async () => {
    // Mock up
    const email = "john.doe@gmail.com";
    if (email) {
      setForm((prev) => ({
        ...prev,
        email: email,
      }));
    }
  };

  useEffect(() => {
    fetchEmail();
  }, []);

  // Auto detect form input
  useEffect(() => {
    setIsFormValid(false);

    const { oldPassword, newPassword, confirmPassword } = form;

    if (
      oldPassword.length < 8 ||
      newPassword.length < 8 ||
      confirmPassword.length < 8
    )
      return;

    if (newPassword !== confirmPassword) return;

    setIsFormValid(true);
  }, [form]);

  // TODO: changing password logic here ...
  const changePassword = () => {
    if (!isPressed) {
      // Mock up
      setTimeout(() => {
        const { success, msg } = { success: true, msg: "unsuccessful alert" };

        // Enable the button after changing/checking
        setIsPressed(false);

        // Alert if failed
        if (!success) {
          alert(msg);
          return;
        }

        // Set isSuccess to open Alert screen
        setIsSuccess(true);
      }, 1000);
    }
  };

  // Toggle alert popup after successful changing password
  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setIsSuccess(false);
        setForm((prev) => ({
          ...prev,
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        }));
      }, 3000);
    }
  }, [isSuccess]);

  return !isSuccess ? (
    <KeyboardAvoidingView behavior="position">
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Header title="Profile" />
          <View style={{ alignItems: "center" }}>
            <MaterialIcons name="account-circle" size={140} color="#A1A1A6" />
          </View>
          <View style={{ gap: 16, paddingBottom: 16 }}>
            <LabelInput label="Email" value={form.email} editable={false} />
            <LabelInput
              label="Old password"
              placeholder="Your current password"
              value={form.oldPassword}
              secureTextEntry
              onChangeText={(p) => {
                setForm((prev) => ({
                  ...prev,
                  oldPassword: p,
                }));
              }}
            />
            <LabelInput
              label="New password"
              placeholder="Must be at least 8 characters"
              value={form.newPassword}
              secureTextEntry
              onChangeText={(p) => {
                setForm((prev) => ({
                  ...prev,
                  newPassword: p,
                }));
              }}
            />
            <LabelInput
              label="Confirm password"
              placeholder="Must be at least 8 characters"
              value={form.confirmPassword}
              secureTextEntry
              onChangeText={(p) => {
                setForm((prev) => ({
                  ...prev,
                  confirmPassword: p,
                }));
              }}
            />
          </View>
          <ButtonLarge
            title="Change password"
            disabled={!isFormValid || isPressed}
            onPress={() => {
              setIsPressed(true);
              changePassword();
            }}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  ) : (
    <Alert
      type="notify"
      isSuccess={isSuccess}
      title="Successful"
      details="Your password has been changed"
    />
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#F9F9F9",
  },
  container: {
    flex: 1,
    paddingTop: 16,
    paddingBottom: 76,
    paddingHorizontal: 20,
    gap: 16,
  },
});

export default ProfileScreen;
