import logo from './logo.svg';
import Playground from './playground/src';
import './App.css';
import React from 'react';
import "antd/dist/antd.css";

const playgroundInitialState = {
  width: 400,
  height: 700,
  alignItems: 1,
  padding: {
    top: '20',
    right: '20',
    bottom: '20',
    left: '20',
  },
  children: [
    {
      width: 100,
      height: 100,
      minWidth: null,
      maxWidth: null,
      minHeight: null,
      maxHeight: null,
    },
    {
      width: 100,
      height: 100,
      margin: {
        right: '20',
        left: '20',
      },
      flexGrow: '1',
      minWidth: null,
      maxWidth: null,
      minHeight: null,
      maxHeight: null,
    },
    {
      width: 100,
      height: 100,
      minWidth: null,
      maxWidth: null,
      minHeight: null,
      maxHeight: null,
    },
  ],
  minWidth: null,
  maxWidth: null,
  minHeight: null,
  maxHeight: null,
};

export default class App extends React.Component {
  render() {
    return (
      <Playground
        selectedNodePath={[]}
        showGuides={true}
        height={'100vh'}
        layoutDefinition={playgroundInitialState}
      />
    )
  }
}
