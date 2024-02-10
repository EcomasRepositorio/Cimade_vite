export const tokenConfig = (value: string ) => {
  //console.log('token: ', value)
    return {
      headers: { Authorization: `Bearer ${value}` },
    };
  };
  export const URL = () => "http://localhost:8000/api/v1";
  export const getURL = () => "http://localhost:8000/api/v1";

export default tokenConfig;