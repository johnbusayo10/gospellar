import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../misc/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";

const { width, height } = Dimensions.get("window");

const Card = ({ icon, title, description }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const windowWidth = Dimensions.get("window").width;

  return (
    <View
      style={styles.card}
      className="  h-[220px] w-[250px] bg-[#ef476f] m-2 rounded-xl flex flex-col justify-around items-center"
    >
      <Text style={styles.title}></Text>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className=" w-[90%] h-[70%] flex flex-col items-center justify-around"
      >
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={90}
            color={colors.PRIMARY}
            style={[ { fontSize: windowWidth * 0.22 }]}
          />
        )}

        <Text style={styles.description}>{title}</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
        <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.modalView}>

        <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={[styles.modalTitle, { fontSize: windowWidth * 0.06 }]}>{title}</Text>
        <Text  style={[styles.modalDescription, { fontSize: windowWidth * 0.033 }]} className='font-bold text-2xl'>{description}</Text>
        <TouchableOpacity
          style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
          onPress={() => setModalVisible(false)}
        >
          <Text style={styles.textStyle}>Close</Text>
        </TouchableOpacity>
        </ScrollView>
       
      </View>
        
        </ScrollView>
        
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.CARDCOLOR,
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 25,
    color: "#023047",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: width * 0.85,
    height: height * 0.8,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 18,
    marginBottom: 10,
  },
  openButton: {
    backgroundColor: colors.PRIMARY,
    borderRadius: 20,
    padding: 15,
    elevation: 2,
    marginTop: 15,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Card;
