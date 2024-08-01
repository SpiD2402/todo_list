import {loadProfile} from "../utils/apis.js";
import { useEffect, useState} from "react";

export const useFetch = () => {
    const [state, setState] = useState({
        data:null,
        isLoading: true,

    });

    useEffect(() => {
        getFetch()

    }, []);

    const getFetch=async ()=>{

        const  response = await (loadProfile());
        console.log(response)
        if (response.code !==200)
        {
            setState(
                {
                data:null,
                isLoading: false,
                }
            )
            return;
        }

        const data = await  response;
        setState({
            data:data,
            isLoading: false,
        })
    }
    return{
        data:state.data?.data,
        isLoading:state.isLoading,
    }


}