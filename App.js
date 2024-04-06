import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
} from "react-native";

import { useState } from "react";

const localImage = require("./assets/adaptive-icon.png");

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  function toggleStatusBar() {
    setIsVisible(!isVisible);
  }
  return (
    <View style={{ flex: 1, backgroundColor: "blue", padding: 50 }}>
      {/* <Button title="Press" onPress={() => toggleStatusBar()} color={"red"} /> */}
      {/* <Modal
        visible={isVisible}
        onRequestClose={() => setIsVisible(false)}
        animationType="slide"
        presentationStyle="pageSheet"
        >
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 50 }}>
        <Text>Modal Content</Text>
        <Button title="Close" onPress={() => setIsVisible(false)} />
        </View>
      </Modal> */}
      {/* <ScrollView>
        <Text>
        <Text style={{ color: "white" }}>Hello </Text>
        World
        </Text>
        
        <Image source={localImage} style={{ height: 200, width: 300 }} />
        <Text>
        loremi adaptivesdf a sdf asd f adaptivesdfasd sdff adaptivesdfasddf
        asdf a sdf as defaulta sd f\ adaptivesdf adaptivesdfasds defaultas
        defaultasd fas defaultasdfasdf sadf adaptivesdfsadf adaptivesdfasddfa
        sdfasd fasdf adaptivesdfasddfasdf sadffas defaultasdfasdfas fasasdf
        adaptivesdfsadfdf asdf sadfasd fasd f asd fasdf asdf asdf a sdf sadf
        asdf asfd asdf a sdfa df asdf asdf asd
        </Text>
        <Image source={localImage} style={{ height: 200, width: 300 }} />
        <Image source={localImage} style={{ height: 200, width: 300 }} />
        <Image
        source={{ uri: "https://picsum.photos/300" }}
        style={{ height: 300, width: 300 }}
        />
        
        <ImageBackground source={localImage}>
        <Text style={{ fontSize: 48, textAlign: "center", color: "white" }}>
        Hello World
        </Text>
        </ImageBackground>
      </ScrollView> */}

      {/* <StatusBar
        backgroundColor={"red"}
        barStyle={"light-content"}
        hidden={isVisible}
      /> */}

      {/* <ActivityIndicator />
      <ActivityIndicator size={"large"} />
      <ActivityIndicator size={"large"} color={"red"} />
    <ActivityIndicator size={"large"} color={"red"} animating={isVisible} /> */}

      <Button
        title="Alert"
        onPress={() => Alert.alert("Invalid Data")}
        color={"red"}
      />
      <Button
        title="Alert 2"
        onPress={() => Alert.alert("Invalid Data", "DOB Invalid")}
        color={"red"}
      />
      <Button
        title="Alert with 2 button"
        onPress={() =>
          Alert.alert("Invalid Data", "DOB Invalid", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
            },
            {
              text: "Ok",
              onPress: () => console.log("Ok Pressed"),
            },
          ])
        }
        color={"red"}
      />
    </View>
  );
}
