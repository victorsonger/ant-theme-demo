import React from "react";
import { Card, ConfigProvider, ThemeConfig, theme } from "antd";
import AntdComponentSample from "@/app/components/AntdComponentSample";
import CssVariableSetter from "@/app/components/CssVariableSetter";

import styles from "./styles.module.css";

type MyProps = { xxx?: any };

const levelTwoTheme: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  inherit: false,
  token: {
    colorPrimary: "#FFA500",
    colorBgBase: "#3fbaa0",
  },
};

const LevelTwo: React.FunctionComponent<MyProps> = ({ xxx }) => {
  return (
    <ConfigProvider theme={levelTwoTheme}>
      <CssVariableSetter>
        <div className={styles.levelTwo}>
          <h2>LevelTwo</h2>

          <Card>
            <AntdComponentSample></AntdComponentSample>
          </Card>
        </div>
      </CssVariableSetter>
    </ConfigProvider>
  );
};

export default LevelTwo;
