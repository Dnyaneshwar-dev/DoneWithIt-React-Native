import React from "react";
import { useFormikContext } from "formik";

import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";
import { ScrollView } from "react-native";
import { View } from "react-native-web";

export default function FormImagePicker({ name }) {
  const {
    setFieldTouched,
    handleChange,
    errors,
    touched,
    values,
    setFieldValue,
  } = useFormikContext();
  const handleAdd = (uri) => {
    setFieldValue(name, [...values[name], uri]);
  };
  const handleRemove = (uri) => {
    setFieldValue(
      name,
      values[name].filter((item) => item !== uri)
    );
  };
  return (
    <>
      <ScrollView horizontal={true}>
        <ImageInputList
          imageUris={values[name]}
          onAddImage={handleAdd}
          onRemoveImage={handleRemove}
        />
      </ScrollView>

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
