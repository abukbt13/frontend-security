import {onMounted, ref} from "vue";
import axios from "axios";

export function auth(){
    const authHeader = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } };

    // const base_url = ref('https://ben.kwetunyumbani.online/api/')
    // const storage = ref('https://ben.kwetunyumbani.online/backend/public/profiles/')

    const base_url = ref('http://127.0.0.1:8000/api/')
    const storage = ref('http://127.0.0.1:8000/')

    const   authUser = async () => {
        try {
            const res= await axios.get(base_url.value+'auth/user', authHeader);
        } catch (error) {
            window.location.href = '/login';
        }
    }
    return {
        authHeader,authUser,base_url,storage
    }
}