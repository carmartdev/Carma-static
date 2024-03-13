const main = {
  create: {
    main: (innerHTML, children = []) => {
      const newMain = document.createElement("main");
      newMain.innerHTML = innerHTML;
      children.forEach((child) => {
        newMain.appendChild(child);
      });
      children.forEach((child) => {
        child.classList.add("child");
      });
      document.body.appendChild(newMain);
    },
    heading: (type) => {},
  },
};
