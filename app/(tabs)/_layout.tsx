import { StyleSheet, Text, View, Image, ImageSourcePropType, ImageProps } from 'react-native'
import React from 'react'
import { StatusBar } from "expo-status-bar";
import { Redirect, Tabs } from "expo-router";
import screens from '@/constants/tabScreens';
import somethig from "../"

interface TabProps {
  color: string
  focused?: boolean
  name?: string
  icon: ImageSourcePropType | undefined
}
const TabIcon: React.FC<TabProps> = ({ color, focused, icon, name }) => {
  return <View>
    <Image source={icon} resizeMode='contain' style={styles.tabIcon} />
  </View>
}

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarShowLabel: false, }} >
      {screens.map((screen, index) => <Tabs.Screen key={index} name={screen.name} options={{
        title: screen.title, tabBarIcon: ({ color, focused }) => <TabIcon icon={screen.icon} />
      }} />)}
    </Tabs >
  )
}

export default TabsLayout

const styles = StyleSheet.create({
  tabIcon: {
    tintColor: "#000000",
    width: 32,

  }

})