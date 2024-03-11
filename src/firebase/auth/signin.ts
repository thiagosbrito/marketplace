import { auth } from "@/config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";



export default async function signIn(email: string, password: string) {
    let result = null,
        error = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
        const { user } = result;
        const sessionID = await user.getIdToken();
        sessionStorage.setItem('user_session', sessionID || "");
    } catch (e) {
        error = e;
    }

    return { result, error };
}