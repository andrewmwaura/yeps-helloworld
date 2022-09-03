import React from 'react';
import { Text, View } from 'react-native';

export default function Header (){
    const openMenu = () => {
        // navigation.openDrawer()
    }
    return (
        <View style={[styles.header, {width: 50, height: 50}]}>
            <Image source={require('./headerico.png')} onPress={openMenu} style={styles.icon} />
            <View>
                <Text style={styles.headerText}>Blog Zone</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    header: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "red",
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 16,
    }
})