import React from "react";
import Form from "./Form";
import Button from "../button/Button";

export default {
  title: "Components/Form",
  component: Form,
};

const Template = args => (
  <Form {...args}>
    <div className="input-field">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" placeholder="John"></input>
    </div>

    <div className="input-field">
      <label htmlFor="surname">Surname</label>
      <input type="text" id="surname" placeholder="Carp"></input>
    </div>

    <Button text="Submit" />
  </Form>
);

export const PrimaryForm = Template.bind({});
PrimaryForm.args = {
  name: "story-form",
};
