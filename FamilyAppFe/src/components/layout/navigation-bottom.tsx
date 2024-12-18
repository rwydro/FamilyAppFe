import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Home} from "@/screens/home/Home";
import {Image} from "react-native";
import {TasksList} from "@/screens/tasks/TasksList";
import {black, textGreyColor} from "@/design/colors";

type BottomTabParamList = {
    Home: undefined;
    TasksList: undefined
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export const BottomNavigation = () => {
    return (
        <BottomTab.Navigator
            screenOptions={{
                animation: 'fade',
                tabBarActiveTintColor: black,
                tabBarInactiveTintColor: textGreyColor,
                tabBarStyle: {
                    minHeight: 50,
                    justifyContent: 'center',
                    alignItems: 'stretch',
                }
            }}
        >
            <BottomTab.Screen name="Home" component={Home} options={{
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => {
                    return <Image style={{width: 24, height: 24, tintColor: focused ? undefined : textGreyColor}}
                                  source={require("../../assets/icons/Home.png")}/>
                }
            }}/>
            <BottomTab.Screen name="TasksList" component={TasksList}
                              options={{
                                  headerShown: false,
                                  tabBarShowLabel: false,
                                  tabBarIcon: ({focused}) => {
                                      return <Image style={{
                                          width: 24,
                                          height: 24,
                                          tintColor: focused ? undefined : textGreyColor
                                      }}
                                                    source={require("../../assets/icons/Calendar.png")}/>
                                  }
                              }}
            />
        </BottomTab.Navigator>
    )
}