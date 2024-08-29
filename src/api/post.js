import axios from 'axios'

const studentUrl = process.env.NEXT_PUBLIC_STS_URL;
const token = process.env.NEXT_PUBLIC_TOKEN;

export const getPosts = async () => {
    return await axios.get(`${studentUrl}/sts/apis/v1/PeerToPeer/files`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}
