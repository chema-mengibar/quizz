export default  {
  
  fetchAsync: async ( url: string ): Promise<any> => {
    let response = await fetch( url );
    let data = await response.json();
    return data;
  },

  fetchAsyncMD: async ( url: string ): Promise<any> => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");
    const headers = { 
      method: 'GET',
      headers: myHeaders,
      mode: 'cors'
    };

    // @ts-ignore
    let response = await fetch( url, headers );
    let data = await response;
    return data.text();
  },


};
  

