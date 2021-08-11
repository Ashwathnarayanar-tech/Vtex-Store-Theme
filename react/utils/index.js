
export const apiOptions = (method,body) =>{
    const requestOptions = {
        method: method,
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-VTEX-API-AppKey': 'vtexappkey-echidna-XIRYPK',
            'X-VTEX-API-AppToken': 'DZFBAOGPFQAYSCDMOWPPALPLVXIZBFHAMZJKWZTZZXKTXOEAQBMMFRCRJTFDFGOZIZLTTSQOCPPCBWOGTHIZTVVVWRBDUPUTJKKYDKHYLYJQCZPNFYKYYOGMEQWBRMUM'
        }
    }
    if(body){
        requestOptions.body = body;
    }
    return requestOptions
}

