import React from "react";
import { Button, Body, Content, Text, Card, CardItem, Icon } from "native-base";
import MainLayout from "../components/layout/main/MainLayout";

export interface IProps {
  navigation: any;
}

export interface NavFunctionComponent extends React.FunctionComponent<IProps> {
  navigationOptions?: Object;
}

const HighestScoreScreen: NavFunctionComponent = ({
  navigation
}: IProps): JSX.Element => {
  return (
    <MainLayout>
      <Content padder centerContent>
        <Card>
          <CardItem>
            <Body>
              <Text>Highest score screen!!</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </MainLayout>
  );
};

export default HighestScoreScreen;
