import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Icon, Badge } from "native-base";
import { colors } from "../../constants/stylesMain";
import { ISingleScoreAccordion } from "./ScoresList";

const ScoreHeader: React.FunctionComponent<ISingleScoreAccordion> = (
  item,
  expanded
): JSX.Element => {
  return (
    <View style={stylesHeader.scoreHeaderWrapper}>
      <View style={stylesHeader.scoreHeaderTitleWrapper}>
        {/* Badge Index */}
        <Badge style={stylesHeader.scoreHeaderBadgeIndex}>
          <Text style={stylesHeader.scoreHeaderBadgeTextIndex}>
            {item.number}
          </Text>
        </Badge>
        {/* Badge score */}
        <Badge style={stylesHeader.scoreHeaderBadgeScore}>
          <Text style={stylesHeader.scoreHeaderBadgeTextScore}>
            {item.score}
          </Text>
        </Badge>
        {/* Badge username */}
        <Text style={stylesHeader.scoreHeaderTitleText}>
          {item.user_nickname}
        </Text>
      </View>
      {/* Icon */}
      {expanded ? (
        <Icon
          type="Feather"
          name="chevron-up"
          style={stylesHeader.scoreHeaderIcon}
        />
      ) : (
        <Icon
          type="Feather"
          name="chevron-down"
          style={stylesHeader.scoreHeaderIcon}
        />
      )}
    </View>
  );
};

const stylesHeader = StyleSheet.create({
  scoreHeaderWrapper: {
    flexDirection: "row",
    padding: 8,
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 0,
    backgroundColor: colors.whiteSmoke,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    borderRadius: 4,
    marginBottom: 8,
    elevation: 4
  },
  scoreHeaderTitleWrapper: {
    flexDirection: "row"
  },
  scoreHeaderBadgeScore: {
    backgroundColor: colors.primary,
    marginRight: 8,
    elevation: 4
  },
  scoreHeaderBadgeTextScore: {
    color: colors.whiteSmoke,
    fontWeight: "600",
    fontSize: 14,
    textShadowColor: "rgba(0, 0, 0, 0.4)",
    textShadowOffset: { width: -1, height: 2 },
    textShadowRadius: 7
  },
  scoreHeaderBadgeIndex: {
    backgroundColor: colors.whiteSmoke,
    marginRight: 4
  },
  scoreHeaderBadgeTextIndex: {
    color: colors.textColor,
    fontWeight: "600"
  },
  scoreHeaderTitleText: {
    fontWeight: "600",
    color: colors.textColor
  },
  scoreHeaderIcon: {
    fontSize: 20,
    color: colors.primary
  }
});

export default ScoreHeader;
