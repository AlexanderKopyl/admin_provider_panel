<template>
  <v-app id="inspire">

    <v-app-bar
      app
      clipped-right
      color="green"
      dark
    >
      <v-toolbar-title >Заказы</v-toolbar-title>
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
      Список заказов
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
      item-key="order"
      show-expand
      show-select
      class="elevation-1"
    >
      <template v-slot:top>
      </template>
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          <div class="order__details">Подробная информация по заказу {{ item.order }}</div>
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
          text: 'Номер заказа',
            align: 'start',
            sortable: true,
            value: 'order',
        },
        { text: 'E-mail', value: 'mail' },
        { text: 'Номер телефона', value: 'phone_number' },
          { text: 'Покупатель', value: 'customer' },
          { text: 'Статус', value: 'Status' },
          { text: 'Итого', value: 'bill' },
          { text: 'Дата добавления', value: 'date_add'},
          { text: 'Дата обновления', value: 'date_update'},
           { text: '', value: 'data-table-expand' },
      ],
      desserts: [
        {
            order: '123456789',
            phone_number: '+380632456987',
            mail: '123@ie.net.ua',
            customer: 'Ivanov Ivan Ivanovich',
            Status: 'Выполнен',
            bill: '10568 грн',
            date_add: '21.05.2020',
            date_update: '22.05.2020',
          },
          {
            order: '12345678',
            phone_number: '+380632456987',
            mail: '123@ie.net.ua',
            customer: 'Ivanov Ivan Ivanovich',
            Status: 'Выполнен',
            bill: '10568 грн',
            date_add: '21.05.2020',
            date_update: '22.05.2020',
          },
          {
            order: '1234567',
            phone_number: '+380632456987',
            mail: '123@ie.net.ua',
            customer: 'Ivanov Ivan Ivanovich',
            Status: 'Выполнен',
            bill: '10568 грн',
            date_add: '21.05.2020',
            date_update: '22.05.2020',
          },
          {
            order: '12345678568',
            phone_number: '+380632456987',
            mail: '123@ie.net.ua',
            customer: 'Ivanov Ivan Ivanovich',
            Status: 'Выполнен',
            bill: '10568 грн',
            date_add: '21.05.2020',
            date_update: '22.05.2020',
          },
          {
            order: '123456585689',
            phone_number: '+380632456987',
            mail: '123@ie.net.ua',
            customer: 'Ivanov Ivan Ivanovich',
            Status: 'Выполнен',
            bill: '10568 грн',
            date_add: '21.05.2020',
            date_update: '22.05.2020',
          },
          {
            order: '123456757569',
            phone_number: '+380632456987',
            mail: '123@ie.net.ua',
            customer: 'Ivanov Ivan Ivanovich',
            Status: 'Выполнен',
            bill: '10568 грн',
            date_add: '21.05.2020',
            date_update: '22.05.2020',
          },
          {
            order: '12345656759',
            phone_number: '+380632456987',
            mail: '123@ie.net.ua',
            customer: 'Ivanov Ivan Ivanovich',
            Status: 'Выполнен',
            bill: '10568 грн',
            date_add: '21.05.2020',
            date_update: '22.05.2020',
          },
          {
            order: '123456567569',
            phone_number: '+380632456987',
            mail: '123@ie.net.ua',
            customer: 'Ivanov Ivan Ivanovich',
            Status: 'Выполнен',
            bill: '10568 грн',
            date_add: '21.05.2020',
            date_update: '22.05.2020',
          },
          {
            order: '123456567569',
            phone_number: '+380632456987',
            mail: '123@ie.net.ua',
            customer: 'Ivanov Ivan Ivanovich',
            Status: 'Выполнен',
            bill: '10568 грн',
            date_add: '21.05.2020',
            date_update: '22.05.2020',
          },
          {
            order: '12345656756',
            phone_number: '+380632456987',
            mail: '123@ie.net.ua',
            customer: 'Ivanov Ivan Ivanovich',
            Status: 'Выполнен',
            bill: '10568 грн',
            date_add: '21.05.2020',
            date_update: '22.05.2020',
          }
        ],
      }
    },
  }
</script>
<style scope>
.order__details{
  font-size: 20px;
}
.customer__info__col-1{
  border-style: solid;
  border-width: 0.2px;
  padding: 5px;
  text-align: center;
}
.customer__value__col-1{
  font-weight: 700;
  border-style: solid;
  border-width: 0.2px;
  padding: 5px;
  text-align: center;
}
.customer__info_all{
  margin-bottom: 5px;
  border-bottom: dashed thin;
}
</style>