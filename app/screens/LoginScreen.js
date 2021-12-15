import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AppButton from "../components/buttons/AppButton";
import AppTextInput from "../components/inputs/AppTextInput";
import Screen from "./Screen";
import { Formik } from "formik";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";

import AppText from "../components/AppText";
import ErrorMessage from "../components/forms/ErrorMessage";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import auth from "../apis/auth";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen() {
  const authStore = useAuth();
  const [login, setLogin] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const response = await auth.login(email, password);
    if (!response.ok) {
      setLogin(true);
      return;
    }
    setLogin(false);
    authStore.logIn(response.data);
  };

  return (
    <Screen style={{ padding: 10 }}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      {login && (
        <ErrorMessage error="Invalid Email Or Password" visible={login} />
      )}
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <>
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

            <SubmitButton title="Login" />
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
