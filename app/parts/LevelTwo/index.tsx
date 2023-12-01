import React from "react";
import { Card, ConfigProvider, ThemeConfig, theme } from "antd";
import AntdComponentSample from "@/app/components/AntdComponentSample";
import CssVariableSetter from "@/app/components/CssVariableSetter";

import "./styles.css";

const levelTwoTheme: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  inherit: false,
  token: {
    colorPrimary: "#EAB75A",
    colorBgBase: "#C8EADC",
  },
};

const LevelTwo: React.FunctionComponent = () => {
  // return (
  //   <div className="levelTwo">
  //     <h2>LevelTwo</h2>

  //     <Card>
  //       <AntdComponentSample></AntdComponentSample>
  //     </Card>
  //   </div>
  // );

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
