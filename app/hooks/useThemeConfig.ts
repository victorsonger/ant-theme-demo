import { antdThemeMap, AppThemeType } from "@/app/constants";
import { AppGlobalContext } from "@/app/context/contextManager";
import { ThemeAlgorithm } from "@/app/enums";
import { theme, type ThemeConfig } from "antd";
import { useContext, useMemo } from "react";

export type CustomizeThemeTokens = NonNullable<ThemeConfig["token"]>;
export interface CustomizeThemeParams {
  themeAlgorithm: ThemeAlgorithm;
  token: CustomizeThemeTokens;
}

const useThemeConfig = () => {
  const { appThemeType, customizeThemeParams } = useContext(AppGlobalContext);
  const themeConfig = useMemo(() => {
    if (appThemeType !== AppThemeType.Custom) {
      return antdThemeMap[appThemeType];
    } else {
      return {
        algorithm:
          customizeThemeParams.themeAlgorithm === ThemeAlgorithm.Light
            ? theme.defaultAlgorithm
            : theme.darkAlgorithm,
        token: customizeThemeParams.token,
      };
    }
  }, [
    appThemeType,
    customizeThemeParams.themeAlgorithm,
    customizeThemeParams.token,
  ]);

  return {
    themeConfig,
  };
};
export default useThemeConfig;
