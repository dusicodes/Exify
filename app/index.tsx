import Manrope from '@/constants/fonts';
import boldFont from '@/constants/fonts';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

      }}
    >
      <Text style={styles.baseText}>EXIFY</Text>
      <StatusBar style='auto' />
      <Link href="/Home">Go to home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: Manrope.xbold,
    fontSize: 50,
  },

});


