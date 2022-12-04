<template>
    <div class="vue-tempalte">
      <form>
        <h3>Saisie Fabrication Order</h3>
        

  
        <div class="form-group">
          <label>Date OF</label>
          <input type="date" class="form-control form-control-lg" />
        </div>
  
        <div class="form-group">
          <label>Ref OF </label>
          <input type="text" class="form-control form-control-lg" />
        </div>
  
        <div class="form-group">
          <label>Ref Article</label>
          <input type="text" class="form-control form-control-lg" />
        </div>
  
        <div class="form-group">
          <label>Designation</label>
          <input type="text" class="form-control form-control-lg" />
        </div>

        <div class="form-group">
          <label>Quantite Totale</label>
          <input type="number" class="form-control form-control-lg" />
        </div>
  
        <br>
        <div class="form-group">
         <label><pre>Taille A Confectioner</pre></label>
         <select v-model="selected" >
          <option disabled value="">Choisissez</option>
          <option>Taille M</option>
          <option>Taille XL</option>
         </select>
       </div>
  
      
       <br>
        <button type="submit" class="blockm">
          Soumetre OF
        </button>
        <button type="submit" class="block">
         Annuler
        </button>
        <p class="client text-right">
          Already registered
          <router-link :to="{ name: 'client' }">return page</router-link>
        </p>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {};
    },
  };
  </script>
  <style>
  * {
    box-sizing: border-box;
  }
  
  
  
  body,
  html,
  .App,
  .vue-tempalte,
  .vertical-center {
    width: 80%;
    height: 80%;
    padding: 40px 55px 45px 55px;
  }
  
  .navbar-light {
    background-color: #1b456b;
    box-shadow: 0px 14px 80px rgba(63, 66, 109, 0.2);
    
  
  }
  
  .vertical-center {
    display: flex;
    text-align: left;
    justify-content: center;
    flex-direction: column;
  }
  
  
  
  li{
   
    width:100px;
    font-size: 22px;
  
  }
  
  
   
  .inner-block {
    width: 450px;
    margin: 1255px ;
    background: #40ccf7;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all 0.3s;
  }
  
  .vertical-center .form-control:focus {
    border-color: #2554ff;
    box-shadow: none;
   
  }
  
  .vertical-center h3 {
    text-align: center;
    margin: 0;
    line-height: 1;
    padding-bottom: 20px;
  }
  
  label {
    font-weight: 500;
    color:rgb(97, 93, 94) ;
  }
  
  input.form-control  {
    background-color: #e3f5f8;
  
  }
  
  .forgot-password,
  .forgot-password a {
    text-align: right;
    font-size: 13px;
    padding-top: 10px;
    color: #444242;
    margin: 0;
  }
  
  .forgot-password a {
    color: #2554ff;
   
  }
  
  .social-icons {
    text-align: center;
    font-family: "Open Sans";
    font-weight: 300;
    font-size: 1.5em;
    color: #222222;
  }
  
  .social-icons ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .social-icons ul li {
    display: inline-block;
    zoom: 1;
    width: 65px;
    vertical-align: middle;
    border: 1px solid #e3e8f9;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    margin-right: 5px;
    background: #f4f6ff;
  }
  
  .social-icons ul li a {
    display: block;
    font-size: 1.4em;
    margin: 0 5px;
    text-decoration: none;
  }
  .social-icons ul li a i {
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    -ms-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
  }
  
  .social-icons ul li a:focus i,
  .social-icons ul li a:active i {
    transition: none;
    color: #222222;
  }
  .blockm{
    margin: 30px;
    font-size: 20px;
  }
  .block{
    margin: 30px;
    font-size: 20px;
  }
  </style>