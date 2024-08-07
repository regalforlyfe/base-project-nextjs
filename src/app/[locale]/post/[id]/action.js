import UserRepo from "@/repositories/user-repo";

const getDetailUser = async ({ id }) => {
  const res = await UserRepo.getDetailUser({ id: id });
  return res;
};

const Action = {
  getDetailUser,
};

export default Action;
