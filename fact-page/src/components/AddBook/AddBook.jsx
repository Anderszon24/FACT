import { useState } from "react";
import "./AddBook.css";
import CodeText from "../CodeText/CodeText";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const AddBook = () => {
  const [book, actualizarBook] = useState("");
  const [title, actualizarTitle] = useState("");
  const [author, actualizarAuthor] = useState("");
  const [pages, actualizarPages] = useState("");
  const [editorial, actualizarEditorial] = useState("");
  const [amount, actualizarAmount] = useState("");
  const [yearPublish, actualizarYearPublish] = useState("");
  const [generoLibro, actualizarGeneroLibro] = useState("");
  const [estado, actualizarEstado] = useState("");

  const sendInfo = (event) => {
    event.preventDefault();
    let datosAEnviar = {
      title: title,
      author: author,
      pages: pages,
      editorial: editorial,
      amount: amount,
      yearPublish: yearPublish,
      generoLibro: generoLibro,
      estado: estado,
    };
  };

  return (
    <section className="login-service">
      <h2>Agregar Nuevo Libro</h2>
      <form onSubmit={sendInfo}>
        <CodeText
          type="file"
          title="Imagen Portada"
          required
          placeHolder=""
          valor={title}
          actualizarValor={actualizarTitle}
        ></CodeText>
        <CodeText
          title="Titulo del Libro"
          required
          placeHolder="Titulo"
          valor={title}
          actualizarValor={actualizarTitle}
        ></CodeText>
        <CodeText
          title="Autor del Libro"
          required
          placeHolder="Autor"
          valor={author}
          actualizarValor={actualizarAuthor}
        ></CodeText>
        <CodeText
          title="Numero de Paginas"
          required
          placeHolder="Numero de Paginas"
          valor={pages}
          actualizarValor={actualizarPages}
        ></CodeText>
        <CodeText
          title="Editorial"
          required
          placeHolder="Editorial"
          valor={editorial}
          actualizarValor={actualizarEditorial}
        ></CodeText>
        <CodeText
          title="Cantidad de Libros"
          required
          placeHolder="Cantidad"
          valor={amount}
          actualizarValor={actualizarAmount}
        ></CodeText>
        <CodeText
          type="date"
          title="Fecha de Publicacion"
          required
          valor={yearPublish}
          actualizarValor={actualizarYearPublish}
        ></CodeText>
        <CodeText
          title="Genero del Libro"
          required
          placeHolder="Genero"
          valor={generoLibro}
          actualizarValor={actualizarGeneroLibro}
        ></CodeText>
        <CodeText
          title="Estado del Libro"
          required
          placeHolder="Estado"
          valor={estado}
          actualizarValor={actualizarEstado}
        ></CodeText>
        <div className="button-division">
          <Button>Añadir Libro</Button>
        </div>
      </form>
    </section>
  );
};

export default AddBook;
