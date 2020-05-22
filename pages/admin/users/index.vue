<template>
  <v-app id="inspire">

    <v-app-bar
      app
      clipped-right
      color="green"
      dark
    >
      <v-toolbar-title >Поставщики</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
        >
          <v-col
          col="12">
          <v-card>
    <v-card-title>
      Список поставщиков
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Введите данные для поиска"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
  </v-card>
              <v-data-table
      v-model="selected"
      :headers="headers"
      :items="desserts"
      :search="search"
      :single-expand="singleExpand"
      :expanded.sync="expanded"
      item-key="provider__name"
      show-expand
      show-select
      class="elevation-1"
    >
      <template v-slot:top>
      </template>
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          <div class="provider__details">Подробная информация о поставщике: {{ item.provider__name }}</div>
          <v-row>
           
          </v-row>
        </td>

      </template>
    </v-data-table>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer
      app
      color="green"
      class="white--text"
    >
      <span>ZooComplex</span>
      <v-spacer></v-spacer>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
data () {
    return {
      expanded: [],
      selected: [],
      search: '',
      singleExpand: true,
      headers: [
        {
          text: 'Поставщик',
            align: 'start',
            sortable: true,
            value: 'provider__name',
        },
        { text: 'E-mail', value: 'provider__e_mail' },
        { text: 'Номер телефона', value: 'provider__phone_number' },
        { text: 'Префикс', value: 'provider__prefix' },
          { text: 'Дата регистрации', value: 'provider__date_registration'},
          { text: 'Статус', value: 'status__provider'},
           { text: '', value: 'data-table-expand' },
      ],
      desserts: [
        {
            provider__name: 'Royal Canin',
            provider__e_mail: "info@royal-canin.com",
            provider__phone_number: '+380632456987',
            provider__prefix: 'rc-',
            provider__date_registration: '22.05.2020',
            status__provider: 'Сотрудничаем',
          },
          {
            provider__name: 'Fauna',
            provider__e_mail: "info@fauna.com.ua",
            provider__phone_number: '+380632456987',
            provider__prefix: 'fa-',
            provider__date_registration: '22.05.2020',
            status__provider: 'Сотрудничаем',
          },
          {
            provider__name: 'APG',
            provider__e_mail: "info@apg.com",
            provider__phone_number: '+380632456987',
            provider__prefix: 'op-',
            provider__date_registration: '22.05.2020',
            status__provider: 'Сотрудничаем',
          },
          {
            provider__name: 'ZooBonus',
            provider__e_mail: "info@zoobonus.com.ua",
            provider__phone_number: '+380632456987',
            provider__prefix: 'zb-',
            provider__date_registration: '22.05.2020',
            status__provider: 'Сотрудничаем',
          },
          {
            provider__name: 'Ferplast',
            provider__e_mail: "info@ferplast.com.ua",
            provider__phone_number: '+380632456987',
            provider__prefix: 'fp-',
            provider__date_registration: '22.05.2020',
            status__provider: 'Сотрудничаем',
          },
          {
            provider__name: 'Groomer:)',
            provider__e_mail: "info@groomer.com.ua",
            provider__phone_number: '+380632456987',
            provider__prefix: 'gr-',
            provider__date_registration: '22.05.2020',
            status__provider: 'Сотрудничаем',
          }
        ],
      }
    },
  }
</script>
<style scope>
.provider__details{
  font-size: 20px;
}
</style>