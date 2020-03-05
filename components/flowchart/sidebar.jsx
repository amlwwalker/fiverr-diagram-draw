import React, {Component} from 'react'

import { cloneDeep, mapValues } from 'lodash'
import {FlowChart, FlowChartWithState} from "@mrblenny/react-flow-chart"
import { chartSimple} from "./simpleChart";
import {Page, Content, Sidebar, SidebarItem} from "./flowchartComponents"
import * as actions from "@mrblenny/react-flow-chart"
import styled, { createGlobalStyle } from 'styled-components'

const Outer = styled.div`
  padding: 30px;
  width: 250px;
`
const Message = styled.div`
  margin: 10px;
  padding: 10px;
  line-height: 1.4em;
`
const Input = styled.input`
  padding: 10px;
  border: 1px solid cornflowerblue;
  width: 100%;
`
const Circle = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  padding: 30px;
  // display: flex;
  // justify-content: center;
  align-items: center;
  background: #d30000;
  color: white;
  border-radius: 25%;
  opacity: 0.5;
`
const PortDefaultOuter = styled.div`
  width: 24px;
  height: 24px;
  background: cornflowerblue;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`
const PortCustom = (props) => (
    <PortDefaultOuter>
        { props.port.properties && props.port.properties.value === 'yes' && (
            <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                <path fill="white" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
            </svg>
        )}
        { props.port.properties && props.port.properties.value === 'no' && (
            <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                <path fill="white" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
            </svg>
        )}
        { !props.port.properties && (
            <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                <path fill="white" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
        )}
    </PortDefaultOuter>
)
const NodeInnerCustom = ({ node, config }) => {
    switch (node.type) {
        case 'output-only':
            return (
                <Outer>
                    <p>Use Node inner to customise the content of the node</p>
                </Outer>
            )
        case 'type1':
            return (
                <Outer>
                    <p>Lorem Ipsum type1</p>
                    <br />
                    <Input
                        type="string"
                        placeholder="path"
                        onChange={(e) => console.log(e)}
                        onClick={(e) => e.stopPropagation()}
                        onMouseUp={(e) => e.stopPropagation()}
                        onMouseDown={(e) => e.stopPropagation()}
                    />
                </Outer>
            )
        case 'type2':
            return (
                <Outer>
                    <p>Lorem Ipsum type2</p>
                    <Input
                        type="number"
                        placeholder="level"
                        onChange={(e) => console.log(e)}
                        onClick={(e) => e.stopPropagation()}
                        onMouseUp={(e) => e.stopPropagation()}
                        onMouseDown={(e) => e.stopPropagation()}
                    />
                </Outer>
            )
        case 'type3':
            return (
                <Outer>
                    <p>Lorem Ipsum type3</p>
                    <br />
                    <Input
                        type="string"
                        placeholder="path to page"
                        onChange={(e) => console.log(e)}
                        onClick={(e) => e.stopPropagation()}
                        onMouseUp={(e) => e.stopPropagation()}
                        onMouseDown={(e) => e.stopPropagation()}
                    />
                </Outer>
            )
        case 'type4':
            return (
                <Outer>
                    <p>Lorem Ipsum type4</p>
                    <br />
                    <Input
                        type="string"
                        placeholder="email address"
                        onChange={(e) => console.log(e)}
                        onClick={(e) => e.stopPropagation()}
                        onMouseUp={(e) => e.stopPropagation()}
                        onMouseDown={(e) => e.stopPropagation()}
                    />
                    <Input
                        type="string"
                        placeholder="content"
                        onChange={(e) => console.log(e)}
                        onClick={(e) => e.stopPropagation()}
                        onMouseUp={(e) => e.stopPropagation()}
                        onMouseDown={(e) => e.stopPropagation()}
                    />
                </Outer>
            )
        case 'type5':
            return (
                <Outer>
                    <p>Lorem Ipsum type 5</p>
                    <br />
                    <Input
                        type="string"
                        placeholder="table name"
                        onChange={(e) => console.log(e)}
                        onClick={(e) => e.stopPropagation()}
                        onMouseUp={(e) => e.stopPropagation()}
                        onMouseDown={(e) => e.stopPropagation()}
                    />
                </Outer>
            )
        case 'type6':
            return (
                <Outer>
                    <p>Lorem Ipsum type6</p>
                    <br />
                </Outer>
            )
        default:
            return (
                <Outer>
                    <p>Lorem Ipsum Default</p>
                    <br />
                    <Input
                        type="number"
                        placeholder="Some Input"
                        onChange={(e) => console.log(e)}
                        onClick={(e) => e.stopPropagation()}
                        onMouseUp={(e) => e.stopPropagation()}
                        onMouseDown={(e) => e.stopPropagation()}
                    />
                </Outer>
            )

    }
}
class DragAndDropSidebar extends Component {
    constructor(props) {
        super(props)
        this.state = cloneDeep(chartSimple)
    }

    render = () => {
        const chart = this.state
        const stateActions = mapValues(actions, (any) =>
            (...args) => this.setState(...args))
        return (
            <Page>
                <Content>
                    <FlowChartWithState initialValue={chart} config={{
                        snapToGrid: true,
                    }} Components={{
                        NodeInner: NodeInnerCustom,

                    }} callbacks={stateActions}/>
                </Content>
                <Sidebar>

                    <SidebarItem
                        type="type1"
                        ports={{
                            port1: {
                                id: 'port1',
                                type: 'right',
                                properties: {
                                    custom: 'property',
                                    value: "yes",
                                },
                            },
                        }}
                        properties={{
                            custom: 'property',
                        }}
                    />
                    <SidebarItem
                        type="type2"
                        ports={{
                            port1: {
                                id: 'port1',
                                type: 'right',
                                properties: {
                                    custom: 'property',
                                    value: "yes",
                                },
                            },
                        }}
                    />
                    <SidebarItem
                        type="type3"
                        ports={{
                            port1: {
                                id: 'port1',
                                type: 'left',
                                properties: {
                                    custom: 'property',
                                    value: "no",
                                },
                            },
                        }}
                    />
                    <SidebarItem
                        type="type4"
                        ports={{
                            port1: {
                                id: 'port1',
                                type: 'left',
                                properties: {
                                    custom: 'property',
                                    value: "no",
                                },
                            },
                        }}
                    />
                    <SidebarItem
                        type="type5"
                        ports={{
                            port1: {
                                id: 'port1',
                                type: 'left',
                                properties: {
                                    custom: 'property',
                                    value: "no",
                                },

                            },
                        }}
                    />
                    <SidebarItem
                        type="type6"
                        ports={{
                            port1: {
                                id: 'port1',
                                type: 'left',
                                properties: {
                                    custom: 'property',
                                    value: "no",
                                },
                            },
                            port2: {
                                id: 'port2',
                                type: 'right',
                                properties: {
                                    custom: 'property',
                                    value: "yes",
                                },
                            },
                        }}
                    />
                </Sidebar>
            </Page>
        )
    }
}

export default DragAndDropSidebar