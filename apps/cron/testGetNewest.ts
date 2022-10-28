import { newestReleaseDateInFirebase } from "./newestReleaseDateInFirebase.ts";
import { createFirestore } from "./setupFireStore.ts";

const db = createFirestore();

console.log("Newest Published Date in Firestore: ", await newestReleaseDateInFirebase(db));
