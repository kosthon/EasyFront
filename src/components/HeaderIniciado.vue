<template>
  <div>
    <header>
      <div class="continer-header">
        <div class="logo">
          <router-link to="/">
            <img src="../assets/header/logo.jpg" />
          </router-link>
        </div>
        <div class="menu">
          <nav>
            <ul>
              <li>
                <a>
                  <router-link to="/registrar-trabajo" tag="div"
                    >Publica tu trabajo</router-link
                  >
                </a>
              </li>
              <li>
                <router-link to="/">
                  <a href="">Cerrar Sesión</a>
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import routesApi from "../backRoutes";
export default {};
</script>

<style scoped>
body {
  background: rgba(243, 241, 255, 0.7);
}

header {
  width: 100%;
  height: 100px;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.25);
}

.continer-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #ffffff;
}

.logo {
  width: 362px;
  height: 85px;
  margin-left: 49px;
}

.logo img {
  position: relative;
  width: 100%;
  height: 100%;
}

header nav ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  flex-wrap: wrap;
  width: 100%;
  list-style: none;
  background-color: #ffffff;
  margin-right: 130px;
}

header nav ul li a {
  background-color: #ffffff;
  width: 103px;
  text-decoration: none;
  height: 50px;
  color: #1a059b;
  cursor: pointer;
  font-family: Inder;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
}

header nav ul li a div {
  width: 250px;
  height: 45px;
  background: linear-gradient(
    270deg,
    #5b7cf0 0%,
    rgba(88, 31, 249, 0.94) 67.59%
  );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 7px;
  margin-top: -8px;
  text-align: center;
  color: #ffffff;
  margin-right: 38px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
