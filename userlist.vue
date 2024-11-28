<!-- UserList.vue -->
<template>
    <div>
      <h2>用戶列表</h2>
      <ul>
        <li v-for="user in users" :key="user.id">{{ user.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: []
      };
    },
    mounted() {
      this.fetchUsers();
    },
    methods: {
      async fetchUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        this.users = data;
      }
    }
  };
  </script>
  
  <style scoped>
  h2 {
    color: #333;
  }
  
  ul {
    list-style-type: none;
  }
  
  li {
    margin: 5px 0;
  }
  </style>
  