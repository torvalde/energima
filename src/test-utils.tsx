import { render, RenderResult } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import reduxMockStore from "redux-mock-store";
import thunk from "redux-thunk";

export const mockAxios = new MockAdapter(axios);

const mockStore = reduxMockStore([thunk]),
  store = mockStore({
    counter: 0,
  });

const WithStore: React.FunctionComponent = (props) => (
  <Provider store={store}>{props.children}</Provider>
);

const WithRouter: React.FunctionComponent = (props) => (
  <MemoryRouter>{props.children}</MemoryRouter>
);

const WithStoreAndRouter: React.FunctionComponent = (props) => (
  <Provider store={store}>
    <MemoryRouter>{props.children}</MemoryRouter>
  </Provider>
);

const customRender = (
  ui: React.ReactElement<any>,
  options?: object
): RenderResult => render(ui, { ...options });

export const renderWithStore = (
  ui: React.ReactElement<any>,
  options?: object
): RenderResult => render(ui, { wrapper: WithStore, ...options });

export const renderWithRouter = (
  ui: React.ReactElement<any>,
  options?: object
): RenderResult => render(ui, { wrapper: WithRouter, ...options });

export const renderWithStoreAndRouter = (
  ui: React.ReactElement<any>,
  options?: object
): RenderResult => render(ui, { wrapper: WithStoreAndRouter, ...options });

// re-export everything
export * from "@testing-library/react";
// override render method
export { customRender as render, store };
