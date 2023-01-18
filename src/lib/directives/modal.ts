// @unocss-include
export default (node: HTMLElement, active: boolean) => {
  const toggleActive = (active: boolean = false) => {
    if (active) {
      node.classList.add('modal-open')
    } else {
      node.classList.remove('modal-open')
    }
  }
  const handleClick = (event: Event) => {
    if (event.target instanceof HTMLElement) {
      if (!node.children[0].contains(event.target)) {
        node.dispatchEvent(new CustomEvent("close"));
      }
    }
  };
  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      node.dispatchEvent(new CustomEvent("close"));
    }
  }
  toggleActive(active)
  node.addEventListener("click", handleClick, true);
  window.addEventListener("keydown", handleKeydown, true)
  return {
    update(newActive: boolean) {
      toggleActive(newActive);
    },
    destroy() {
      document.removeEventListener("click", handleClick, true);
    },
  };
}