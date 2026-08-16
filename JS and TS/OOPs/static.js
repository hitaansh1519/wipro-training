
class User {
    constructor(name){
        this.name = name
    }
}

const user1 = new User("Piyush")
const user2 = new User("Aman")

console.log(user1.name, user2.name)

//Here, both objects have their own separate name.

class User {
    //The static property belongs to the class. 
    static company = "Wipro"
}

const user3 = new User()    //{}
console.log(user3.company)
console.log(User.company)

class Student {
    static schoolName = "ABC School"

    static showSchool(){
        console.log(Student.schoolName)
    }
}

Student.showSchool()

