import { Form, Formik } from "formik";
import React from "react";
import { useCreatePodcastMutation } from "../../generated/graphql";
import { PodcastCreatePage, PodcastCreateBlock } from "./styles";
import { useHistory } from "react-router";
import { InputField } from "../FormLayout/components/InputField";

const CreatePodcast = () => {
  const history = useHistory();
  const [, createPodcast] = useCreatePodcastMutation();

  return (
    <PodcastCreatePage>
      <PodcastCreateBlock>
        <header>
          <h1>Criar Podcast</h1>
          <p>Complete os campos abaixo para criar o podcast</p>
        </header>
        <Formik
          initialValues={{ title: "", description: "", url: "", thumbnail: "" }}
          onSubmit={async (values) => {
            const id = Math.random() * 1000000 + 1;
            const { error } = await createPodcast({ id, input: values });
            if (!error) {
              history.push("/");
            }
          }}
        >
          <Form>
            <InputField name="title" label="title" placeholder="titulo" />
          </Form>
        </Formik>
      </PodcastCreateBlock>
    </PodcastCreatePage>
  );
};

export default CreatePodcast;
