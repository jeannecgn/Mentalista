body {
  font-family: "Roboto Mono", monospace;
  min-height: 600px;
  background-image: url("https://www.alura.com.br/assets/img/imersoes/dev-2021/dia-03-mentalista.png");
  background-color: #000000;
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
}

.container {
  text-align: center;
  padding: 20px;
  height: 100vh;
}
.valores-container {
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin: 50px;
}
fieldset {
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}

.page-title {
  color: #ffffff;
  margin: 0 0 5px;
}

.page-subtitle {
  color: #ffffff;
  margin-top: 16px;
  padding: 40px;
}

.page-logo {
  width: 200px;
  position: absolute;
  top: 10px;
  right: 10px;
}

.alura-logo {
  width: 80px;
  position: absolute;
  top: 10px;
  left: 10px;
}

@media (max-height: 500px) {
  body {
    min-height: 800px;
  }
}

input {
  margin: 4px;
  padding: 6px;
  border-radius: 5px;
}

button {
  margin-top: 12px;
  padding: 4px 8px;
  border-radius: 10px;
  background: #ffffff;
}

.resultado {
  color: #ffffff;
  text-align: center;
  margin-top: 16px;
}
