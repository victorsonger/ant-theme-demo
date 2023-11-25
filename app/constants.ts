import { ThemeAlgorithm } from "@/app/enums";
import { theme } from "antd";

export enum AppThemeType {
  Red,
  Yellow,
  Blue,
  Custom,
}

const commonToken = {
  borderRadius: 0,
};

const antdThemeMap = {
  [AppThemeType.Blue]: {
    algorithm: theme.defaultAlgorithm,
    token: {
      ...commonToken,
      colorPrimary: "#232773",
    },
  },
  [AppThemeType.Red]: {
    algorithm: theme.darkAlgorithm,
    token: {
      ...commonToken,
      colorPrimary: "#e3425a",
    },
  },
  [AppThemeType.Yellow]: {
    algorithm: theme.defaultAlgorithm,
    token: {
      ...commonToken,
      colorPrimary: "#f5ca0a",
    },
  },
};

const themeTypeOptions = [
  {
    label: "蓝",
    value: AppThemeType.Blue,
  },
  {
    label: "红",
    value: AppThemeType.Red,
  },
  {
    label: "黄",
    value: AppThemeType.Yellow,
  },
  {
    label: "自定义",
    value: AppThemeType.Custom,
  },
];

const themeAlgorithmOptions = [
  {
    label: "亮",
    value: ThemeAlgorithm.Light,
  },
  {
    label: "暗",
    value: ThemeAlgorithm.Dark,
  },
];

const defaultCustomizeThemeParams = {
  themeAlgorithm: ThemeAlgorithm.Light,
  token: {
    ...commonToken,
    colorPrimary: "#006eff",
    colorBgBase: '#ffffff'
  },
};

export {
  antdThemeMap,
  defaultCustomizeThemeParams,
  themeAlgorithmOptions,
  themeTypeOptions,
};
