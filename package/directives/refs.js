export const ref = (node, target) => {
    const ref = node?.parentNode?.querySelector(target);
    const prop = target.replace(/\[(.*)\]/g, '$1');
    // console.log(prop)
    return ref.getAttribute(prop) || '';
};
export default (node, target) => {
    setTimeout(() => {
        const html = ref(node, target);
        node.innerHTML = html;
    }, 250);
    return {};
};
