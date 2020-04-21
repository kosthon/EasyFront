<template>
    <main>
        <section class="titulos">
            <h2>Soporte</h2>
            <p>¿Cómo podemos ayudarte?</p>
        </section>
        <section class="suport">
            <section class="left">
                <div class="callme colorCallme">
                    <div class="phone">
                        <div class="oval color">
                            <img src="../assets/Soporte/phone.png">
                        </div>
                    </div>
                    <div class="info">
                        <h2>Llamanos</h2>
                        <p>+57 (310) 111-11-11</p>
                        <p>+57 (310) 222-22-22</p>
                    </div>
                </div>
                <div class="callme colorEmail">
                    <div class="phone">
                        <div class="oval colorOval">
                            <img src="../assets/Soporte/mail.png">
                        </div>
                    </div>
                    <div class="info">
                        <h2>Email</h2>
                        <p>alejandrofova@gmail.com</p>
                        <p>jack_andres98@hotmail.com</p>
                        <p>zetoma@gmail.com</p>
                    </div>
                </div>
            </section>
            <section class="rigth">
                <div class="formulario">
                    <h2>Ponte en contacto</h2>
                    <form @submit.prevent="addPQR(pqr)">
                        <div class="input">
                            <input type="text" v-model="pqr.nombre" name="" id="" placeholder="Tu nombre">
                        </div>
                        <div class="input">
                            <input type="text" v-model="pqr.email" name="" id="" placeholder="Tu E-mail">
                        </div>
                        <div class="descripcion">
                            <div class="textarea">
                                <textarea v-model="pqr.descripcion" name="" id="" cols="30" rows="10" placeholder="Describe tu petición aquí"></textarea>
                            </div>
                        </div>
                        <div class="boton">
                            <input type="submit" value="Enviar">
                        </div>
                    </form>
                </div>
            </section>
        </section>
    </main>
</template>

<script>
import routesApi from '../backRoutes';

export default {
    data(){
        return{
            pqr:{nombre:'', email:'', descripcion:''},
        }
    },
    methods:{
        addPQR(pqr){
            this.axios.post(routesApi.soporte.postPqr, pqr)
            .then(res => {
                this.pqr = {};
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
}
</script>


<style scoped>
main{
    width: 100%;
    display: flex;
    flex-direction: column;
    background: rgba(243, 241, 255, 0.7);
}

.titulos{
    width: 80%;
    margin: 30px auto;
}

.titulos h2{
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    color: #1A059B;
}

.titulos p{
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    color: #1A059B;
    margin-top:39px;
}

.suport{
    width: 100%;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.left{
    width: 50%;
    margin-top:10%;
    margin-bottom: 10%;
    margin-left: 162px;
}

.callme{
    width: 70%;
    height: 167px;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-left: 20%;
    margin-top:3%;
}

.colorCallme{
    background: #FACE55;
}

.colorEmail{
    background: #F3F1FF;
}

.phone{
    display: flex;
    justify-content: flex-end;
    margin-left: 38px;
}

.color{
    background: #F07867;
}

.colorOval{
    background: #EEA1E2;
}

.oval{
    width: 80px;
    height: 80px;
    border-radius: 50px;
    text-align: center;
}

.oval img{
    margin-top: 16px;
}

.info{
    width: 70%;
}

.info h2{
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: #333333;
    margin-bottom: 3px;
}

.info p{
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #333333;
    margin-bottom:8px ;
}

.rigth{
    width: 50%;
    margin-left: 162px;
}

.formulario{
    width: 70%;
    background: #FFFFFF;
    box-shadow: 0px 0px 60px rgba(67, 23, 0, 0.102242);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

form{
    width: 70%;
}

form input{
    outline: none;
    border:none;
    background-color: transparent;
    width: 95%;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    padding-left: 13px;
    color: rgba(51, 51, 51, 0.6);
}

form input:focus{
    outline: none;
    border:none;
}

.input{
    width: 100%;
    height: 24px;
    border-bottom: 1.5px solid #F07867;
    margin-top: 41px;
}

.formulario h2{
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: #333333;
    margin-top:40px;
}

.descripcion{
    margin-top:28px;
}

.descripcion .textarea{
    background: #FFFFFF;
    border: 1px solid #F07867;
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
    max-width: 95%;
    min-width: 95%;
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

.boton{
    text-align: right;
    margin-top: 48px;
    margin-bottom: 30px;
}

.boton input{
    width: 200px;
    height: 50px;
    background: linear-gradient(270deg, #EFB178 0%, rgba(240, 120, 103, 0.94) 67.59%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: #FFFFFF;
    cursor: pointer;
}
</style>