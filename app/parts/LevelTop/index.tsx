import React from "react";
import { Card, ConfigProvider } from "antd";
import LevelTwo from "@/app/parts/LevelTwo";
import useThemeConfig from "@/app/hooks/useThemeConfig";
import AntdComponentSample from "@/app/components/AntdComponentSample";
import CssVariableSetter from "@/app/components/CssVariableSetter";

import "./styles.css";

type MyProps = { xxx?: any };

const LevelTop: React.FunctionComponent<MyProps> = ({ xxx }) => {
  const { themeConfig } = useThemeConfig();
  return (
    <ConfigProvider theme={themeConfig}>
      <CssVariableSetter isGlobal />

      <div className="levelTop">
        <h1>LevelTop</h1>
        <Card>
          <div>
            <br />
            <AntdComponentSample />
          </div>
        </Card>

        <LevelTwo />
      </div>
    </ConfigProvider>
  );
};

export default LevelTop;
