import axios from "axios";


export const fetchStatuses = ()=>{
    return (dispatch)=>{
        axios.get('https://expressjs-server.vercel.app/statuses')
            .then((response)=>{
                const statuses = response.data
                dispatch({
                    payload: statuses,
                    type: 'FETCH_STATUSES',
                })

            })
            .catch(error=> alert('Something went wrong. Try again later.'));
    }
}