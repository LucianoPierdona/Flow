import { Form, Formik } from "formik";
import React from "react";
import { useCreatePodcastMutation } from "../../generated/graphql";
import { PodcastCreatePage, PodcastCreateBlock } from "./styles";
import { useHistory } from "react-router";
import { InputField } from "../FormLayout/components/InputField";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { useIsAuth } from "../../utils/useIsAuth";
import { withUrqlClient } from "next-urql";
import { Link } from "react-router-dom";

const CreatePodcast = () => {
  const history = useHistory();
  useIsAuth();
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
            <InputField
              name="title"
              label="titulo"
              placeholder="digite o titulo"
            />
            <InputField
              name="description"
              label="descrição"
              placeholder="coloque a descrição"
            />
            <InputField
              name="url"
              label="Link do Vídeo"
              placeholder="coloque o link do vídeo"
            />
            <InputField
              name="thumbnail"
              label="thumbnail"
              placeholder="thumbnail"
            />
            <button type="submit">Criar Podcast</button>
            <div className="external-links">
              <Link to="/">Voltar</Link>
            </div>
          </Form>
        </Formik>
      </PodcastCreateBlock>
    </PodcastCreatePage>
  );
};

export default withUrqlClient(createUrqlClient)(CreatePodcast);
