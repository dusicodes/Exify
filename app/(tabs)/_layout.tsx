import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { StatusBar } from "expo-status-bar";
import { Redirect, Tabs } from "expo-router";
import {
  Cog6ToothIcon,
  PresentationChartLineIcon,
  BuildingLibraryIcon,
  DocumentPlusIcon,
  Square3Stack3DIcon
} from 'react-native-heroicons/outline';




const TabsLayout = () => {

  const screens = [
    {
      name: "Home",
      title: "Home",
      icon: <BuildingLibraryIcon height={30} width={30} color={"black"} />
    },
    {
      name: "Categories",
      title: "Categories",
      icon: <Square3Stack3DIcon height={30} width={30} color={"black"} />
    },
    {
      name: "Create",
      title: "Create",
      icon: <DocumentPlusIcon height={30} width={30} color={"black"} />
    },
    {
      name: "Analytics",
      title: "Analytics",
      icon: <PresentationChartLineIcon height={30} width={30} color={"black"} />
    },
    {
      name: "Settings",
      title: "Settings",
      icon: <Cog6ToothIcon height={30} width={30} color={"black"} />
    },
  ]
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarShowLabel: false }} >
      {screens.map((screen) => <Tabs.Screen name={screen.name} options={{
        title: screen.title, tabBarIcon: ({ color }) => <View style={styles.tabIcon}>{screen.icon}</View>
      }} />)}
    </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({
  tabIcon: {
    flex: 1,
    gap: 2,
    alignItems: "center"

  }
})