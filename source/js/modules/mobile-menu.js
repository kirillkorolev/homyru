const header = document.querySelector(`.page-header`);
const button = header.querySelector(`.js-menu-button`);

const addListenerToMenuButton = () => {
  button.addEventListener(`click`, () => {
    if (header.classList.contains(`page-header--menu-closed`)) {
      header.classList.remove(`page-header--menu-closed`);
      header.classList.add(`page-header--menu-opened`);
    } else {
      header.classList.add(`page-header--menu-closed`);
      header.classList.remove(`page-header--menu-opened`);
    }
  });
};

export {addListenerToMenuButton};
