const formatterUserData = (data) => {
    const userData = {
        id:data?._id,
        username: data?.username,
        email: data?.email,
        number:data?.number,
        createdAt:data?.createdAt

    }
    return userData;
}
export default formatterUserData