function school(students, books) {
   if (!students && !books) {
        console.log("No argument")
    } else if (students && books) {
        console.log("Arguments found")
    } else {
        console.log("Argument found")
    }
}
school()
school(students="Bsi")
school(students="Bisi", books="sugar gorl")
