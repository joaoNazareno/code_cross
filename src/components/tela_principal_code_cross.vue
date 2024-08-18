<template>
  <div id="tela-principal">
    <h1>Bem-vindo à Tela Principal!</h1>
  </div>
</template>

<script>
export default {
  name: 'TelaPrincipalCodeCross',
};
</script>

<style scoped>
#tela-principal {
  width: 100vw;
  height: 100vh; 
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  position: fixed; 
  top: 0;
  left: 0;
  z-index: 1000; 
}
</style>
