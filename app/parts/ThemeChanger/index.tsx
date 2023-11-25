import {
  AppThemeType,
  themeAlgorithmOptions,
  themeTypeOptions,
} from "@/app/constants";
import { AppGlobalContext } from "@/app/context/contextManager";
import { ColorPicker, Flex, Select } from "antd";
import { FC, useContext } from "react";

import "./index.css";
import { ThemeAlgorithm } from "@/app/enums";
import { CustomizeThemeTokens } from "@/app/hooks/useThemeConfig";
import { Color } from "antd/es/color-picker";

interface MyProps {}

const ThemeChanger: FC<MyProps> = ({}) => {
  const {
    appThemeType,
    setAppThemeType,
    customizeThemeParams,
    setCustomizeThemeParams,
  } = useContext(AppGlobalContext);

  const changeCustomizeThemeAlgorithm = (newThemeAlgorithm: ThemeAlgorithm) => {
    setCustomizeThemeParams({
      ...customizeThemeParams,
      themeAlgorithm: newThemeAlgorithm,
    });
  };

  const changeCustomizeThemeToken = (newToken: CustomizeThemeTokens) => {
    setCustomizeThemeParams({ ...customizeThemeParams, token: newToken });
  };

  const changeCustomizeThemePrimary = (color: Color) => {
    const newToken = {
      ...customizeThemeParams.token,
      colorPrimary: color.toHexString(),
    };
    console.log("newToken", newToken);
    changeCustomizeThemeToken(newToken);
  };

  const changeCustomizeThemeBgBase = (color: Color) => {
    const newToken = {
      ...customizeThemeParams.token,
      colorBgBase: color.toHexString(),
    };
    console.log("newToken", newToken);
    changeCustomizeThemeToken(newToken);
  };

  return (
    <div className="theme-changer">
      
      <Select
        value={appThemeType}
        options={themeTypeOptions}
        onChange={(val) => {
          setAppThemeType(val);
        }}
      ></Select>

      {appThemeType === AppThemeType.Custom && (
        <div className="customize-wrapper">
          <Select
            value={customizeThemeParams.themeAlgorithm}
            options={themeAlgorithmOptions}
            onChange={(val) => {
              changeCustomizeThemeAlgorithm(val);
            }}
          ></Select>

          <Flex gap="middle" align="center">
            <div>
              <span>强调色：</span>
              <ColorPicker
                disabledAlpha
                onChange={(val) => changeCustomizeThemePrimary(val)}
              />
            </div>
            <div>
              <span>背景色：</span>
              <ColorPicker
                disabledAlpha
                onChange={(val) => changeCustomizeThemeBgBase(val)}
              />
            </div>
          </Flex>
        </div>
      )}
    </div>
  );
};

export default ThemeChanger;
