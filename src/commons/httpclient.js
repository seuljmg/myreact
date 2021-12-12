import axios from "axios";

export default axios.create({
    baseURL:'https://springboot-test-noreact.herokuapp.com/',
    headers: {
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin': '*'
    }
})