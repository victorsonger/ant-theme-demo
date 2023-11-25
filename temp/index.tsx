import { ConfigProvider, theme } from "antd";
import { FC } from "react";

interface MyProps {}


import { generate, presetDarkPalettes } from '@ant-design/colors';

// 通过一个给定的颜色，以暗色算法生成一系列衍生色
const colors = generate('#1890ff', {
  theme: 'dark',
  backgroundColor: '#141414',
});
// 衍生色
console.log(colors); // ['#111d2c', '#112a45', '#15395b', '#164c7e', '#1765ad', '#177ddc', '#3c9ae8', '#65b7f3', '#8dcff8', '#b7e3fa']
// Ant预置的色板列表
console.log(presetDarkPalettes);
/*
{
  red: [...],
  volcano: [...],
  orange: [...],
  gold: [...],
  yellow: [...],
  lime: [...],
  green: [...],
  cyan: [...],
  blue: [...],
  geekblue: [...],
  purple: [...],
  magenta: [...],
}
*/

const XXX: FC<MyProps> = ({}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#de1b3a",
          colorInfo: "#de1b3a",
          colorBgBase: "#3c6796",
          colorTextBase: "#ffffff",
        },
        // 使用暗色算法
        algorithm: theme.darkAlgorithm,
        // 不继承祖先层级的Ant样式配置
        inherit: false,
      }}
    >
      <div>主要内容</div>
    </ConfigProvider>
  );
};

export default XXX;
