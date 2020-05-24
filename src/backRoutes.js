var routesApi = {
  soporte: {
    postPqr: "http://localhost:3000/easyWork/soporte/newPqr",
    getPqrs: "http://localhost:3000/easyWork/soporte/pqrs"
  },
  trabajo: {
    newWork: "https://easyworkback.herokuapp.com/easyWork/user/new-work",
    uploadFile: "https://easyworkback.herokuapp.com/easyWork/user/get-works" //+idUser//+idWork
  },
  user: {
    register: "https://easyworkback.herokuapp.com/easyWork/user/register",
    login: "http://localhost:3000/easyWork/user/login",
    getUsers: "https://easyworkback.herokuapp.com/easyWork/user/get-users"
  }
};

export default routesApi;
