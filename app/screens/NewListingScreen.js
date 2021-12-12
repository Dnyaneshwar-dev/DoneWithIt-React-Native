import React from "react";
import { View, Text } from "react-native";
import { Formik } from "formik";
import AppFormField from "../components/forms/AppFormField";
import AppPicker from "../components/inputs/AppPicker";
import SubmitButton from "../components/forms/SubmitButton";
import Screen from "./Screen";
import PickerItem from "../components/inputs/PickerItem";
import CategoryPicker from "../components/inputs/CategoryPicker";
export default function NewListingScreen() {
  return (
    <Screen style={{ padding: 10 }}>
      <Formik
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
      >
        {() => (
          <>
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
