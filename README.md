Project: Dynamic Diagram Flow with React Flow
Project Overview
This project demonstrates how to build a dynamic diagram flow using the React Flow library. The application allows users to interactively create, update, and delete nodes and edges based on dynamically provided metadata. The app features a sidebar that facilitates the input of metadata for nodes and edges, making it a fully interactive experience.

Features
Dynamic Nodes: Users can add new nodes to the diagram with a click.
Dynamic Edges: Users can connect nodes by creating edges between them.
Editable Nodes: Each node can be removed, and its connections will be deleted as well.
Responsive Layout: The diagram is responsive, adjusting to different screen sizes.
Metadata-driven: Nodes and edges are created dynamically based on JSON metadata.
State Management: The app uses React's useState hook to manage the current state of the diagram.
Technologies Used:
React.js: Frontend library for building the user interface.
React Flow: A library for rendering interactive flow diagrams.
CSS: For styling the app and making it responsive.

Clone the repository:
https://github.com/Kurubasaipraveen/VENHAN
Navigate to the project directory:

cd dynamic-diagram-flow

Install dependencies:

npm install
Run the app locally:

npm start
The app should now be running at http://localhost:3000.

Usage
Add Node: Click the "Add Node" button in the sidebar to add a new node to the diagram.
Remove Node: Click the "Remove" button next to a node in the sidebar to delete that node and all its connected edges.
Connect Nodes: Drag from the edge of one node to the edge of another node to create an edge between them.
Delete Edge: To remove an edge, simply click on the edge in the diagram.


