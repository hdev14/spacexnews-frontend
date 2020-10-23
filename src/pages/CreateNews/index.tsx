import React, { useState } from 'react';
import marked from 'marked';
import _ from 'lodash';

import { Container } from './styles';

const CreateNews: React.FC = () => {
  const [htmlContent, setHtmlContent] = useState('');

  function onChangeTextareaHandler(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const { value } = e.target;
    _.debounce(() => setHtmlContent(marked(value, { sanitize: true })), 500)();
  }

  return (
    <Container>
      <h1>nova notícia</h1>

      <form>
        <div>
          <label htmlFor="title">
            title
            <input type="text" name="title" />
          </label>
          <label htmlFor="author">
            url da imagem
            <input list="users" name="author" id="author" />
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
            <input type="text" name="image" />
          </label>
        </div>

        <div>
          <textarea onChange={onChangeTextareaHandler}></textarea>
          <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
        </div>
        <button type="submit">salvar</button>
      </form>
    </Container>
  );
}

export default CreateNews;
