export const signIn=async (data) =>{

    const  response= await fetch('http://localhost:8080/auth/signin',
        {
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(data),
        })

    if (response.ok)
    {
        const {data} = await response.json();
        localStorage.setItem('token',data.token);
        console.log(data)
    }

    else {
        return false

    }
}


export  const  loadProfile=async()=>{
    const token = localStorage.getItem('token');
    const  response= await fetch('http://localhost:8080/user/load',{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

    });
    if (response.ok)
    {
        const  data = await response.json();
        console.log(data);
        return data;

    }
    else {
        console.error('Error');
    }


}