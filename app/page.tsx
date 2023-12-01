"use client";

import { useState } from "react";
import { Col, Row } from "antd";

import { AppThemeType, defaultCustomizeThemeParams } from "@/app/constants";
import type { CustomizeThemeParams } from "@/app/hooks/useThemeConfig";
import { AppGlobalContext } from "@/app/context/contextManager";
import ThemeChanger from "@/app/parts/ThemeChanger";
import LevelTop from "@/app/parts/LevelTop";

export default function Home() {
  const [appThemeType, setAppThemeType] = useState(AppThemeType.Blue);
  const [customizeThemeParams, setCustomizeThemeParams] = useState<
    CustomizeThemeParams
  >(defaultCustomizeThemeParams);
  return (
    <div>
      <AppGlobalContext.Provider
        value={{
          appThemeType,
          setAppThemeType,
          customizeThemeParams,
          setCustomizeThemeParams,
        }}
      >
        <Row gutter={20}>
          <Col span={6}>
            <ThemeChanger />
          </Col>

          <Col span={18}>
            <LevelTop />
          </Col>

        </Row>
      </AppGlobalContext.Provider>
    </div>
  );
}
