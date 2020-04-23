<template>
    <main>
        <section class="info">
            <div class="textos">
                <p class="titulo">Dinos lo que necesitas</p>
                <p class="sub">Ponte en contacto con el grupo de tutores de nuestra plataforma para asi solucionar todas tus dudas.</p>
            </div>
        </section>
        <section class="form">
            <div class="container-form">
                <form @submit.prevent="isLogin()">
                    <div class="nombre">
                        <h2>Nombre del trabajo</h2>
                        <input type="text" name="" id="" placeholder="e.j, Derivadas calculo diferencial">
                        <div class="separadorTrabajo"></div>
                    </div>
                    <div class="descripcion">
                        <h2>Decripción del trabajo</h2>
                        <div class="textarea">
                            <textarea name="" id="" cols="30" rows="10" placeholder="Describe tu trabajo aquí..."></textarea>
                        </div>
                    </div>
                    <div class="upload">
                        <div class="file">
                            <p>+ Subir archivos</p>
                            <input class="btn" type="file" name="" id="" value="+ Subir archivos">
                        </div>
                        <div class="parrafo">
                            <p>Arrastra documentos o imagenes que puedan ser de utilidad para explicar tu trabajo.</p>
                        </div>
                    </div>
                    <div class="materia">
                        <h2>Materia del trabajo</h2>
                        <div class="container-box">
                            <div class="box">
                                <select name="" id="">
                                    <option value="">Seleccione una materia</option>
                                    <option value="">Materia 1</option>
                                    <option value="">Materia 2</option>
                                    <option value="">Materia 3</option>
                                    <option value="">Materia 4</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="fecha">
                        <h2>Fecha limite de entrega</h2>
                        <div class="dia">
                            <p>Día:</p>
                            <div class="fechaLimi">
                                <div class="boxDia">
                                    <select name="" id="">
                                        <option value=""></option>
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                        <option value="">4</option>
                                    </select>
                                </div>
                            </div>
                            <p class="margen">Mes:</p>
                            <div class="fechaLimi">
                                <div class="boxDia">
                                    <select name="" id="">
                                        <option value=""></option>
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                        <option value="">4</option>
                                    </select>
                                </div>
                            </div>
                            <p class="margen">Año:</p>
                            <div class="fechaLimi">
                                <div class="boxDia">
                                    <select name="" id="">
                                        <option value=""></option>
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                        <option value="">4</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pago">
                        <h2>Materia del trabajo</h2>
                        <div class="container-box">
                            <div class="boxPago">
                                <select name="" id="">
                                    <option value="">Escoge un rango</option>
                                    <option value="">$10.000 - $15.000</option>
                                    <option value="">$20.000 - $25.000</option>
                                    <option value="">$30.000 - $35.000</option>
                                    <option value="">$40.000 - $45.000</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="boton">
                        <input id="buttonAcomp" class="submit" type="submit" value="Publicar tu trabajo">
                    </div>
                </form>
            </div>

        </section>

        <!--Inicio maquetación del Pop-up-->
        <div class="bg-modalAcomp">
            <section class="loginRp">
                <div class="topAcomp">
                    <h2>Regístrate para publicar tu trabajo </h2>
                    <ul>
                        <li>
                            <img src="../assets/acompanamiento/email.png" alt="">
                        </li>
                        <li>
                            <img src="../assets/acompanamiento/facebook.png" alt="">
                        </li>
                        <li>
                            <img src="../assets/acompanamiento/twitter.png" alt="">
                        </li>
                    </ul>
                </div>
                <div class="separadorAcomp">
                    <div class="leftAcomp"></div>
                    <p>O</p>
                    <div class="rigthAcomp"></div>
                </div>
                <form>
                    <div class="userAcomp">
                        <p>Username</p>
                        <div class="inputUserAcomp">
                            <img src="../assets/acompanamiento/user.png" alt="">
                            <input type="text" name="" id="" placeholder="Escribe tu nombre">
                        </div>
                    </div>
                    <div class="userAcomp">
                        <p>Teléfono</p>
                        <div class="inputUserAcomp">
                            <img src="../assets/acompanamiento/telefono.png" alt="">
                            <input type="text" name="" id="" placeholder="Escribe tu teléfono">
                        </div>
                    </div>
                    <div class="userAcomp">
                        <p>E-mail</p>
                        <div class="inputUserAcomp">
                            <img src="../assets/acompanamiento/emailIcon.png" alt="">
                            <input type="text" name="" id="" placeholder="Escribe tu e-mail">
                        </div>
                    </div>
                    <div class="userAcomp">
                        <p>Contraseña</p>
                        <div class="inputUserAcomp">
                            <img src="../assets/acompanamiento/password.png" alt="">
                            <input type="text" name="" id="" placeholder="Escribe tu contraseña">
                        </div>
                    </div>
                    <div class="botonRp">
                        <input type="submit" value="Únete">
                    </div>
                    <div class="verificar">
                        <p>Al registrarte, confirmas que aceptas los Términos y condiciones y la Política de privacidad. </p>
                    </div>
                </form>
                <div class="separador-botAcomp"></div>
                <div id="buttonAcompLogin" @click="login()" class="newAcomp">
                    <a>¿Ya tíenes una cuenta? Inicía sesión.</a>
                </div>
            </section>
        </div>
        <!--fin maquetación del Pop-up-->

            <!--Incio maquetación del Pop-up de login-->
    <div class="bg-modalAl chao">
        <div class="login1Al">
            <div class="topAl">
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
            <div class="separadorAl">
                <div class="leftAl"></div>
                <p>O</p>
                <div class="rigthAl"></div>
            </div>
            <form>
                <div class="userAl">
                    <p>Username</p>
                    <div class="inputUserAl">
                        <img src="../assets/header/user.png" alt="">
                        <input type="text" name="" id="" placeholder="Escribe tu nombre">
                    </div>
                </div>
                <div class="userAl">
                    <p>Password</p>
                    <div class="inputUserAl">
                        <img src="../assets/header/password.png" alt="">
                        <input type="text" name="" id="" placeholder="Escribe tu contraseña">
                    </div>
                </div>
                <div class="forgetAl">
                    <a href="">¿Olvidaste tu contraseña?</a>
                </div>
                <div class="botonAl">
                    <input type="submit" value="Ingresar">
                </div>
            </form>
            <div class="separador-botAl"></div>
            <div class="newAl">
                <a @click="popIn()" id="buttonLoginAcom">¿No tienes una cuenta? Regístrate</a>
            </div>
        </div>
    </div>
    <!--Fin maquetación del Pop-up de login-->


    </main>
</template>

<script>
export default {
    data(){
        return{
            algo: true,
        }
    },
    methods:{
        popIn(){
            
            document.querySelector("#buttonLoginAcom").addEventListener('click', function(e){
                document.querySelector('.bg-modalAl').style.display = 'none';   
                document.querySelector('.bg-modalAcomp').style.display = 'flex';    
            });
           

            document.querySelector("#buttonAcomp").addEventListener('click', function(e){
                document.querySelector('.bg-modalAcomp').style.display = 'flex';    
            });

            var container      = document.querySelector('.bg-modalAcomp');

            document.addEventListener('click',function(e){
                var click = e.target;
                if(click == container){
                    document.querySelector('.bg-modalAcomp').style.display = 'none';
                }
            });            
        },
        isLogin(){
            this.popIn();
        },
        login(){
            document.querySelector("#buttonAcompLogin").addEventListener('click', function(e){
                document.querySelector('.bg-modalAcomp').style.display = 'none';    
                document.querySelector('.bg-modalAl').style.display = 'flex';
            });

            var container = document.querySelector('.bg-modalAl');

            document.addEventListener('click',function(e){
                var click = e.target;
                if(click == container){
                    document.querySelector('.bg-modalAl').style.display = 'none';
                }
            });
        }
    }
}
</script>

<style scoped>
main{
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
}

/*Inicio estilos registro trabajo */
.info{
    background-color: #F3F1FF;
    width: 100%;
    height: 182px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.titulo{
    width: 529px;
    height: 55px;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    line-height: 62px;
    color: #1A059B;
}

.sub{
    width: 1023px;
    height: 26px;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 26px;
    color: #1A059B;
    margin-top: 25px;
    padding-left: 2px;
}

.textos{
    height: 466px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.form{
    height: 965px;
    background-color: #FFFFFF;
    width: 100%;
}

.container-form{
    width: 45%;
    height: 883px;
    margin:33px auto;
}

form{
    width: 100%;
    display: flex;
    flex-direction: column;
}

.nombre{
    width: 100%;
}

.nombre h2{
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 30px;
    color: #1A059B;
}

.nombre input{
    border:none;
    width: 468px;
    height: 26px;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 26px;
    color: rgba(26, 5, 155, 0.5);
    margin-top:17px;
    margin-left: 19px;
}

.nombre input:focus{
    outline: none;
    border:none;
}

.separadorTrabajo{
    width: 98%;
    margin:0 auto;
    border: 1px solid rgba(26, 5, 155, 0.8);
}

.descripcion{
    width: 100%;
}

.descripcion h2{
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 30px;
    color: #1A059B;
    margin-top:17px;
    margin-bottom:17px;
}

.descripcion .textarea{
    background: #FFFFFF;
    border: 2px solid #1A059B;
    box-sizing: border-box;
    border-radius: 8px;
    min-width: 100%;
    max-width: 100%;
    min-height: 200px;
    max-height: 200px;
    
}

.textarea textarea{
    margin-left: 15px;
    margin-top: 10px;
    max-width: 97.5%;
    min-width: 97.5%;
    min-height: 185px;
    max-height: 185px;
    border:none;
    background-color: transparent;
    color: rgba(26, 5, 155, 0.5);
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
}

.descripcion textarea:focus{
    outline: none;
}

.upload{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 34px;
    border: 1px dashed rgba(26, 5, 155, 0.5);
    padding-top: 22px;
    padding-bottom: 23px;
}

.file{
    position: relative;
    width: 150px;
    height: 30px;
    background-color: #FFFFFF;
    border: 1px solid rgba(26, 5, 155, 0.5);
    border-radius: 4px;
    margin-right: 30px;
    margin-left: 29px;

}

.file p{
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 30px;
    color: #1A059B;
    text-align: center;
    margin-right: 14px;
}

.btn{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
}

.parrafo{
    width: 70%;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    color: rgba(26, 5, 155, 0.5);
    margin-left: 14px;
}


.materia h2{
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 30px;
    color: #1A059B;
    margin-top:27px;
}


.box{
    position: relative;
    width: 65%;
    border-bottom: 1px solid rgba(26, 5, 155, 0.8);
    height: 50px;
    margin-left: 1px;
}

.box select{
    background-color: #FFFFFF;
    color:rgba(26, 5, 155, 0.5);
    width: 100.4%;
    height: 50px;
    border: none;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 70px;
    margin-left: -1px;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    padding-left:19px;
}

.box::before{
    content: url('../assets/acompanamiento/Polygon.png');
    position: absolute;
    top:0;
    right: 0;
    width: 50px;
    height: 50px;
    top:31px;
    right: -42px;
    pointer-events: none;
}

.fecha{
    display: flex;
    flex-direction: column;
    margin-top:32px;
}

.fecha h2{
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: #1A059B;

}

.dia{
    display: flex;
    flex-direction: row;
    align-content: center;
    flex-wrap: wrap;
}

.dia p{
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 26px;
    color: #1A059B;
    margin-top: 38px;
    margin-right: 5px;
    
}

.margen{
    margin-left: 65px;
}


.boxDia{
    position: relative;
    width: 250%;
    height: 61.6px;
    border-bottom: 1px solid rgba(26, 5, 155, 0.8);
    margin-right: 25px;
}

.boxDia select{
    background-color: #FFFFFF;
    color:rgba(26, 5, 155, 0.5);
    width: 105%;
    height: 24px;
    border: none;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    -webkit-appearance: none;
    outline: none;
    margin-right: -15px;
    margin-top:38px;
    margin-left: -2px;

}

.boxDia::before{
    content: url('../assets/acompanamiento/Polygon.png');
    position: absolute;
    top:0;
    right: 0;
    width: 50px;
    height: 50px;
    top:44px;
    right: -43px;
    pointer-events: none;
}

.boxPago{
    position: relative;
    width: 50%;
    border-bottom: 1px solid rgba(26, 5, 155, 0.8);
    height: 50px;
    margin-left: 1px;
}

.boxPago select{
    background-color: #FFFFFF;
    color:rgba(26, 5, 155, 0.5);
    width: 100.6%;
    height: 50px;
    border: none;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 70px;
    margin-left: -1px;
    -webkit-appearance: none;
    outline: none;
    padding-left:19px;
}

.boxPago::before{
    content: url('../assets/acompanamiento/Polygon.png');
    position: absolute;
    top:0;
    right: 0;
    width: 50px;
    height: 50px;
    top:31px;
    right: -42px;
    pointer-events: none;
}

.pago h2{
    margin-top:42px;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: #1A059B;
}

.boton{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top:20px;
    
}

.boton .submit{
    width: 289px;
    height: 50px;
    background: linear-gradient(270deg, #EFB178 0%, rgba(240, 120, 103, 0.94) 67.59%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    border:none;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: #FFFFFF;
    cursor: pointer;
}

.boton .submit:focus{
    outline: none;
}
/*Fin estilos registro trabajo */

/*Inicio estilos Pop-Up de registrar*/
.bg-modalAcomp{
    width: 100%;
    height: 100%;
    background-color:rgba(0,0,0,0.5);
    top:0;
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;
    position: fixed;
}


.loginRp{
    position: relative;
    width:40%;
    height: 93%;
    margin:50px auto;
    background-color: #F3F1FF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    z-index: 99;
}

.topAcomp{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.topAcomp h2{
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    color: #1A059B;
    margin-top:36px;
    text-align: center;
    height: 47px;
    margin-bottom: 24px;
}


.topAcomp ul{
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top:50px;
    margin-right: 34px;

}

.topAcomp ul li{
    margin-left: 34px;
    width: 40px;
    height: 40px;
    margin-top:-45px;
}

.separadorAcomp{
    width: 100%;
    margin-top:20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.leftAcomp{
    height: 0px;
    width: 28%;
    border: 0.5px solid rgba(26, 5, 155, 0.7);
    margin-left: 25px;
}

.rigthAcomp{
    height: 0px;
    width: 28%;
    border: 0.5px solid rgba(26, 5, 155, 0.7);
    margin-right: 29px;
}

.separadorAcomp p{
    margin-left: 29px;
    margin-right: 25px;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    color: #1A059B;
}

.userAcomp{
    width: 83%;
    margin: 29px auto;
    height: 45px;
    border-bottom:2px solid rgba(26, 5, 155, 0.5);
    margin-bottom: -5px;
}

.userAcomp p{
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    color: #1A059B;
    margin-bottom: 15px;
}


.userAcomp img{
    width: 20px;
    height: 20px;
    margin-right: 6px;
    margin-top: -12px;
}

.inputUserAcomp{
    display: flex;
    flex-direction: row;
}

.inputUserAcomp input{
    border:none;
    outline: none;
    background-color: transparent;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    display: flex;
    align-items: center;
    color: rgba(26, 5, 155, 0.5);
    margin-top:-13px;
}

.botonRp{
    width: 90%;
    height: 50px;
    margin: 45px auto;
}

.botonRp input{
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

.botonRp input:focus{
    outline: none;
}

.verificar{
    text-align: center;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    color: #1A059B;
    margin-top: -20px;
}


.verificar p{
    margin: 0 auto;
    width: 100%;
    height: 32px;
}


.separador-botAcomp{
    width: 92%;
    height: 0px;
    border: 0.5px solid rgba(26, 5, 155, 0.7);
    margin: 14px auto;
}

.newAcomp{
    width: 100%;
    text-align: center;
    margin: 0 auto;
    cursor: pointer;
}

.newAcomp a{
    text-decoration: none;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    color: #1A059B;
}
/*Fin estilos Pop-Up de registrar*/

/*Inicio estilos del Pop-up de login */

.bg-modalAl{
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


.login1Al{
    position: relative;
    width: 30%;
    height: 650px;
    margin:0px auto;
    background-color: #F3F1FF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
}

.topAl{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.topAl h2{
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

.topAl ul{
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top:50px;
    margin-right: 34px;
}

.topAl ul li{
    margin-left: 34px;
    width: 40px;
    height: 40px;
}

.separadorAl{
    width: 100%;
    margin-top:40px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.leftAl{
    height: 0px;
    width: 39%;
    border: 0.5px solid rgba(26, 5, 155, 0.7);
    margin-left: 25px;
}

.rigthAl{
    height: 0px;
    width: 39%;
    border: 0.5px solid rgba(26, 5, 155, 0.7);
    margin-right: 29px;
}

.separadorAl p{
    margin-left: 29px;
    margin-right: 25px;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    color: #1A059B;
}

.userAl{
    width: 84%;
    margin: 29px auto;
    height: 59px;
    border-bottom:2px solid rgba(26, 5, 155, 0.5);
}

.userAl p{
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    color: #1A059B;
}


.userAl img{
    margin-right: 6px;
    margin-top: 6px;
}
.inputUserAl{
    display: flex;
    flex-direction: row;
}

.inputUserAl input{
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

.forgetAl{
    width: 83%;
    margin: -18px auto;
    text-align: right;
}

.forgetAl a{
    text-decoration: none;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    color: #1A059B;
}

.botonAl{
    width: 90%;
    height: 50px;
    margin: 60px auto;
}

.botonAl input{
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

.botonAl input:focus{
    outline: none;
}

.separador-botAl{
    width: 92%;
    height: 0px;
    top: 580px;
    border: 0.5px solid rgba(26, 5, 155, 0.7);
    margin: -31px auto;
}

.newAl{
    width: 100%;
    text-align: center;
    margin: 50px auto;
}

.newAl a{
    text-decoration: none;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    color: #1A059B;
    cursor: pointer;
}

/*Fin estilos del Pop-up de login */

</style>