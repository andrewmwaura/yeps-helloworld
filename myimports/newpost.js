import React from "react";
import { Text, View } from "react-native";

const NewPost = () => {
return (
	<View style={{ flex: 1, alignItems: "center",
				justifyContent: "center" }}>
	<Text style={{ color: "#006600", fontSize: 40 }}>
		New Post Screen!
	</Text>
	<Text> Create New Post</Text> 
	</View>
);
};

NewPost.navigationOptions = (navData) => {
return {
	headerTitle: navData.navigation.getParam("username"),
};
};

export default NewPost;
