import React, { Component } from "react";
import styled  from 'styled-components'
import {REACT_FLOW_CHART} from "@mrblenny/react-flow-chart/src";
export const Sidebar = styled.div`
  width: 300px;
  background: white;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`
// const GlobalStyle = createGlobalStyle`
//   body {
//     margin: 0px;
//     max-width: 100vw;
//     max-height: 100vh;
//     overflow: hidden;
//     box-sizing: border-box;
//     font-family: sans-serif;
//   }
//   *, :after, :before {
//     box-sizing: inherit;
//   }
// `

const PageContent = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  max-width: 100vw;
  max-height: 100vh;
`

export const Page = ({ children }) => (
    <PageContent>
        {children}
        {/*<GlobalStyle />*/}
    </PageContent>
)



const Outer = styled.div`
  padding: 20px 30px;
  font-size: 14px;
  background: white;
  cursor: move;
`


export const SidebarItem = ({ type, ports, properties }) => {
    return (
        <Outer
            draggable={true}
            onDragStart={ (event) => {
                event.dataTransfer.setData(REACT_FLOW_CHART, JSON.stringify({ type, ports, properties }))
            } }
        >
            {type}
        </Outer>
    )
}