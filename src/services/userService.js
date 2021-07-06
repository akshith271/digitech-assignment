const appID = '60b6023c98e5768341aefad0';

const URL = 'https://dummyapi.io/data/api/user';

const getUsers = (limit = 100, page = 0) => {
    let url = `${URL}?limit=${limit}&page=${page}`;
    return fetch(url, {
        headers: {
            'app-id': appID,
        },
    }).then((response) => response.json());
    //returns the response as json
};

const userService = {
    getAll: async function () {
        const result = await getUsers();
        return result.data;
    },
    search: async function (input) {
        const allUsers = await getUsers();
        return allUsers.data.filter((item) => {
            const fullName = item.title + item.firstName + item.lastName;
            return fullName.search(new RegExp(input, 'i')) > -1;
        });
    },
};

export default userService;
