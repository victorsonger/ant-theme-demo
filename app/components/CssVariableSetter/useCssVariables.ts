import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { theme } from "antd";
import { generate } from "@ant-design/colors";

// 目前只需要用到ant tokens中符合下面几种规则的样式
const filterTokenKey = (tokenName: string) => {
  return (
    tokenName.startsWith("color") ||
    tokenName.startsWith("control") ||
    tokenName === "boxShadow"
  );
};

// 生成随机字符串
function generateRandomString(length: number) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const useCssVariables = (isGlobal?: boolean) => {
  const [cssVarContainerID] = useState(
    `css-var-container-${generateRandomString(6)}`
  );

  console.log("cssVarContainerID---", cssVarContainerID);

  const styleEleId = useMemo(() => {
    return isGlobal ? "style-is-global" : `style-${cssVarContainerID}`;
  }, [cssVarContainerID, isGlobal]);

  const { token } = theme.useToken();
  const setCssVariables = useCallback(() => {
    let styleEle = document.getElementById(styleEleId) as HTMLStyleElement;
    const isAlreadyHaveStyleEle = Boolean(styleEle);
    if (!isAlreadyHaveStyleEle) {
      // 如果当前的themeContainer没有对应head中的style标签
      // 则新建一个，并加入head
      styleEle = document.createElement("style");
      styleEle.id = styleEleId;
      styleEle.setAttribute("type", "text/css");
      document.head.append(styleEle);
    }

    // 创建css变量字符串
    let cssVariablesString = "";

    // 遍历antd的token并为每一个值添加对应的css变量
    const colorTokenArr = Object.keys(token)
      .filter(filterTokenKey)
      .map((tokenName) => ({
        tokenName,
        tokenValue: token[tokenName as keyof typeof token],
      }));
    colorTokenArr.forEach(({ tokenName, tokenValue }) => {
      cssVariablesString = cssVariablesString.concat(
        `--${tokenName}: ${tokenValue};`
      );
      // 如果是全局的configProvider，则还需要添加对应的--global-xxxx
      // 使整个项目的任何位置都能引用到此css变量
      if (isGlobal) {
        cssVariablesString = cssVariablesString.concat(
          `--global-${tokenName}: ${tokenValue};`
        );
      }
    });

    // 中性色
    // 只需要写入全局的style中即可
    // 所有configProvider下用到的变量都是一致的
    if (isGlobal) {
      const colorGroupNeutral = generate("#c7c7c7");
      colorGroupNeutral.forEach((color, index) => {
        cssVariablesString = cssVariablesString.concat(
          `--neutral-color-${index}: ${color};`
        );
      });
    }

    // 定义这些css变量生效的作用域（css选择器）
    const styleRootSelector = isGlobal ? ":root" : `#${cssVarContainerID}`;

    // 将选择器与css变量字符串拼接
    cssVariablesString = `${styleRootSelector} { ${cssVariablesString} }`;

    // 将完整的css变量（包括选择器）内容写入对应的style标签
    styleEle.innerHTML = cssVariablesString;
  }, [cssVarContainerID, isGlobal, styleEleId, token]);

  const clearCssVariables = useCallback(() => {
    let styleEle = document.getElementById(styleEleId) as HTMLStyleElement;
    styleEle.remove?.();
  }, [styleEleId]);

  useEffect(() => {
    setCssVariables();
    return () => {
      clearCssVariables();
    };
  }, [clearCssVariables, setCssVariables]);

  return {
    cssVarContainerID,
  };
};

export default useCssVariables;
