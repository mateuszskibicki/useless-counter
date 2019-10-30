import React from "react";
import { Button, Body, Content, Text, Card, CardItem, Icon } from "native-base";
import MainLayout from "../components/layout/main/MainLayout";

export interface IProps {
  navigation: any;
}

export interface NavFunctionComponent extends React.FunctionComponent<IProps> {
  navigationOptions?: Object;
}

const CounterScreen: NavFunctionComponent = ({
  navigation
}: IProps): JSX.Element => {
  return (
    <MainLayout>
      <Content padder centerContent>
        <Card>
          <CardItem>
            <Body>
              <Text>Counter home screen!!</Text>
              <Text>Counter home screen!!</Text>
              <Text>Counter home screen!!</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </MainLayout>
  );
};

/**
|--------------------------------------------------
| Header options
|--------------------------------------------------
*/
// CounterScreen.navigationOptions = ({ navigation }) => {
//   return {
//     title: "Home !",
//     headerRight: () => (
//       <Icon
//         type="MaterialCommunityIcons"
//         name="logout"
//         onPress={() => {
//           navigation.navigate("AuthLogout");
//         }}
//       />
//     )
//   };
// };

export default CounterScreen;
