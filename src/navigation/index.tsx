import {
  createNavigationContainerRef,
  NavigationContainer,
  RouteProp,
} from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import React from "react";
import colors from "@constants/colors/index";
import { Home } from "@screens/index";

export type RootStackParamList = {
  Gallery: undefined,
};

export type navigationProps = NativeStackNavigationProp<RootStackParamList>;
export type routeProps = RouteProp<RootStackParamList>;

export const rootRef = createNavigationContainerRef();
const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = (): JSX.Element => {
  return (
    <>
      <NavigationContainer ref={rootRef}>
        <RootNavigator />
      </NavigationContainer>
    </>
  );
};

const RootNavigator = (): JSX.Element => {

  return (
    <RootStack.Navigator
      screenOptions={{
        headerTitleAlign: 'center'
      }}
      initialRouteName="Gallery">
      <RootStack.Screen
        name="Gallery"
        component={Home}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          animation: "slide_from_right",
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.grey,
          },
        }}
      />
    </RootStack.Navigator>
  );
};
