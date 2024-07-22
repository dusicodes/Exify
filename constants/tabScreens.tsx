import {
  Cog6ToothIcon,
  PresentationChartLineIcon,
  BuildingLibraryIcon,
  DocumentPlusIcon,
  Square3Stack3DIcon
} from 'react-native-heroicons/outline';

import icons from '../constants/icons';

import { StyleSheet, View, Image } from 'react-native';
import { SvgProps } from 'react-native-svg';

const screens = [
  {
    name: "Home",
    title: "Home",
    icon: icons.home
  },
  {
    name: "Categories",
    title: "Categories",
    icon: icons.categories
  },
  {
    name: "Create",
    title: "Create",
    icon: icons.create
  },
  {
    name: "Analytics",
    title: "Analytics",
    icon: icons.stats
  },
  {
    name: "Settings",
    title: "Settings",
    icon: icons.settings
  },
]

export default screens  