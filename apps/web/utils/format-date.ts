export const formatDate = (date: string) => {
  const _date = new Date(date);
  const now = new Date();

  if (
    _date.getDate() === now.getDate() &&
    _date.getMonth() === now.getMonth() &&
    _date.getFullYear() === now.getFullYear()
  ) {
    const hrsAgo = _date.getHours() - now.getHours();

    return `${hrsAgo} hours ago`;
  }

  return `${Intl.DateTimeFormat().format(_date)}`;
};
