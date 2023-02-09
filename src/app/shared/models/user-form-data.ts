export class UserFormData {
    uname: string;
    fname: string;
    lname: string;
    email: string;
    age: string;

    /**
     * This class holds UserFormData information
     * @param uname unique username
     * @param fname first name of the user
     * @param lname last name of the user
     * @param email unique email of the user
     * @param age age of the user
    */
    constructor(
        uname = '',
        fname = '',
        lname = '',
        email = '',
        age = ''
    ) {
        this.uname = uname;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.age = age;
    }
}