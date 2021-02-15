import React, { useState } from "react";
import { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { TextInput } from "react-native-paper";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { PhotoPicker } from "../components/PhotoPicker";
import { addPost } from "../store/actions/post";
import { THEME } from "../theme";

export const CreateScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const imgRef = useRef();

  const saveHandler = () => {
    const post = {
      date: new Date().toJSON(),
      text: text,
      img: imgRef.current,
      booked: false,
    };
    navigation.navigate("Main");
    dispatch(addPost(post));
  };

  const photoPicHandler = (uri) => {
    imgRef.current = uri;
  };

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Создание нового поста</Text>
          <TextInput
            style={styles.textarea}
            placeholder="Введите текст заметки"
            value={text}
            onChangeText={setText}
            multiline
          />
          <PhotoPicker onPick={photoPicHandler} />
          <Button
            title="Создать пост"
            color={THEME.MAIN_COLOR}
            onPress={saveHandler}
            disabled={!text}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

CreateScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Создать пост",
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="CreateScreen menu"
        iconName="ios-menu"
        onPress={() => navigation.toggleDrawer()}></Item>
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({
  wrapper: {
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "open-regular",
    marginVertical: 20,
  },
  textarea: {
    padding: 10,
    marginBottom: 10,
  },
});
