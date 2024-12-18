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

export const loginUser = async(email,password)=>{
try{
    const response = await auth().signInWithEmailAndPassword(email,password);
    const token = await response.user.getIdToken();
    return {status:true,
        data:{

        email:response.user.email,
        name:response.user.displayName,
        token,
    },
    };

}catch(error)
{
          if(error.code === 'auth/invalid-credential')
              {
                return {status:false,error: 'Please check your email or password'};
               }
           if(error.code === 'auth/user-not-found')
                {
                   return {status:false,error: 'The email you entered does not exist. Please create a new account.'};

                 }

                  return {status: false, error: 'Something went wrong'};

}
};

export const logout = async()=>{
   await  auth().signOut();
};
