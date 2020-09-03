const getUsers = () => JSON.parse(localStorage.getItem('users'));

const setUsers = user => {
  let arrayUsers = [];
  if (getUsers() === null) {
    arrayUsers.push(user)
    localStorage.setItem('users', JSON.stringify(arrayUsers));
  } else {
    arrayUsers.push(user, ...getUsers())
    localStorage.setItem('users', JSON.stringify(arrayUsers));
  }
}

export { getUsers, setUsers }