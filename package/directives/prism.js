import { highlight, languages } from 'prismjs';
export default (node, html) => {
    node.dataset.code = html;
    node.innerHTML = highlight(html, languages['html'], 'html');
    return {};
};
