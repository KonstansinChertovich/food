const postData = async (url, data) => {
    const require = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    return await require.json();
};

export default postData;