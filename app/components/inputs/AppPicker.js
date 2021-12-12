import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { useFormikContext } from "formik";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../../config/colors";
import defaultStyles from "../../../config/styles";
import PickerItem from "./PickerItem";

const categories = [
  {
    label: "Furniture",
    icon: "apps",
    backgroundColor: "red",
    value: 1,
  },
  {
    label: "Clothing",
    icon: "apps",
    backgroundColor: "red",
    value: 2,
  },
  {
    label: "Electronics",
    icon: "apps",
    backgroundColor: "red",
    value: 3,
  },
];

export default function AppPicker({
  icon,
  placeholder,
  PickerItemComponent = PickerItem,
}) {
  const [modal, setModal] = useState(false);

  const { setFieldValue, values } = useFormikContext();

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModal(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={"black"}
              style={styles.icon}
            />
          )}
          <Text style={styles.text}>
            {values.category ? values.category.label : placeholder}
          </Text>
          <MaterialCommunityIcons name="chevron-down" size={20} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modal} animationType="slide">
        <Button title="Close" onPress={() => setModal(false)} />
        <FlatList
          data={categories}
          keyExtractor={(item) => item.value.toString()}
          numColumns={3}
          renderItem={({ item }) => (
            <PickerItemComponent
              item={item}
              onPress={() => {
                setFieldValue("category", item);
                setModal(false);
              }}
            />
          )}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightgrey,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    width: "100%",
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  text: {
    ...defaultStyles.text,
    flex: 1,
  },
});
