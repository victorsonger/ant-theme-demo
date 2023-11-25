import { AppThemeType } from "@/app/constants";
import { CustomizeThemeParams } from "@/app/hooks/useThemeConfig";
import React, { Dispatch, SetStateAction } from "react";

interface AppContextValue {
  appThemeType: AppThemeType;
  setAppThemeType: Dispatch<SetStateAction<AppThemeType>>;
  customizeThemeParams: CustomizeThemeParams;
  setCustomizeThemeParams: Dispatch<SetStateAction<CustomizeThemeParams>>;
}

export const AppGlobalContext = React.createContext({} as AppContextValue);
