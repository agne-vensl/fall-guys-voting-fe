import React from "react";
import Loading from "./Loading";

export default {
  title: "Components/Loading",
  component: Loading,
  argTypes: {
    color: {
      options: ["primary"],
    },
  },
};

const Template = args => (
  <div style={{ background: "#222", padding: "2rem" }}>
    <Loading {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  size: "3rem",
  margin: "3rem",
};
