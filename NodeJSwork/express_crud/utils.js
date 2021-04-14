const findUsers = () => {
 return "get all all users";
};
const create = () => {
 throw new Error("cannot create user");
};

module.exports = {
 findUsers,
 create,
};
