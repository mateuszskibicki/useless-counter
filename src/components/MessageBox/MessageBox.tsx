import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "native-base";
import { colors } from "../../constants/stylesMain";

export interface IProps {
  text: string;
  green?: boolean;
  white?: boolean;
}

const MessageBox: React.FunctionComponent<IProps> = ({
  text,
  green,
  white
}: IProps): JSX.Element | null => {
  if (!text || text.length === 0) return null;
  return (
    <View
      style={[
        styles.alertWrapper,
        green && { backgroundColor: colors.primary },
        white && { backgroundColor: colors.whiteSmoke }
      ]}
    >
      <Text style={[styles.alertText, white && { color: colors.primary }]}>
        {text && text}
      </Text>
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

export default memo(MessageBox);
