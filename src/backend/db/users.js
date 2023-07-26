import { v4 as uuid } from "uuid"
import { formatDate } from "../utils/authUtils"
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "lalith",
    lastName: "singam",
    email: "singamillamalalithilla@gmail.com",
    password: "lalith@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Sample",
    lastName: "S",
    email: "sample@gmail.com",
    password: "miruthu@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),

    firstName: "Sakthi",
    lastName: "S",
    email: "test@gmail.com",
    password: "12345678",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
]
