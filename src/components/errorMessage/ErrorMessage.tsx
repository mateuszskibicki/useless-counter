import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "native-base";
import { colors } from "../../constants/stylesMain";

export interface IProps {
  text: string;
}

const ErrorMessage: React.FunctionComponent<IProps> = ({
  text
}: IProps): JSX.Element | null => {
  if (!text || text.length === 0) return null;
  return (
    <View style={styles.alertWrapper}>
      <Text style={styles.alertText}>{text && text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  alertWrapper: {
    padding: 8,
    backgroundColor: colors.tomatoColor,
    borderRadius: 20,
    elevation: 7,
    textAlign: "center"
  },
  alertText: {
    textAlign: "center",
    color: colors.whiteSmoke,
    fontSize: 20,
    fontWeight: "600"
  }
});

export default memo(ErrorMessage);
