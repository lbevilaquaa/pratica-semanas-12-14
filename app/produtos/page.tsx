
import { revalidarProdutos } from "../acoes/produtos";

const produtos = [
  { id: 1, nome: "Máquina de cortar cabelo", preco: 189.90, categoria: "Equipamentos" },
  { id: 2, nome: "Navalha profissional", preco: 49.90, categoria: "Acessórios" },
  { id: 3, nome: "Pomada modeladora", preco: 35.90, categoria: "Finalização" },
  { id: 4, nome: "Shampoo para cabelo", preco: 29.90, categoria: "Cuidados" },
  { id: 5, nome: "Pente profissional", preco: 14.90, categoria: "Acessórios" },
  { id: 6, nome: "Tesoura de barbeiro", preco: 79.90, categoria: "Equipamentos" },
  { id: 7, nome: "Óleo para barba", preco: 32.90, categoria: "Cuidados" },
  { id: 8, nome: "Escova para barba", preco: 19.90, categoria: "Acessórios" },
  { id: 9, nome: "Loção pós-barba", preco: 39.90, categoria: "Cuidados" },
  { id: 10, nome: "Capa de corte", preco: 44.90, categoria: "Equipamentos" },
];

export default function ProdutosPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8f6fc",
        padding: "45px 24px",
        fontFamily: "Arial, sans-serif",
        color: "#1e293b",
      }}
    >
      <div style={{ maxWidth: "1050px", margin: "0 auto" }}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div>
            <h1 style={{ margin: 0, fontSize: "30px" }}>
              Product<span style={{ color: "#7c3aed" }}>Hub</span>
            </h1>
            <p style={{ color: "#64748b", marginTop: "8px" }}>
              Produtos e acessórios para barbearia
            </p>
          </div>

          <a
            href="/produtos/novo"
            style={{
              backgroundColor: "#7c3aed",
              color: "#ffffff",
              textDecoration: "none",
              padding: "13px 20px",
              borderRadius: "10px",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            + Novo produto
          </a>
        </header>

        <section
          style={{
            backgroundColor: "#ffffff",
            padding: "25px",
            borderRadius: "16px",
            border: "1px solid #eee7f8",
            marginBottom: "28px",
          }}
        >
          <h2 style={{ marginTop: 0, fontSize: "20px" }}>
            Lista de produtos
          </h2>
          <p style={{ color: "#64748b", fontSize: "14px" }}>
            Confira os produtos disponíveis no catálogo.
          </p>

          <form action={revalidarProdutos}>
            <button
              type="submit"
              style={{
                backgroundColor: "#f3e8ff",
                color: "#7c3aed",
                border: "1px solid #e9d5ff",
                padding: "10px 16px",
                borderRadius: "9px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Atualizar cache
            </button>
          </form>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {produtos.map((produto) => (
            <article
              key={produto.id}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #eee7f8",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 5px 20px rgba(91, 33, 182, 0.04)",
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "12px",
                  backgroundColor: "#f3e8ff",
                  color: "#7c3aed",
                  fontSize: "21px",
                  marginBottom: "18px",
                }}
              >
                ✦
              </div>

              <p
                style={{
                  fontSize: "12px",
                  color: "#7c3aed",
                  fontWeight: "bold",
                  marginBottom: "8px",
                }}
              >
                {produto.categoria}
              </p>

              <h3
                style={{
                  fontSize: "17px",
                  margin: "0 0 16px",
                  minHeight: "42px",
                }}
              >
                {produto.nome}
              </h3>

              <p
                style={{
                  fontSize: "23px",
                  fontWeight: "bold",
                  color: "#1e293b",
                  margin: 0,
                }}
              >
                {produto.preco.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </article>
          ))}
        </section>

        <footer
          style={{
            textAlign: "center",
            color: "#94a3b8",
            fontSize: "12px",
            marginTop: "40px",
          }}
        >
          ProductHub · Catálogo de produtos para barbearia
        </footer>
      </div>
    </main>
  );
}
