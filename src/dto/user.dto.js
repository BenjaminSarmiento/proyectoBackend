export default class  UserDTO {
    constructor(user){
        this.first_name = user.name,
        this.last_name = user.last_name,
        this.email = user.username,
        this.password = user.password,
        this.img = user.img
    }
}