import { getUsers } from "../service/localStorage"

const verifyDocument = document => {
  return getUsers() ? getUsers().findIndex(element => element.document === document) : true;
}

export { verifyDocument }