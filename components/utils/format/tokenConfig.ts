export const tokenConfig = (value: string ) => {
  //console.log('token: ', value)
    return {
      headers: { Authorization: `Bearer ${value}` },
    };
  };
  export const URL = () => "https://backend.cimade.edu.pe/api/v1";
  export const getURL = () => "https://backend.cimade.edu.pe/api/v1";

export default tokenConfig;