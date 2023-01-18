import { highlight, languages } from 'prismjs';

export default (node: HTMLElement, html:string)=>{
  node.dataset.code = html;
  node.innerHTML = highlight(html, languages['html'],'html')
  return {}
}