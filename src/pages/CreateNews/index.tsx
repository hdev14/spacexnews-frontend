import React, { useState } from 'react';
import marked from 'marked';
import _ from 'lodash';

import { Container } from './styles';

const CreateNews: React.FC = () => {
  const [htmlContent, setHtmlContent] = useState('<h1> Escreva a notícia em markdown. </h1>');

  function onChangeTextareaHandler(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const { value } = e.target;
    _.debounce(() => setHtmlContent(marked(value, { sanitize: true })), 500)();
  }

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <Container>
      <h1>nova notícia</h1>

      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="title">
            Título da notícia
            <input type="text" name="title" placeholder="Digite o titulo."/>
          </label>
          <label htmlFor="author">
            Escolha o autor
            <input list="users" name="author" id="author" placeholder="Escolha o autor da notícia."/>
            <datalist id="users">
              <option value="Edge"/>
              <option value="Firefox"/>
              <option value="Chrome"/>
              <option value="Opera"/>
              <option value="Safari"/>
            </datalist>
          </label>
          <label htmlFor="image">
            url da imagem
            <input type="text" name="image" placeholder="Coloque a url da imagem principal aqui."/>
          </label>
        </div>

        <div id="news-content">
          <textarea onChange={onChangeTextareaHandler} placeholder="# Escreva a notícia em markdown."></textarea>
          <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
        </div>
        <button type="submit">salvar</button>
      </form>
    </Container>
  );
}

export default CreateNews;
