import { siginInWithGooglePopup } from '../../utils/firebase/firebase.utils'
const SignIn = () => {
    const signInWithGoogle = async () => {
        const response = await siginInWithGooglePopup();
        console.log(response)
    } 
    return (
        <div>
            <h1>helow from the sign in component</h1>
            <button onClick={signInWithGoogle}>Sign in with google</button>
        </div>
    )
}

export default SignIn;