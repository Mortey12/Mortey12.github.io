// Etnequizen brukar same Firebase-prosjekt som Premiejakt, men eigne samlingar (etne*).
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9pQJFv0_uhsWlEfMyibc608uxxDAtpkI",
  authDomain: "quiz-samarbeid.firebaseapp.com",
  projectId: "quiz-samarbeid",
  storageBucket: "quiz-samarbeid.firebasestorage.app",
  messagingSenderId: "968266660672",
  appId: "1:968266660672:web:e86724467bb2b398edd8a5"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
auth.languageCode = "no";
export const db = getFirestore(app);

export async function loggInn(){
  try { await signInWithPopup(auth, new GoogleAuthProvider()); }
  catch (e) { if (e.code === "auth/popup-blocked") await signInWithRedirect(auth, new GoogleAuthProvider()); else throw e; }
}
export const loggUt = () => signOut(auth);

export async function harTilgang(user){
  if (!user || !user.email) return false;
  try { return (await getDoc(doc(db, "etneTilgang", user.email.toLowerCase()))).exists(); } catch (_) { return false; }
}

export const feiltekst = e => ({
  "permission-denied": "du har ikkje lov til dette",
  "unavailable": "ingen kontakt med tenaren",
  "auth/popup-closed-by-user": "innlogginga vart avbroten"
}[e && e.code] || (e && e.message) || "ukjend feil");

// Bilete ligg i eigne dokument og blir henta ved behov
const bileteCache = new Map();
export function hentBilete(id){
  if (!id) return Promise.resolve(null);
  if (!bileteCache.has(id)) bileteCache.set(id, getDoc(doc(db, "etneBilete", id)).then(d => d.exists() ? d.data().data : null).catch(() => null));
  return bileteCache.get(id);
}
export const leggIBileteCache = (id, data) => bileteCache.set(id, Promise.resolve(data));
