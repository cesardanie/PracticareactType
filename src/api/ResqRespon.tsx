import axios from "axios";

export const ResqRespon=axios.create(
    {
        baseURL:'https://reqres.in/api'

    }
);