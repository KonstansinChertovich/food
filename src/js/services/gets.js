const getData = async url => {
    const requests = await fetch(url);

    return await requests;
};

export default getData;