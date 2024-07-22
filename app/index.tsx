import Manrope from "@/constants/fonts";
import boldFont from "@/constants/fonts";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, Image, ImageSourcePropType } from "react-native";

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const { width, height } = Dimensions.get("window");

export default function Index() {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != DATA.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = DATA.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };
  type slidesData = {
    id: number;
    title: string;
    description: string;
    image: ImageSourcePropType;
  };
  const DATA: slidesData[] = [
    {
      id: 1,
      title: "Track your spending",
      description: "Simplify your budgeting process with Exify.",
      image: require("../assets/images/Fast-Internet.png"),
    },
    {
      id: 2,
      title: "Goal Setting",
      description: "Set your goals and track your progress.",
      image: require("../assets/images/Loading-Time.png"),
    },
    {
      id: 3,
      title: "Achieve Financial Peace",
      description: "Enjoy clarity and consistency with our financial tools.",
      image: require("../assets/images/Chill-Time.png"),
    },
  ];

  type slideProps = {
    item: slidesData;
  };
  const Slide = ({ item }: slideProps) => {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={item.image} resizeMode="contain" />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.baseText}>{item.description}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        height: "100%",
      }}
    >
      <FlatList
        onMomentumScrollEnd={updateCurrentSlideIndex}
        pagingEnabled
        data={DATA}
        horizontal
        contentContainerStyle={{ height: height * 0.75 }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} />}
      />
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        {DATA.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentSlideIndex == index && {
                backgroundColor: "black",
                width: 25,
              },
            ]}
          />
        ))}
      </View>
      {currentSlideIndex === DATA.length - 1 ? (
        <TouchableOpacity style={styles.primaryButton}>
          <Text
            style={{
              color: "#ffff",
              fontFamily: Manrope.xbold,
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: Manrope.xbold,
    fontSize: 24,
  },
  baseText: {
    marginTop: 10,
    fontFamily: Manrope.regular,
    fontSize: 20,
    textAlign: "center",
    width: 250,
  },
  textContainer: {
    alignItems: "center",
  },
  container: {
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,

    width: "100%",
    height: "100%",
  },

  primaryButton: {
    padding: 24,
    borderRadius: 50,
    width: 150,
    alignItems: "center",
    alignSelf: "flex-end",
    backgroundColor: "#000",
  },

  image: {
    width: width * 0.89,
    height: "75%",
  },
  logo: {
    width: 200,
    height: 200,
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: "grey",
    marginHorizontal: 3,
    borderRadius: 2,
  },
});
