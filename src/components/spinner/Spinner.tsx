import React from "react";
import { Spinner } from "native-base";
import { colors } from "../../constants/stylesMain";

const SpinnerComponent: React.FunctionComponent<any> = (): JSX.Element => (
  <Spinner color={colors.whiteSmoke} />
);

export default SpinnerComponent;
