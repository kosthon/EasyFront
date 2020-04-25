var routesApi = {
    soporte:{
        postPqr: 'http://localhost:3000/easyWork/soporte/newPqr',
        getPqrs: 'http://localhost:3000/easyWork/soporte/pqrs'
    },
    trabajo:{
        newWork:    'http://localhost:3000/easyWork/user/new-work',
        uploadFile: 'http://localhost:3000/easyWork/user/upload-file/',//+idUser//+idWork
    },
    user:{
        register: 'http://localhost:3000/easyWork/user/register',
        login:    'http://localhost:3000/easyWork/user/login',
        getUsers: 'http://localhost:3000/easyWork/user/get-users'
    }
};

export default routesApi;