# Diagram drawing

Using the library https://github.com/mrblenny/react-flow-chart I want to have a customisable flow diagram.

The backend will provide the frontend with some json objects, each which represent a node type.

```
{
  nodes: [
    {
      name: node1 //a name for the node
      unique: adfadfsad //a unique identifier that can be referenced from the diagram JSONobject
      type: square //which type of basic node to base this type on
      properties: [
        {
          address: input
          age: checkbox
          another: dropdown
        }
      ]
    }
  ]
}

another file will define the current diagram in a JSON object, i.e see simpleChart.js

## Requirements

* A directory of the components that make up the basic node types
* When a node is clicked all the properties are displayed in a panel on the side, and can be changed (and resaved to the JSON object and stored in state/localstorage)
* CSS to be able to customize all the parts of the diagram
* It is ok for typescript to be used within the components of the diagram, but not to configure it.

See examples https://mrblenny.github.io/react-flow-chart/index.html?path=/story/with-sidebar--default

specifically

* https://mrblenny.github.io/react-flow-chart/index.html?path=/story/sidebar--drag-and-drop
* https://mrblenny.github.io/react-flow-chart/index.html?path=/story/sidebar--selected-sidebar