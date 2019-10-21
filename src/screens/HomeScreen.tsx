import React from "react";
import { Button, Body, Content, Text, Card, CardItem } from "native-base";
import MainLayout from "../components/layout/main/MainLayout";
// import stylesMain from "../constants/stylesMain";
// import { colors, shadows, font } from "../constants/stylesMain";

const HomeScreen: any = ({ navigation }): JSX.Element => {
  return (
    <MainLayout>
      <Content padder centerContent>
        <Card>
          <CardItem>
            <Body>
              <Text>Home screen 123!</Text>
            </Body>
          </CardItem>
        </Card>
        <Button
          full
          rounded
          dark
          style={{ marginTop: 10 }}
          onPress={() => navigation.push("Second")}
        >
          <Text>Go to second</Text>
        </Button>
      </Content>
    </MainLayout>
  );
};

/**
|--------------------------------------------------
| Header options
|--------------------------------------------------
*/
HomeScreen.navigationOptions = {
  title: "Home !"
};

export default HomeScreen;
