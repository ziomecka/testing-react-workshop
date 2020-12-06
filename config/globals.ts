import * as testLib from '@testing-library/react';

declare global {
  var render: Render;
  var waitFor: WaitFor;
  var fireEvent: FireEvent;
  var within: Within;
  var customRender: CustomRender;
}

export type Render = typeof testLib.render;
export type RenderReturnType = testLib.RenderResult<
  typeof import('/home/katarzyna/Dokumenty/Workspace/react-testing/node_modules/@testing-library/dom/types/queries')
>;
export type WaitFor = typeof testLib.waitFor;
export type FireEvent = typeof testLib.fireEvent;
export type Within = typeof testLib.within;

type GetByRole = RenderReturnType['getByRole'];
export type GetByRoleWithTextContent = (
  role: string,
  text: string,
) => ReturnType<GetByRole>;

type CustomRenderResult = RenderReturnType & {
  getByRoleWithTextContent: GetByRoleWithTextContent;
};

export type CustomRender = (
  children: Parameters<Render>[0],
) => CustomRenderResult;
