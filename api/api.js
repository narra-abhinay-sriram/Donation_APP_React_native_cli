import auth from '@react-native-firebase/auth';

export const createUser = async (fullname, email, password) => {
    try {
        const userCredential = await auth().createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        await user.updateProfile({ displayName: fullname });
        return user;

    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            return ({error:'The email address is already in use!'});
        } else if (error.code === 'auth/invalid-email') {
            return ({error:'The email is invalid!!'});
        } else {
            return({error:'Something went wront, Try again later'});
        }
    }
};
