import React, { useState } from "react";
import { View, Text, Button, ScrollView } from "react-native";
import { Formik } from "formik";
import AppFormField from "../components/forms/AppFormField";
import AppPicker from "../components/inputs/AppPicker";
import SubmitButton from "../components/forms/SubmitButton";
import Screen from "./Screen";
import PickerItem from "../components/inputs/PickerItem";
import CategoryPicker from "../components/inputs/CategoryPicker";
import * as ImagePicker from "expo-image-picker";
import AppImagePicker from "../components/AppImagePicker";
import ImageInputList from "../components/ImageInputList";
import * as Yup from "yup";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  images: Yup.array().min(1, "Select at least one Image"),
});

export default function NewListingScreen() {
  const location = useLocation();

  return (
    <Screen style={{ padding: 10 }}>
      <Formik
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {() => (
          <>
            <View>
              <FormImagePicker name="images" />
            </View>

            <AppFormField title="Title" name="title" placeholder="Title" />
            <AppFormField title="Price" name="price" placeholder="Price" />
            <AppPicker
              PickerItemComponent={CategoryPicker}
              placeholder="Category"
            />
            <AppFormField
              title="Description"
              name="description"
              placeholder="Description"
            />

            <SubmitButton title="post" />
          </>
        )}
      </Formik>
    </Screen>
  );
}
