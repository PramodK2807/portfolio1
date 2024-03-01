import React from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  ControlsProvider,
  useStoreState,
  useStoreActions,
  Position,
} from 'react-flow-renderer';

import 'react-flow-renderer/dist/style.css';

const nodeDefaults = {
  sourcePosition: Position.Right,
  targetPosition: Position.Left,
};

const FlowChart = () => {
  const initialNodes = [
    {
      id: 'fullstack-skills',
      type: 'input',
      data: { label: 'Full Stack Developer Skills' },
      position: { x: 400, y: 50 },
    },
    {
      id: 'frontend-skills',
      data: { label: 'Frontend Skills' },
      position: { x: 150, y: 150 },
      ...nodeDefaults,
    },
    {
      id: 'backend-skills',
      data: { label: 'Backend Skills' },
      position: { x: 400, y: 150 },
      ...nodeDefaults,
    },
    {
      id: 'other-skills',
      data: { label: 'Other Skills' },
      position: { x: 650, y: 150 },
      ...nodeDefaults,
    },
    {
      id: 'frontend-skill-1',
      data: { label: 'HTML' },
      position: { x: 150, y: 250 },
      type: 'output',
    },
    {
      id: 'frontend-skill-2',
      data: { label: 'CSS' },
      position: { x: 150, y: 350 },
      type: 'output',
    },
    // Add other frontend skills similarly
    {
      id: 'backend-skill-1',
      data: { label: 'Node.js' },
      position: { x: 400, y: 250 },
      type: 'output',
    },
    {
      id: 'backend-skill-2',
      data: { label: 'Databases' },
      position: { x: 400, y: 350 },
      type: 'output',
    },
    // Add other backend skills similarly
    {
      id: 'other-skill-1',
      data: { label: 'DevOps' },
      position: { x: 650, y: 250 },
      type: 'output',
    },
    {
      id: 'other-skill-2',
      data: { label: 'Agile Methodologies' },
      position: { x: 650, y: 350 },
      type: 'output',
    },
    // Add other skills similarly
  ];

  const initialEdges = [
    { id: 'e1', source: 'fullstack-skills', target: 'frontend-skills' },
    { id: 'e2', source: 'fullstack-skills', target: 'backend-skills' },
    { id: 'e3', source: 'fullstack-skills', target: 'other-skills' },
    // Connect other skills similarly
  ];

  const setElements = useStoreActions((actions) => actions.setElements);
  const elements = useStoreState((state) => state.elements);

  React.useEffect(() => {
    setElements([...initialNodes, ...initialEdges]);
  }, [setElements]);

  return (
    <div style={{ height: '600px', width: '100%' }}>
      <ReactFlow elements={elements} onLoad={() => console.log('Flow loaded')}>
        <Background />
        <ControlsProvider>
          <Controls />
          <MiniMap />
        </ControlsProvider>
      </ReactFlow>
    </div>
  );
};

export default FlowChart;
