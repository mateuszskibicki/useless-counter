import React from "react";
import { StyleSheet } from "react-native";
import { Container } from "native-base";
import { colors } from "../../../constants/stylesMain";

interface IProps {
  children: any;
}

const MainLayout: React.FunctionComponent<IProps> = ({
  // headerTitle,
  children
}: IProps): JSX.Element => {
  return <Container style={styles.container}>{children && children}</Container>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary
  }
});

export default MainLayout;
