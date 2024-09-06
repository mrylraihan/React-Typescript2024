// Here we are giving the role specific role and type 
// the role variable can only have this string values as it own
// anything else would cause an error which is why you will test underlined with red 
let role: "admin"| "user"| "editor"//admin, user, editor

role="admin"
role="user"
role="editor"
// role="abc"
// role='test'
console.log(role)