import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Flex = () => {
  return (
    <View style={[styles.maincontainer, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column",
      
    }]}>
      <View style={[styles.subcontainer, { flex: 3, backgroundColor: "red" }]}>
            <Text style={styles.textelements}>height: 5'7"</Text>
            <Text style={[styles.textelements, {alignSelf: "stretch"}]}>Color: brown</Text>
      </View>
      <View style={{ flex: 2, backgroundColor: "darkorange" }}>
            <Text style={[styles.textelements, {position: "absolute", bottom: 10, right: 10}]}>height: 5'7"</Text>
            <Text style={styles.textelements}>Color: brown</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "green"}}>
            <Text style={[styles.textelements, {flex: 1}]}>Color: brown</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
maincontainer: {
    marginTop: 50, marginLeft: 10, marginRight: 5, marginBottom: 7, borderTopWidth: 10,
    borderRightWidth: 3, borderBottomWidth: 5, borderLeftWidth: 1, borderColor: 'blue', padding: 20, 
    flex: 1,
  },
subcontainer: {
    justifyContent: "space-evenly",
    flexDirection: "column",
    alignItems: "center"
},
textelements:{
    borderColor: "black", borderWidth: 5
}
});

export default Flex;