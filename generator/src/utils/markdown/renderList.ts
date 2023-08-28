export const renderList = (items: string[]) =>
  items.map((item) => `* ${item}`).join('\n');
