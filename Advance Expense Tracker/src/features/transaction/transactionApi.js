import axios from "../../utils/axios";

export const getTransactions= async()=>{
   
    const response =await axios.get('/transactions');

    return response.data;
}

export const addTransaction= async (data)=>{
    const response=await axios.post("/transactions",data);
    return response.data;
};

export const apiEditTransaction=async (id,data)=>{
    const response=await axios.put(`/transactions/${id}`,data);

    return response.data;
};

export const apiDeleteTransactions=async (id)=>{
    const response =axios.delete(`/transactions/${id}`);
    return (await response).data;
}