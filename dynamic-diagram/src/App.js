import React, { useState } from 'react';
import ReactFlow from 'react-flow-renderer';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  // State to manage nodes and edges
  const [nodes, setNodes] = useState([
    {
      id: '1',
      type: 'default',
      data: { label: 'Node 1' },
      position: { x: 100, y: 100 }
    }
  ]);
  
  const [edges, setEdges] = useState([]);

  const onNodeAdd = () => {
    const newNode = {
      id: Math.random().toString(),
      type: 'default',
      data: { label: `Node ${Math.random().toString(36).substr(2, 5)}` },
      position: { x: Math.random() * 300, y: Math.random() * 300 }
    };
    setNodes([...nodes, newNode]);
  };

  // Function to handle adding an edge
  const onEdgeAdd = (params) => {
    setEdges([...edges, params]);
  };

  // Function to handle node removal
  const onNodeRemove = (nodeId) => {
    setNodes(nodes.filter((node) => node.id !== nodeId));
    setEdges(edges.filter((edge) => edge.source !== nodeId && edge.target !== nodeId));
  };

  return (
    <div style={{ height: '100vh', display: 'flex' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onEdgeAdd}
        onNodeClick={(event, node) => onNodeRemove(node.id)}
      />
      <Sidebar onNodeAdd={onNodeAdd} />
    </div>
  );
}

export default App;
