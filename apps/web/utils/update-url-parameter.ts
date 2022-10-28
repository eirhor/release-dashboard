export const updateUrlParameter = (key: string, value: string) => {
    const newURL = new URL(window.location.href);

    if (value.length > 0) {
        newURL.searchParams.set(key, value);
    } else {
        newURL.searchParams.delete(key);
    }
    
    newURL.searchParams.sort();
    history.pushState(undefined, "", newURL.href);
}