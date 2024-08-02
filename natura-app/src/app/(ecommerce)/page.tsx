"use client";

import Banner from "@/components/banner";
import Button from "@/components/button";
import { Container, ContentTitle, Footer } from "./styles";
import Products from "./products";

export default function Home() {
  return (
    <main>
      <Banner
        image="/assets/banner.jpg"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
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
        <Products />
        <Footer>
          carregar mais
        </Footer>
      </Container>
    </main>
  );
}
