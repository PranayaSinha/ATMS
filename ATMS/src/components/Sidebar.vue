<template>
    <nav class="sidebar">
      <ul>
        <li><a href="#">Personal access tokens</a></li>
        <li><a href="#">API key</a></li>
        <li><a href="#">OAuth integrations</a></li>
      </ul>
      <hr>
      <ul>
        <li><a href="#">Help center</a></li>
        <li><a href="#">Developer docs</a></li>
        <li><a href="#">Community</a></li>
        <li><a href="#">Universe</a></li>
      </ul>
    </nav>
  </template>
  
  <style scoped>
  .sidebar {
    width: 250px;
    background-color: #1e1e1e;
    padding: 20px;
    color: #e0e0e0;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
  
  .sidebar ul {
    list-style-type: none;
    padding: 0;
  }
  
  .sidebar ul li {
    margin: 10px 0;
  }
  
  .sidebar ul li a {
    color: #e0e0e0;
    text-decoration: none;
  }
  
  .sidebar ul li a:hover {
    text-decoration: underline;
  }
  </style>
  