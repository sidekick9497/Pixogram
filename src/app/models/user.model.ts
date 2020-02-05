export class User
{
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dob: Date;
   constructor(firstName: string, lastName: string, userName: string, email: string, password: string, dob: Date )
    {
      this.firstName = firstName;
      this.lastName = lastName;
      this.id = userName;
      this.email = email;
      this.password = password;
     this.dob = dob;

    }
}
