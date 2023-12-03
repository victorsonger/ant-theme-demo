import useCssVariables from "./useCssVariables";
import React, { FC } from "react";

const CssVariableSetter: FC<{
  isGlobal?: boolean;
  children?: React.ReactNode;
}> = ({ isGlobal, children }) => {
  const { cssVarContainerID } = useCssVariables(isGlobal);
  if (isGlobal) {
    return <>{children}</>;
  }

  return (
    <div
      ref={(el) => {
        if (el) {
          el.id = cssVarContainerID;
        }
      }}
    >
      {children}
    </div>
  );
};
export default CssVariableSetter;
