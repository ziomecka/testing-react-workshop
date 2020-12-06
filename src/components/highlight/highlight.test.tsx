import { Highlight, HighlightProps } from './highlight';
import React from 'react';

describe('Highlight', () => {
  const str = 'test string to be highlighted';

  it('renders string', () => {
    const props: HighlightProps = {
      str,
    };

    const { container } = render(<Highlight {...props} />);

    expect(container).toHaveTextContent(str);
  });

  it('renders highlighted text', () => {
    const props: HighlightProps = {
      str,
      match: 'string to be h',
    };

    const { getByRole } = render(<Highlight {...props} />);

    expect(getByRole('mark')).toHaveTextContent(props.match);
  });

  // [string: "string to be rendered", string: "test description"]
  const scenarios: [string, string][] = [
    ['', 'empty string'],
    [str + 1, 'not matching string'],
  ];

  describe.each(scenarios)(
    'does not render highlighted text, when:',
    (str, description) => {
      it(description, () => {
        const props: HighlightProps = {
          str,
          match: '',
        };

        const { queryByRole } = render(<Highlight {...props} />);

        expect(queryByRole('mark')).not.toBeInTheDocument();
      });
    },
  );
});
