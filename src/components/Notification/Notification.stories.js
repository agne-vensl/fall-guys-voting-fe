import React from "react";
import Notification from "./Notification";

export default {
  title: "Components/Notification",
  component: Notification,
};

const Template = args => <Notification {...args} handleDelete={() => {}} />;

export const Success = Template.bind({});
Success.args = {
  type: "success",
  message: "Success!",
};

export const Error = Template.bind({});
Error.args = {
  type: "error",
  message: "Error.",
};
