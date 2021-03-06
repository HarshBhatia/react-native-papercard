import elementTypes from './elementTypes';

const sampleCanvasElementsObject = [
  {
    key: 0,
    type: elementTypes.TEXT,
    position: { x: 50, y: 50, z: 2 },
    scale: 5,
    props: {
      text: 'Hello World!',
      style: {
        fontSize: 20,
      },
    },
  },
  {
    key: 1,
    type: elementTypes.TEXT,
    position: { x: 150, y: 250, z: 2 },
    scale: 5,
    props: {
      text: 'Bye Bye.',
      style: {
        fontSize: 20,
      },
    },
  },
  {
    key: 2,
    type: elementTypes.TEXT,
    position: { x: 10, y: 100, z: 2 },
    scale: 5,
    props: {
      text: 'sup! ',
      style: {
        fontSize: 20,
      },
    },
  },
];

export default sampleCanvasElementsObject;
