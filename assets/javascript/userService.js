var userStorage = (function () {

    function User(username, password, email) {
        this.username = username;
        this.password = password;
        this.email=email;
        this.id = UserStorage.nextId++;
        this.myrecipes = [];
        this.favorites = [];
        this.competitions=[];
        this.registered=Date.now();
    }

    function saveChanges() {
        sessionStorage.setItem('users', JSON.stringify(this._users));
    }

    function UserStorage() {

        if (sessionStorage.getItem('users') != null)
            this._users = JSON.parse(sessionStorage.getItem('users'));
        else
            this._users = [];

        this.loggedUserId = 0;
    }


    UserStorage.nextId = 1;


    UserStorage.prototype.register = function (username, password, email) {
        if ((username.trim().length == 0) || (password.trim().length < 0)  || (email.trim().length == 0)) {
            return false;
        }

        var isAlreadyRegistered = (this._users.find(user => user.username == username) != null);

        if (!isAlreadyRegistered) {
            var newUser = new User(username, password, email);
            this._users.push(newUser);
            sessionStorage.setItem('users', JSON.stringify(this._users));
            return true;
        }

        return false;
    };


    UserStorage.prototype.login = function (username, password) {
        var user = this._users.find(function (u) {
            return u.username === username && u.password === password;
        });

        if (user != null) {
            this.loggedUserId = user.id;
            sessionStorage.setItem('loggedUser', JSON.stringify(user));
            return this.loggedUserId;
        }

        return false;
    };


    UserStorage.prototype.logout = function () {
        this.loggedUserId = 0;
        sessionStorage.clear();
        sessionStorage.setItem('users', JSON.stringify(this._users));
    };




    UserStorage.prototype.addToFavorites = function (userId, product) {
        var index = this._users.findIndex(user => user.id == userId);

        if (index != -1) {
            if (this._users[index].favorites.find(p => p.id == product.id) != null) {
                return false;
            }
            this._users[index].favorites.push(product);
            sessionStorage.setItem('users', JSON.stringify(this._users));
            sessionStorage.setItem('loggedUser', JSON.stringify(this._users[index]));
            return true;

        }

        return false;
    };


    UserStorage.prototype.deleteFromFavourites = function (userId, product) {
        var user = this._users.find(user => user.id == userId);
        if (user) {
            if (user.favorites.length != 0) {

            }
            var index = user.favorites.findIndex(p => p.id == product.id);
            user.favorites.splice(index, 1);
            sessionStorage.setItem('users', JSON.stringify(this._users));
            sessionStorage.setItem('loggedUser', JSON.stringify(user));
            return true;
        }

        return false;


    }
    return new UserStorage();
})();
