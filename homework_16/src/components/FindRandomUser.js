export default class GetUsers {
    async getUsers(url) {
        const res = await fetch(url);

        if (res.status !== 200) {
            throw new Error('Could not fetch')
        }
        return await res.json();
    }


    async getHumansInfo() {
        const res = await this.getUsers('https://randomuser.me/api/?results=10');
        return res.results;

    }



}