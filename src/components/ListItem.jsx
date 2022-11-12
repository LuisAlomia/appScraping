import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import scraping from "../services/scraping";
import CardItem from "./CardItem";
import Loading from "./Loading";
import "../index.css";

const ListItem = () => {
  const { search } = useParams();
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    scraping(search)
      .then((resp) => {
        setProducts(resp);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [search]);

  return (
    <main className="mt-12">
      {loading === true ? (
        <div className="my-28 flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <section className="cardList">
          {products.map((item, index) => (
            <article key={index} className="justify-self-center ">
              <CardItem product={item} />
            </article>
          ))}
        </section>
      )}
    </main>
  );
};

export default ListItem;
