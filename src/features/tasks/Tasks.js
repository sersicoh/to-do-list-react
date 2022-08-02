import React from "react";
import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";

function Tasks() {

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={
          <List />}
        extraHeaderContent={
          <Buttons />
        }
      />
    </Container>
  );
}

export default Tasks;
