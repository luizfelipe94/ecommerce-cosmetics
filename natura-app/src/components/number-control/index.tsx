import React from "react";
import { IoMdRemove, IoMdAdd } from "react-icons/io";
import { Container, LeftButton, NumberDisplay, RightButton } from "./styles";

export type NumberControlProps = {
  value: number;
  setValue: (value: number) => void;
};

export default function NumberControl({ value, setValue }: NumberControlProps) {

  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value - 1);

  return (
    <Container>
      <LeftButton onClick={decrement}>
        <IoMdRemove />
      </LeftButton>
      <NumberDisplay>
        {value}
      </NumberDisplay>
      <RightButton onClick={increment}>
        <IoMdAdd />
      </RightButton>
    </Container>
  );
}