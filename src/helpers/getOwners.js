export const getOwners = async () => {

    const url = ``;
    const resp = await fetch(url);
    const { data } = await resp.json();

    console.log(data);
    
  return data;
}
