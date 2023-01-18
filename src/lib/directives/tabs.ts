// @unocss-include
export default (node: HTMLElement) => {
  let tabs = [...node.children] as HTMLElement[];
  let styles: string[] = [];
  let ul = document.createElement('ul');
  ul.className = 'tabs tabs-bordered';

  tabs.forEach(child => {
    let title = child.dataset.title;
    styles.push(child.style.display)
    ul.innerHTML += `<li data-title=${title}>${title}</li>`
  });
  node.prepend(ul);

  const setActive = (id: number) => {
    tabs.forEach((child, i) => {
      if (i == id) {
        [...ul.children][i].classList.add('tab-active')
        child.style.display = styles[i]
      }else{
        [...ul.children][i].classList.remove('tab-active')
        child.style.display = 'none'
      }
    });
  }
  const handleClick = (event: Event) => {
    if (event.target instanceof HTMLElement) {
      if (ul.contains(event.target)) {
        let selectedIndex = [...ul.children].indexOf(event.target);
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