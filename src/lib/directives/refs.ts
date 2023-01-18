export const ref = (node: HTMLElement, target: string) => {
  const ref = node?.parentNode?.querySelector(target) as HTMLElement;
  const prop = target.replace(/\[(.*)\]/g, '$1');
  // console.log(prop)
  return ref.getAttribute(prop) || '';
}
export default (node: HTMLElement, target: string) => {
  setTimeout(() => {
    const html = ref(node, target);
    node.innerHTML = html;
  }, 250)
  return {};
}