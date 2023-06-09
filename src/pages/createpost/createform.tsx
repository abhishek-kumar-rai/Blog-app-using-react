import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {addDoc,collection} from 'firebase/firestore';
import {auth,db} from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import {useNavigate} from 'react-router-dom';

interface Createformdata {
    title: string;
    description: string;
}

export const Createform =()=>{
    const [user]=useAuthState(auth);
    const navigate = useNavigate();

    const schema = yup.object().shape({
        title: yup.string().required('you must provide a title'),
        description: yup.string().required('you must provide a description')
    });

    const {register,handleSubmit,formState:{errors},} = useForm<Createformdata>({
        resolver: yupResolver(schema),
    });

    const postsRef = collection(db,'posts');

    const onCreatePost =async(data:Createformdata)=>{
        await addDoc(postsRef,{
            // title:data.title,
            // description:data.description,
            ...data,
            user:user?.displayName,
            userId:user?.uid,
        })
        navigate("/");
    };
    return (
        <form onSubmit={handleSubmit(onCreatePost)}>
            <input placeholder='Title...' {...register('title')}/>
            <p style={{color:'red'}}>{errors.title?.message}</p>
            <textarea placeholder='Description...' {...register('description')}/>
            <p style={{color:'red'}}>{errors.description?.message}</p>
            <input type = 'submit' className="submitForm"/>
        </form>
    );
};