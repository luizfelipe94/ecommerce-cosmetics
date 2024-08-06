"use client";

import Banner from "@/components/banner";
import Button from "@/components/button";
import { Container, ContentTitle, Footer } from "./styles";
import Products from "./products";
import { useState } from "react";
import { useProducts } from "@/hooks/useProducts";

export default function Home() {

  const [take, setTake] = useState(4);
  const { data: products } = useProducts(1, take);

  const handleNextPage = () => {
    setTake(take+4);
  };

  return (
    <main>
      <Banner
        image="/assets/banner.jpg"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignSelf: "center" }}>
          <h1>Se joga no arraiá</h1>
          <p>aproveite as ofertas com o melhor de maquiagem Natura</p>
          <div>
            <Button>
              Comprar agora
            </Button>
          </div>
        </div>
      </Banner>
      <Container>
        <ContentTitle>
          <h1>
            descubra as fragrâncias que combinam com você
          </h1>
        </ContentTitle>
        <Products products={products?.data || []}/>
        <Footer>
          <Button
            bgColor="white"
            textColor="black"
            borderColor="black"
            onClick={() => handleNextPage()}
          >
            Carregar outros
          </Button>
        </Footer>
      </Container>
    </main>
  );
}
