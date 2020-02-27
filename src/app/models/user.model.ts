export class User
{
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dob: Date;
  profile: string
   constructor(firstName: string, lastName: string, userName: string, email: string, password: string, dob: Date )
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = userName;
        this.email = email;
        this.password = password;
      this.dob = dob;
      this.profile  = "userProfile"
    }
}
