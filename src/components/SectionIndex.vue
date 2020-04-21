<template>
        <main>
        <section class="tipo">
            <div class="studen">
                <div class="img">
                    <img src="../assets/Section/chica.png">
                </div>
                <div class="info">
                    <p class="titulo">
                        Acompañamiento Universitario.
                    </p>
                    <p class="sub">
                        Comienza tus estudios universitarios recibiendo acompañamiento en los trabajos que te causan dificultad, para así obtener mejores calificaciones.
                    </p>
                    <div class="option">
                        <img src="../assets/Section/icon.png">
                        <a href="#">¡Pasa tu semestre!</a>
                    </div>
                </div>
            </div>
            <div class="tutor">
                <div class="info margin">
                    <p class="titulo text">
                        Postúlate como tutor.
                    </p>
                    <p class="sub">
                        Haz parte de este plan de acompañamiento a estudiantes universitarios, para apoyarlos en los trabajos y brindarles las mejores respuestas.
                    </p>
                    <div class="option2">
                        <a href="#">!Se el mejor tutor¡</a>
                        <div class="oval">
                            <img src="../assets/Section/oval.png">
                        </div>
                    </div>
                </div>
                <div class="object">
                    <img src="../assets/Section/chica2.png">
                </div>
            </div>
        </section>
        <section class="seleccion">
            <div class="width">
                <p class="titulo">Haz realidad tus ideas y el sueño de ser el mejor de la clase.</p>
            </div>
            <div>
                <div class="opcion">
                    <div>
                        <router-link to="/registrar-trabajo">
                            <a href="">Quiero recibir acompañamiento.</a>
                        </router-link>
                    </div>
                    <div>
                        <router-link to="/registrar-trabajo">
                            <a href="">Quiero ser Tutor.</a>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {

}
</script>

<style scoped>

main{
    display: flex;
    flex-direction: column;
    background: rgba(243, 241, 255, 0.7);
}

/*inicio estilos seccón de las chichas*/

.tipo{
    display: flex;
    flex-direction: column;
}

.studen{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.img{
    width: 575px;
    height: 661px;
    margin-left: 76px;
}

.info{
    display: flex;
    flex-direction: column;
    margin-right: 100px;
}

.titulo{
    height: 150px;
    width: 523px;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 60px;
    line-height: 75px;
    display: flex;
    align-items: center;
    color: #1A059B;
}

.sub{
    width: 593px;
    height: 78px;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 26px;
    display: flex;
    align-items: center;
    color: #1A059B;
    margin-top:60px;
}

.option{
    width: 347px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top:47px;
}

.option img{
    margin-right: 47px;
}

.option a{
    text-decoration: none;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 26px;
    display: flex;
    align-items: center;
    color: #1A059B;
}

.tutor{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.object{
    width: 657px;
    height: 468px;
    position: relative;
    margin-right: 109px;
}

.margin{
    margin-left: 76px;
    text-align: right;
}

.text{
    position: relative;
    display: block;
    width: 404px;
    margin-left: 189px;
}

.option2{
    width: 347px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top:47px;
    margin-left: 295px;
}

.option2 a{
    text-decoration: none;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 26px;
    display: flex;
    align-items: center;
    color: #1A059B;
}

.oval{
    height: 73px;
    width: 73px;
    border-radius: 50px;
    background: linear-gradient(211.81deg, #5B7CF0 8.24%, #581FF9 93.01%);
    margin-left: 47px;
}

.oval img{
    height: 31.29px;
    width: 31.29px;
    position: relative;
    display: block;
    margin: 20px auto;
}
/*fin estilos seccón de las chichas*/

/*Inicio estilos selección*/
.seleccion{
    background-image: url('../assets/Section/bg.png');
    width: 100%;
    height: 496px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    margin-top: 180px;
}

.width{
    width: 100%;
}

.seleccion .titulo{
    width: 1157px;
    height: 184px;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 60px;
    line-height: 75px;
    text-align: center;
    color: #FFFFFF;
    display: block;
    margin: 0 auto;
}

.opcion{
    width: 1157px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top:50px;
}

.opcion div{
    width: 500px;
    height: 75px;
    background: linear-gradient(270deg, #EFB178 0%, rgba(240, 120, 103, 0.94) 67.59%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
}

.opcion div a{
    text-decoration: none;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    margin-top: 10px;
}
</style>