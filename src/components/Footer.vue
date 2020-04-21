<template>
    <footer>
        <div class="container-footer">
            <div class="top">
                <h2>Aprende ahora!</h2>
                <img src="../assets/footer/social.png">
            </div>
            <div class="space"></div>
            <div class="mid">
                <h2>EasyWork</h2>
                <div class="contact">
                    <p class="blue">CONTACT</p>
                    <div class="info-contact">
                        <ul>
                            <li class="nestor">
                                <p>Email: alejofova@gmail.com</p>
                            </li>
                            <li class="blackboy">
                                <p>Email: jack_andres98@hotmail.com</p>
                            </li>
                            <li class="alverto">
                                <p>Email: zetoma97@gmail.com</p>
                            </li>
                        </ul>
                        <ul>
                            <li class="nestor">
                                <p>Phone +57 (310) 219-80-24</p>
                            </li>
                            <li class="blackboy">
                                <p>Phone +57 (310) 219-80-24</p>
                            </li>
                            <li class="alverto">
                                <p>Phone +57 (310) 219-80-24</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="space"></div>
            <div class="bot">
                <p class="p1">Política de privacidad Términos y condiciones</p>
                <p class="p2">© 2019 Kosthon Enterprise</p>
            </div>
        </div>
    </footer>
</template>

<style scoped>

footer{
    width: 100%;
    height: 433px;
    background-color: #333333;
}

.container-footer{
    width: 81%;
    margin:0 auto;
    display: flex;
    flex-direction: column;
}

.top{
    display: flex;
    flex-direction:row;
    justify-content: space-between; 
}

.top h2{
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    color: #ffffff;
    margin-top:58px;
}

.top img{
    width: 160px;
    height: 48px;
    margin-top:72px;
    margin-bottom: 33px;
    margin-right: -5px;
}

.space{
    width: 1230px;
    height: 1px;
    margin:0 auto;
    background: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.2;
}

.mid{
    display: flex;
    flex-direction: row;
}

.mid h2{
    width: 30%;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    color: #ffffff;
    margin-top:22px;
}

.contact{
    display: flex;
    flex-direction: column;
    width: 70%;
}

.blue{
    margin-top:21px;
    margin-bottom: 32px;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #6483F6;
}

.info-contact ul{
    list-style: none;
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 16px;
}

.info-contact ul li p{
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #FFFFFF;
}

.nestor{
    height: 32px;
    width: 215px;
    margin-right: 55px;
}

.blackboy{
    height: 32px;
    width: 274px;
    margin-right: 34px;
}

.alverto{
    height: 32px;
    width: 225px;
}

.bot{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
}

.bot .p1{
    width: 342px;
    height: 32px;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 32px;
    color: #FFFFFF;
}

.bot .p2{
    width: 213px;
    height: 32px;
    font-family: Inder;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 32px;
    text-align: right;
    color: rgba(255, 255, 255, 0.502972);
}

</style>