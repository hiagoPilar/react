import "./App.css";
import api from "../../services/api";
import { useEffect, useState, useRef } from "react";

function Home() {
  //precisa o useState para poder mostrar as infos na tela, onde users sao onde estao nossos dados e useState é responsavel por colocar os dados ali dentro
  const [users, setUsers] = useState([]);

  //vamos guardar os valores dos inputs, mas precisamos avisar quem vai recber esse valor, entao vamos la no input
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  //funcoa para mostrar users
  async function getUsers() {
    const userFromApi = await api.get("/users");

    //pegamos somente as infos que estao em data com o useState, e ele joga dentro de users
    setUsers(userFromApi.data);
  }

  //funcao para criar users
  async function createUsers() {
    await api.post("/users", {
      //current.value busca no html somente o dado especifico
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
    });
  }

  //toda vez que a pagina abrir ele vai chamar o getUsers
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name="nome" type="text" ref={inputName} />
        <input name="email" type="email" ref={inputEmail} />
        <input name="idade" type="number" ref={inputAge} />
        <button type="button" onClick={createUsers}>
          Cadastrar
        </button>
      </form>

      {users.map((user) => (
        <div key={user.id}>
          <div>
            <p>Nome: {user.name}</p>
            <p>Email:{user.email}</p>
            <p>Idade: {user.age}</p>
          </div>
          <button>Apagar</button>
        </div>
      ))}
    </div>
  );
}

export default Home;
