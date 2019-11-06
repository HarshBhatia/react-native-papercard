import elementTypes from "./elementTypes";

export default sampleCanvasElementsObject = [
  {
    key: 0,
    type: elementTypes.TEXT,
    position: { x: 50, y: 50, z: 2 },
    scale: 5,
    props: {
      text: "Hello World!",
      style: {
        fontSize: 20,
        fontFamily: "Roboto"
      }
    }
  },
  {
    key: 1,
    type: elementTypes.TEXT,
    position: { x: 150, y: 250, z: 2 },
    scale: 5,
    props: {
      text: "Bye Bye.",
      style: {
        fontSize: 20,
        fontFamily: "Roboto"
      }
    }
  },
  {
    key: 2,
    type: elementTypes.TEXT,
    position: { x: 10, y: 100, z: 2 },
    scale: 5,
    props: {
      text: "sup! ",
      style: {
        fontSize: 20,
        fontFamily: "Roboto"
      }
    }
  }
];
