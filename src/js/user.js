class Account {
    constructor(userName) {
        this.userName = userName;
    }

    logout() {}
}

export class User extends Account {
    constructor(name = '') {
        super('User name');
        this.name = name;
    }

    getFullName() {

    }
}