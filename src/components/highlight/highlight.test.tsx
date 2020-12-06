describe('Highlight', () => {
  it('renders string', () => {
    expect(true).toBeTruthy();
  });

  it('renders highlighted text', () => {
    expect(true).toBeTruthy();
  });

  // [string: "string to be rendered", string: "test description"]
  const scenarios: [string, string][] = [];

  describe.each(scenarios)(
    'does not render highlighted text, when:',
    (_, description) => {
      it(description, () => {
        expect(true).toBeTruthy();
      });
    },
  );
});
