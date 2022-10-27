export const updateUrlParameter = (key: string, value: string) => {
    const newURL = new URL(window.location.href);
    newURL.searchParams.set(key, value);
    newURL.searchParams.sort();
    history.pushState(undefined, '', newURL.href);
};
