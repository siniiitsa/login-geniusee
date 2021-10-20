type Paths = {
  [key: string]: (...args: string[]) => string;
};

const base = "";

export const paths: Paths = {
  login: () => [base, "login"].join("/"),
  register: () => [base, "register"].join("/"),
  recoverPass: () => [base, "recover-pass"].join("/"),
};
