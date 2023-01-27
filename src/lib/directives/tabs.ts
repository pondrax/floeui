// @unocss-include
export default (node: HTMLElement) => {
  let tabs = [...node.children] as HTMLElement[];
  let styles: string[] = [];
  let div = document.createElement('div');
  div.className = 'tabs tabs-bordered';

  tabs.forEach(child => {
    let title = child.dataset.title;
    styles.push(child.style.display)
    div.innerHTML += `<button data-title=${title}>${title}</button>`
  });
  node.prepend(div);

  const setActive = (id: number) => {
    tabs.forEach((child, i) => {
      if (i == id) {
        [...div.children][i].classList.add('tab-active')
        child.style.display = styles[i]
      }else{
        [...div.children][i].classList.remove('tab-active')
        child.style.display = 'none'
      }
    });
  }
  const handleClick = (event: Event) => {
    if (event.target instanceof HTMLElement) {
      if (div.contains(event.target)) {
        let selectedIndex = [...div.children].indexOf(event.target);
        setActive(selectedIndex);

        node.dispatchEvent(new CustomEvent("selectedTab"));
      }
    }
  };

  setActive(0)
  document.addEventListener("click", handleClick, true);

  return {
    destroy() {
      document.removeEventListener("click", handleClick, true);
    },
  };
}