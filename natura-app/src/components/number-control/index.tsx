import React from "react";
import { IoMdRemove, IoMdAdd } from "react-icons/io";
import { Button, Container, NumberDisplay } from "./styles";

export type NumberControlProps = {
  value: number;
  setValue: (value: number) => void;
};

export default function NumberControl({ value, setValue }: NumberControlProps) {

  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value - 1);

  return (
    <Container>
      <Button onClick={decrement}>
        <IoMdRemove />
      </Button>
      <NumberDisplay>{value}</NumberDisplay>
      <Button onClick={increment}>
        <IoMdAdd />
      </Button>
    </Container>
  );
}