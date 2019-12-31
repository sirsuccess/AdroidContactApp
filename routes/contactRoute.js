import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/allContact";
import ReviewDetails from "../screens/singleContact";

const screens = {
  Home: {
    screen: Home
  },
  ReviewDetails: {
    screen: ReviewDetails
  }
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
