<template>
  <form @submit.prevent="dodajIgraca">
    <label>KLUB</label>
    <select id="klub" v-model="odabraniKlub">
      <option value="" disabled selected>Odaberite klub</option>
      <option v-for="klub in klubovi" :value="klub._id" :key="klub._id">{{ klub.naziv }}</option>
    </select>
    <label for="slika">SLIKA</label>
    <input type="text" name="slika" id="slika">

    <label for="ime">IME</label>
    <input type="text" name="ime" id="ime">

    <label for="prezime">PREZIME</label>
    <input type="text" name="prezime" id="prezime">

    <label for="nadimak_na_dresu">NADIMAK NA DRESU</label>
    <input type="text" name="nadimak_na_dresu" id="nadimak_na_dresu">

    <label for="datum_rodjenja">DATUM ROĐENJA</label>
    <input type="date" name="datum_rodjenja" id="datum_rodjenja">

    <label for="broj_na_dresu">BROJ</label>
    <input type="number" name="broj_na_dresu" id="broj_na_dresu">

    <label for="rating">RATING</label>
    <input type="number" name="rating" id="rating">

    <label for="pozicija">POZICIJA</label>
    <input type="text" name="pozicija" id="pozicija">

    <label for="noga">BOLJA NOGA</label>
    <input type="text" name="noga" id="noga">

    <button type="submit">DODAJ IGRAČA</button>
</form>
</template>

<script>

import axios from 'axios';


export default {
  data(){
    return{
      klubovi:[],
      odabraniKlub:null,
      slika:'',
      ime:'',
      prezime:'',
      nadimak_na_dresu:'',
      datum_rodjenja:'',
      broj_na_dresu:null,
      rating:null,
      pozicija:'',
      noga:''
    }
  },
  mounted(){
    this.dohvatiKlubove();
  },
  methods:{
    async dohvatiKlubove(){
      try{
        const response= await axios.get('/klubovi');
        this.klubovi=response.data;
      }catch(error){
        console.error('Klub nije pronađen',error);
      }
    },
    async dodajIgraca(){
      try{
        const response= await axios.post('/igraci',{
          klub:this.odabraniKlub,
          slika:this.slika,
          ime:this.ime,
          prezime:this.prezime,
          nadimak_na_dresu:this.nadimak_na_dresu,
          datum_rodjenja:this.datum_rodjenja,
          broj_na_dresu:this.broj_na_dresu,
          rating:this.rating,
          pozicija:this.pozicija,
          noga:this.noga
        });
        console.log('Igrač dodan: ',response.data);
        this.ocistiFormu();
      }catch(error){
        console.error('Greška pri dodavanju igrača:', error);
      }
    },
    ocistiFormu(){
      this.odabraniKlub='',
      this.slika='',
      this.ime='',
      this.prezime='',
      this.nadimak_na_dresu='',
      this.datum_rodjenja='',
      this.broj_na_dresu='',
      this.rating='',
      this.pozicija='',
      this.noga=''
    }
  }
}
</script>
<style></style>
