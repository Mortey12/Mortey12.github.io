export const route = $state({ parts: [] });
const read = () => (route.parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean).map(decodeURIComponent));
read();
addEventListener("hashchange", read);
export const go = path => (location.hash = "#/" + path);
