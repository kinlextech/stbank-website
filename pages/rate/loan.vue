
<template>
  <section>
    <!-- {{ result }} -->
    <div class="view jarallax" style="max-height: 200px">
      <img
        src="https://www.stbanklaos.la/upload/loan/1.png"
        alt=""
        class="jarallax-img"
        style="width: 100%; max-height: 200px"
      />
      <div class="mask">
        <div class="container">
          <div>
            <h1>ອັດຕາດອກເບ້ຍເງິນກູ້</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <vs-table>
        <template #thead>
          <vs-tr>
            <vs-th rowspan="2"> ໄລຍະເວລາ </vs-th>
            <vs-th colspan="4"> ກີບ </vs-th>
            <vs-th colspan="4"> ໂດລາ </vs-th>
            <vs-th colspan="4"> ບາດ </vs-th>
          </vs-tr>
          <vs-tr>
            <template v-for="i in 3">
                <vs-th v-for="(it,index) in loanclass" :key="i+index">{{it}}</vs-th>
            </template>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr :key="i" v-for="(tr, i) in result.item">
            <vs-td>
              <div class="d-flex">
                <vs-avatar square size="24">
                  <img
                    :src="`https://www.stbanklaos.la/images/flag/${tr.flag}.png`"
                    alt=""
                  />
                </vs-avatar>
                <div>{{ tr.code }} <br />{{ tr.descr }}</div>
              </div>
            </vs-td>
            <vs-td>
              {{ tr.buy_tc }}
            </vs-td>
            <vs-td>
              {{ tr.buy }}
            </vs-td>
            <vs-td>
              {{ tr.buy }}
            </vs-td>
            <vs-td>
              {{ tr.buy }}
            </vs-td>
            <vs-td> +1 </vs-td>

            <template #expand>
              <div class="con-content">
                <div class="d-flex">
                  <div>
                    <vs-input
                      label="Name"
                      v-model="value"
                      placeholder="Evan You"
                    />
                  </div>
                  <div>icon</div>
                  <div>
                    <vs-input
                      label="Name"
                      v-model="value"
                      placeholder="Evan You"
                    />
                  </div>
                </div>
              </div>
            </template>
          </vs-tr>
        </template>
      </vs-table>
    </div>
  </section>
</template>
<script>
export default {
  layout: "client",
  async asyncData({ $axios }) {
    const mountains = await $axios.get(
      "https://www.stbanklaos.la/api/la/exchangerate"
    );
    let result = mountains.data;
    return { result };
  },
  data: () => ({
    editActive: false,
    edit: null,
    editProp: "",
    search: "",
    allCheck: false,
    page: 1,
    max: 3,
    active: 0,
    selected: [],
    loanclass:['A','B','C','D'],
    users: [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        website: "hildegard.org",
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        website: "anastasia.net",
      },
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        website: "ramiro.info",
      },
      {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        website: "kale.biz",
      },
      {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        website: "demarco.info",
      },
      {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
        website: "ola.org",
      },
      {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
        website: "elvis.io",
      },
      {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
        website: "jacynthe.com",
      },
      {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
        website: "conrad.com",
      },
      {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        website: "ambrose.net",
      },
    ],
  }),
};
</script>

        