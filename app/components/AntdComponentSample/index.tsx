import { FC } from "react";
import { Button, Col, Divider, Row, Select, Space, Steps, Flex } from "antd";

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
            description,
          },
          {
            title: "In Progress",
            description,
          },
          {
            title: "Waiting",
            description,
          },
        ]}
      />
    </>
  );
};

export default AntdComponentSample;
