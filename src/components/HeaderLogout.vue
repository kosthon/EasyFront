<template>
<div class="ayuda">
    <header>
        <div class="continer-header">
            <div class="logo">
                <img src="../assets/header/logo.jpg" />
            </div>
            <div class="menu">
                <nav>
                    <ul>
                        <li>
                            <router-link to="/">
                                <a href="">Inicio</a>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/soporte">
                            <a href="">Soporte</a>
                            </router-link>
                        </li>
                        <li>
                            <a >
                                <div @click="popIn()" id="button" class="login">
                                    <p>Iniciar Sesión</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    <div class="bg-modal chao">
        <div class="login1">
            <div class="top">
                <h2>Login</h2>
                <ul>
                    <li>
                        <img src="../assets/header/email.png" alt="">
                    </li>
                    <li>
                        <img src="../assets/header/facebook.png" alt="">
                    </li>
                    <li>
                        <img src="../assets/header/twitter.png" alt="">
                    </li>
                </ul>
            </div>
            <div class="separador">
                <div class="left"></div>
                <p>O</p>
                <div class="rigth"></div>
            </div>
            <form>
                <div class="user">
                    <p>Username</p>
                    <div class="inputUser">
                        <img src="../assets/header/user.png" alt="">
                        <input type="text" name="" id="" placeholder="Escribe tu nombre">
                    </div>
                </div>
                <div class="user">
                    <p>Password</p>
                    <div class="inputUser">
                        <img src="../assets/header/password.png" alt="">
                        <input type="text" name="" id="" placeholder="Escribe tu contraseña">
                    </div>
                </div>
                <div class="forget">
                    <a href="">¿Olvidaste tu contraseña?</a>
                </div>
                <div class="boton">
                    <input type="submit" value="Ingresar">
                </div>
            </form>
            <div class="separador-bot"></div>
            <div class="new">
                <a href="">¿No tienes una cuenta? Regístrate</a>
            </div>
        </div>
    </div>
    
</div>
</template>


<script>
export default {
    date(){
        return{
            popIsHere:false,
        }
    },
    methods:{
        popIn(){
            document.querySelector("#button").addEventListener('click', function(e){
                document.querySelector('.bg-modal').style.display = 'flex';
            });
            var container = document.querySelector('.bg-modal');

            document.addEventListener('click',function(e){
                var click = e.target;
                if(click == container){
                    document.querySelector('.bg-modal').style.display = 'none';
                }
            });
        }
    }
}
</script>

<style scoped>

/*Inicio estilos del header */
body{
    background: rgba(243, 241, 255, 0.7);
}

header{
    width: 100%;
    height: 100px;
}

.continer-header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #ffffff;
}

.logo{
    width: 362px;
    height: 85px;
    margin-left: 49px;
}

.logo img{
    position: relative;
    width: 100%;
    height: 100%;
}

header nav ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    flex-wrap: wrap;
    width: 100%;
    list-style: none;
    background-color: #ffffff;
    margin-right: 130px;
    
}

header nav ul li a{
    background-color: #ffffff;
    width: 103px;
    text-decoration: none;
    height: 50px;
    color:#1A059B;
    cursor: pointer;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
}

header nav ul li a div{
    width: 210px;
    height: 45px;
    background: linear-gradient(270deg, #5B7CF0 0%, rgba(88, 31, 249, 0.94) 67.59%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    margin-top:-8px;
    text-align: center;
    color:#ffffff;
    margin-right: 38px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
/*Fin estilos del header */


.bg-modal{
    width: 100%;
    height: 100%;
    background-color:rgba(0,0,0,0.5);
    position: fixed;
    top:0;
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;
    z-index: 99;
}


.login1{
    position: relative;
    width: 30%;
    height: 650px;
    margin:0px auto;
    background-color: #F3F1FF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
}

.top{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.top h2{
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    color: #1A059B;
    margin-top:36px;
    text-align: center;
    height: 47px;
    margin-left: 9px;
}

.top ul{
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top:50px;
    margin-right: 34px;
}

.top ul li{
    margin-left: 34px;
    width: 40px;
    height: 40px;
}

.separador{
    width: 100%;
    margin-top:40px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.left{
    height: 0px;
    width: 39%;
    border: 0.5px solid rgba(26, 5, 155, 0.7);
    margin-left: 25px;
}

.rigth{
    height: 0px;
    width: 39%;
    border: 0.5px solid rgba(26, 5, 155, 0.7);
    margin-right: 29px;
}

.separador p{
    margin-left: 29px;
    margin-right: 25px;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    color: #1A059B;
}

.user{
    width: 84%;
    margin: 29px auto;
    height: 59px;
    border-bottom:2px solid rgba(26, 5, 155, 0.5);
}

.user p{
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    color: #1A059B;
}


.user img{
    margin-right: 6px;
    margin-top: 6px;
}
.inputUser{
    display: flex;
    flex-direction: row;
}

.inputUser input{
    border:none;
    outline: none;
    background-color: transparent;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 26px;
    display: flex;
    align-items: center;
    color: rgba(26, 5, 155, 0.5);
    margin-top: 6px;
}

.forget{
    width: 83%;
    margin: -18px auto;
    text-align: right;
}

.forget a{
    text-decoration: none;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    color: #1A059B;
}

.boton{
    width: 90%;
    height: 50px;
    margin: 60px auto;
}

.boton input{
    background: linear-gradient(270deg, #5B7CF0 0%, rgba(88, 31, 249, 0.94) 67.59%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    width: 100%;
    height: 100%;
    border:none;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
}

.boton input:focus{
    outline: none;
}

.separador-bot{
    width: 92%;
    height: 0px;
    top: 580px;
    border: 0.5px solid rgba(26, 5, 155, 0.7);
    margin: -31px auto;
}

.new{
    width: 100%;
    text-align: center;
    margin: 65px auto;
}

.new a{
    text-decoration: none;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    color: #1A059B;
}

</style>