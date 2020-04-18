import { render, RenderResult } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import React from "react";
import { Provider } from "react-redux";
import reduxMockStore from "redux-mock-store";
import thunk from "redux-thunk";

export const mockAxios = new MockAdapter(axios);

const mockStore = reduxMockStore([]),
  store = mockStore({ counter: { value: 0 } });

const AllTheProviders = ({ children }: any) => {
  return <Provider store={store}>{children}</Provider>;
};

const customRender = (ui: any, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";
// override render method
export { customRender as render };
