type Row = string[];

export const renderTable = (head: Row, body: Row[]) => {
  const numberOfColumns = head.length;
  if (body.some((row) => row.length !== numberOfColumns)) {
    throw new TypeError('All rows must have the same number of columns');
  }

  const _head = renderRow(head);
  const _separator = renderRow(head.map(() => '---'));
  const _body = body.map(renderRow).join('\n');
  return [_head, _separator, _body].join('\n');
};

const renderRow = (data: Row) => `| ${data.join(' | ')} |`;
