import {
  NavigatorScreenParams,
  RouteProp,
  CompositeNavigationProp,
} from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { CarData } from "@appTypes/cars/carTypes";
import { RentFormType } from "@appTypes/screens/screenTypes";

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  CarDetails: {
    carData: CarData;
    pickupDate: Date;
  };
  RentForm: {
    carData: CarData;
    pickupDate: Date;
  };
  RentConfirmation: {
    carData: CarData;
    rentForm: RentFormType;
  };
};

export type HistoryStackParamList = {
  History: undefined;
  RentHistoryDetails: undefined;
};

export type MainTabParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>;
  HistoryTab: NavigatorScreenParams<HistoryStackParamList>;
  SavedTab: undefined;
  ProfileTab: undefined;
};

export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Main: NavigatorScreenParams<MainTabParamList>;
};

export interface HomeScreenProps {
  navigation: CompositeNavigationProp<
    StackNavigationProp<HomeStackParamList, "Home">,
    StackNavigationProp<RootStackParamList>
  >;
}

export interface CarDetailsScreenProps {
  route: RouteProp<HomeStackParamList, "CarDetails">;
  navigation: CompositeNavigationProp<
    StackNavigationProp<HomeStackParamList, "CarDetails">,
    StackNavigationProp<RootStackParamList>
  >;
}

export interface RentFormScreenProps {
  route: RouteProp<HomeStackParamList, "RentForm">;
  navigation: CompositeNavigationProp<
    StackNavigationProp<HomeStackParamList, "RentForm">,
    StackNavigationProp<RootStackParamList>
  >;
}

export interface RentConfirmationScreenProps {
  route: RouteProp<HomeStackParamList, "RentConfirmation">;
  navigation: CompositeNavigationProp<
    StackNavigationProp<HomeStackParamList, "RentConfirmation">,
    StackNavigationProp<RootStackParamList>
  >;
}
