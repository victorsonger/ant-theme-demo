import React from "react";
import { Card, ConfigProvider, ThemeConfig, theme } from "antd";
import AntdComponentSample from "@/app/components/AntdComponentSample";
import CssVariableSetter from "@/app/components/CssVariableSetter";

import "./styles.css";

// 此层级使用静态配置，不随全局主题切换改变
const levelTwoTheme: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  inherit: false,
  token: {
    colorPrimary: "#EAB75A",
    colorBgBase: "#C8EADC",
  },
};

const LevelTwo: React.FunctionComponent = () => {

  return (
    <ConfigProvider theme={levelTwoTheme}>
      <CssVariableSetter>
        <div className="levelTwo">
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
