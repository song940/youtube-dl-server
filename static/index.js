import { ready, createLink } from 'https://lsong.org/scripts/dom.js';
import { requestForm } from 'https://lsong.org/scripts/form.js';

ready(() => {
  requestForm('#form', (err, res) => {
    console.log(err, res);
    const {  title, url } = res;
    const link = createLink(title, url);
    document.body.appendChild(link);
  });
});