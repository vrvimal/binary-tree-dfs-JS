// traverse the tree
// change the index of the first child & the second (flip)
// traverse further down
// change the index of the inner child's (flip again) & go on & on & on ...

(() => {
  let myObj = {
    node: "A",
    children: [
      {
        node: "B",
        children: [{ node: "D" }, { node: "E" }],
      },
      {
        node: "C",
        children: [
          { node: "F" },
          { node: "G", children: [{ node: "H" }, { node: "I" }] },
        ],
      },
    ],
  };

  /* for (const key in myObj) {
    if (key === "children") {
      let [tempChild0, tempChild1 ] = myObj[key];
      myObj.children[0] = tempChild1;
      myObj.children[1] = tempChild0;
      console.log("modified myObj", myObj);
    }
  } */

  const fn = (currentObj) => {
    for (const key in currentObj) {
      if (key === "children") {
        const [tempChild0, tempChild1] = currentObj[key];
        currentObj.children[0] = tempChild1;
        currentObj.children[1] = tempChild0;
        fn(currentObj.children[0]);
        fn(currentObj.children[1]);
      }
    }
    return currentObj;
  };

  console.log(JSON.stringify(fn(myObj), null, 2));
})();
