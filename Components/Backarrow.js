import React from "react";
import { View } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export const Backarrow = ({navigation}) => {
  return (
    <View className=" w-20 h-20 rounded-full flex flex-row bg-[#fff] mx-5 items-center justify-center">
      <MaterialCommunityIcons
        name="arrow-left"
        size={30}
        color="#fb8500"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};
