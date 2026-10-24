// Ei felles klokke for nedteljing. Tikkar fire gonger i sekundet.
export const klokke = $state({ no: Date.now() });
setInterval(() => { klokke.no = Date.now(); }, 250);

// Rekna ut når svarfristen går ut, i lokal tid. Om klokka på eininga er langt unna
// tenaren, blir tidspunktet då dokumentet kom fram brukt som start i staden.
const motteke = new Map();
export function slutt(no, msFn){
  if (!no?.id || !no.opna) return 0;
  const opna = msFn(no.opna);
  if (!motteke.has(no.id)) motteke.set(no.id, Date.now());
  const start = Math.abs(motteke.get(no.id) - opna) < 3000 ? opna : motteke.get(no.id);
  return start + (no.tid || 20) * 1000;
}
