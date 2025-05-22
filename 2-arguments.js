function school(students, books) {
    if (!students && !books) {
        console.log("No argument")
    } else if (students || books) {
        console.log("Argument found")
    } else {
        console.log("Arguments found")
    }
}
school(students="Bisi")