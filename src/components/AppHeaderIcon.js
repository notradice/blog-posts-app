import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { THEME } from "../theme";
import { Ionicons } from "@expo/vector-icons";

export const AppHeaderIcon = (props) => (
  <HeaderButton
    {...props}
    iconSize={28}
    IconComponent={Ionicons}
    color={Platform.OS === "android" ? "white" : THEME.MAIN_COLOR}
  />
);
