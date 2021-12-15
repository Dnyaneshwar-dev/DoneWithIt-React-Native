import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AppButton from "../components/buttons/AppButton";
import AppTextInput from "../components/inputs/AppTextInput";
import Screen from "./Screen";
import { Formik } from "formik";
import * as Yup from "yup";
import AppText from "../components/AppText";
import ErrorMessage from "../components/forms/ErrorMessage";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import auth from "../apis/auth";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function RegisterScreen() {
  const [registerError, setRegisterError] = useState(false);
  const authStore = useAuth();

  const handleSubmit = async ({ name, email, password }) => {
    const response = await auth.register(name, email, password);
    if (!response.ok) {
      setRegisterError(true);
      return;
    }
    const result = await auth.login(email, password);
    authStore.logIn(result.data);
  };

  return (
    <Screen style={{ padding: 10 }}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <ErrorMessage
        error="User with given Email Already Exists"
        visible={registerError}
      />
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <>
            <AppFormField
              icon="face"
              placeholder="Name"
              name="name"
              autoCorrect={false}
            />
            <AppFormField
              icon="email"
              placeholder="Email"
              name="email"
              autoCorrect={false}
              keyboardType="email-address"
            />

            <AppFormField
              icon="lock"
              name="password"
              placeholder="Password"
              autoCorrect={false}
              secureTextEntry
            />

            <SubmitButton title="Sign Up" />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
});
