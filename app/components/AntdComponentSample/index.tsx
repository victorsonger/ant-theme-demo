import { FC } from "react";
import { Button, Divider, Flex, Select, Steps } from "antd";

interface MyProps {}

const description = "A description.";

const AntdComponentSample: FC<MyProps> = ({}) => {
  return (
    <>
      <Flex align="center" gap={10}>
        <Button>默认按钮</Button>
        <Button type="primary">primary按钮</Button>
        <Select
          options={[
            { label: "苹果", value: 1 },
            { label: "西瓜", value: 2 },
          ]}
          defaultValue={1}
        ></Select>
      </Flex>

      <Divider></Divider>

      <Steps
        current={1}
        items={[
          {
            title: "Finished",
            content: description,
          },
          {
            title: "In Progress",
            content: description,
          },
          {
            title: "Waiting",
            content: description,
          },
        ]}
      />
    </>
  );
};

export default AntdComponentSample;
