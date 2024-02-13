export const tokenConfig = (value: string ) => {
  //console.log('token: ', value)
    return {
      headers: { Authorization: `Bearer ${value}` },
    };
  };
  export const URL = () => "http://159.223.198.174:8000/api/v1";
  export const getURL = () => "http://159.223.198.174:8000/api/v1";

export default tokenConfig;