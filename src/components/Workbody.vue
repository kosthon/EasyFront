<template>
  <div>
    <section class="navegador">
      <nav>
        <ul>
          <li>
            <router-link to="">
              <a href="">Inicio</a>
            </router-link>
          </li>
          <li>
            <router-link to="">
              <a href="">Mis trabajos</a>
            </router-link>
          </li>
        </ul>
      </nav>
    </section>
    <section class="cuerpo">
      <div class="filtro">
        <h3>Filtro</h3>
        <div class="linea"></div>
        <input
          type="checkbox"
          name="calculos"
          id="calculo"
          v-model="filtrado"
        />
        <label for="calculo">Cálculo</label>
        <input type="checkbox" name="ecuaciones" id="ecuaciones" />
        <label for="ecuaciones">Ecuaciones</label>
        <input type="checkbox" name="quimica" id="quimica" />
        <label for="quimica">Química</label>
        <input type="checkbox" name="fisica" id="fisica" />
        <label for="fisica">Física</label>
        <input type="checkbox" name="ingles" id="ingles" />
        <label for="ingles">Ingles</label>
      </div>
      <div class="listado">
        <table class="tbltrabajos" align="center">
          <tr>
            <th>
              <div class="inputSearch">
                <img src="../assets/trabajos/Lupita.png" alt="" />
                <input
                  type="text"
                  name=""
                  placeholder="Buscar trabajos"
                  v-model="busqueda"
                />
              </div>
              <div class="separador"></div>
              <div class="lineaListado"></div>
            </th>
          </tr>
          <tr>
            <td v-for="trabajo in findWorks" :key="trabajo._id">
              <h1>{{ trabajo.nameWork }}</h1>
              <p>
                {{ trabajo.description }}
              </p>
              <div class="arreglar">
                <h3>{{ trabajo.subject }}</h3>
                <h2>{{ trabajo.cost }}</h2>
              </div>
              <div class="lineaListado"></div>
            </td>
          </tr>
        </table>
      </div>
    </section>
    <div class="detalle">
      <section class="detalleW"></section>
    </div>
  </div>
</template>

<script>
import api from "../backRoutes";

export default {
  data() {
    return {
      trabajos: [],
      busqueda: "",
      filtrado: []
    };
  },
  computed: {
    findWorks() {
      return this.trabajos.filter(trabajo => {
        return trabajo.nameWork.includes(this.busqueda);
      });
    }
  },
  methods: {
    getTrabajos() {
      this.axios
        .get(api.trabajo.uploadFile)
        .then(res => {
          const listado = [];
          res.data.trabajos.map(trabajo => {
            trabajo.map(valor => {
              var help = valor.year;
              if (help != 1) {
                listado.push({
                  idWork: valor._id,
                  nameWork: valor.nombre,
                  description: valor.descripcion,
                  subject: valor.materia,
                  file: valor.archivo,
                  day: valor.dia,
                  mounth: valor.mes,
                  year: valor.year,
                  cost: valor.pago
                });
              }
            });
          });
          this.trabajos = listado;
        })
        .catch(e => console.log(e));
    }
  },
  mounted() {
    this.getTrabajos();
  }
};
</script>

<style scoped>
/* Menú naveador*/

.navegador {
  display: flex;
  height: 55px;
  flex-direction: column;
  background: rgba(243, 241, 255, 0.7);
}
section nav ul {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  list-style: none;
  margin-left: 100px;
}
section nav ul li a {
  display: flex;
  justify-content: center;
  width: 150px;
  align-items: center;
  text-decoration: none;
  height: 50px;
  color: #1a059b;
  cursor: pointer;
  font-family: Inder;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
}

/* FIN Menú naveador*/

.cuerpo {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

/* Inicio tap Filtro */
.listado {
  display: flex;
  margin-left: 100px;
  margin-top: 50px;
}
.filtro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 15%;
  height: 220px;
  margin-top: 80px;
  color: #1a059b;
  font-family: Inder;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  border-radius: 7px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);
}
.linea {
  width: 90%;
  height: 0px;
  margin-left: 4%;
  border: 0.5px solid rgba(25, 5, 155, 0.2);
  margin-bottom: 10px;
}
.filtro h3 {
  font-size: 18px;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}
.filtro input[type="checkbox"] {
  display: none;
}
.filtro label {
  padding: 5px 15px 5px 40px;
  display: inline-block;
  position: relative;
  border-radius: 2px;
  cursor: pointer;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.filtro label:hover {
  background: rgba(243, 241, 255, 1);
}
.filtro label:before {
  content: "";
  width: 10px;
  height: 10px;
  display: inline-block;
  background: none;
  border: 2px solid #1a059b;
  border-radius: 3px;
  position: absolute;
  left: 11px;
  top: 8px;
}
.filtro input[type="checkbox"]:checked + label {
  padding: 5px 15px;
  background: linear-gradient(
    270deg,
    #5b7cf0 0%,
    rgba(88, 31, 249, 0.94) 67.59%
  );
  border-radius: 2px;
  color: #ffffff;
}
.filtro input[type="checkbox"]:checked + label:before {
  display: none;
}

/* FIN tap Filtro */

/* Inicio tabla Trabajos */

table {
  width: 650px;
  height: auto;
  font-family: Inder;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: #1a059b;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin-bottom: 10%;
}
.inputSearch {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.inputSearch input {
  border: none;
  outline: none;
  background-color: transparent;
  font-family: Inder;
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  width: 60%;
  margin-left: 8px;
}
th {
  padding: 5px;
}

td {
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom-color: 2px solid rgba(25, 5, 155, 0.2);
  border-top-color: 2px solid rgba(25, 5, 155, 0.2);
}
.separador {
  width: 70%;
  border: 1px solid rgba(25, 5, 155, 0.5);
  margin-left: 16%;
}
.lineaListado {
  width: 100%;
  height: 0px;
  margin-top: 10px;
  border: 0.5px solid rgba(25, 5, 155, 0.2);
}
td h2 {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
.arreglar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1 {
  padding-bottom: 5px;
}

/* FIN diseño de tablas */
</style>
