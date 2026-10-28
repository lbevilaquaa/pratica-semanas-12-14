


import { cadastrarProduto } from "../../acoes/produtos";
import SubmitButton from "./SubmitButton";

export default function NovoProdutoPage() {
    return (
        <main
            style={{
                minHeight: "100vh",
                backgroundColor: "#f8f6fc",
                fontFamily: "Arial, sans-serif",
                padding: "50px 20px",
                color: "#1e293b",
            }}
        >
            <header
                style={{
                    maxWidth: "1000px",
                    margin: "0 auto 45px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <div>
                    <h2 style={{ margin: 0, color: "#7c3aed", fontSize: "24px" }}>
                        Product<span style={{ color: "#1e293b" }}>Hub</span>
                    </h2>
                    <p style={{ color: "#64748b", marginTop: "6px", fontSize: "13px" }}>
                        PAINEL DE GERENCIAMENTO
                    </p>
                </div>

                <a
                    href="/produtos"
                    style={{
                        textDecoration: "none",
                        color: "#475569",
                        backgroundColor: "white",
                        border: "1px solid #e9dffb",
                        padding: "11px 18px",
                        borderRadius: "10px",
                        fontSize: "14px",
                    }}
                >
                    ← Ver produtos
                </a>
            </header>

            <section
                style={{
                    maxWidth: "560px",
                    margin: "0 auto",
                    backgroundColor: "#ffffff",
                    padding: "38px",
                    borderRadius: "20px",
                    boxShadow: "0 10px 35px rgba(91, 33, 182, 0.07)",
                    border: "1px solid #eee7f8",
                }}
            >
                <div
                    style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "14px",
                        backgroundColor: "#f3e8ff",
                        color: "#7c3aed",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "25px",
                        marginBottom: "22px",
                    }}
                >
                    +
                </div>

                <h1 style={{ fontSize: "28px", margin: "0 0 10px" }}>
                    Novo produto
                </h1>

                <p
                    style={{
                        color: "#64748b",
                        fontSize: "14px",
                        lineHeight: 1.7,
                        marginBottom: "30px",
                    }}
                >
                    Preencha as informações abaixo para cadastrar um produto no sistema.
                </p>

                <form action={cadastrarProduto}>
                    <div style={{ marginBottom: "24px" }}>
                        <label
                            htmlFor="nome"
                            style={{
                                display: "block",
                                fontSize: "14px",
                                fontWeight: "bold",
                                marginBottom: "9px",
                            }}
                        >
                            Nome do produto
                        </label>

                        <input
                            id="nome"
                            name="nome"
                            type="text"
                            placeholder="Ex.: Teclado sem fio"
                            required
                            style={{
                                boxSizing: "border-box",
                                width: "100%",
                                padding: "14px 15px",
                                border: "1px solid #e3d8f3",
                                borderRadius: "10px",
                                fontSize: "14px",
                                outlineColor: "#7c3aed",
                                backgroundColor: "#fdfcff",
                                color: "#1e293b",
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: "30px" }}>
                        <label
                            htmlFor="preco"
                            style={{
                                display: "block",
                                fontSize: "14px",
                                fontWeight: "bold",
                                marginBottom: "9px",
                            }}
                        >
                            Preço (R$)
                        </label>

                        <input
                            id="preco"
                            name="preco"
                            type="number"
                            step="0.01"
                            min="0"
                            placeholder="Ex.: 150,00"
                            required
                            style={{
                                boxSizing: "border-box",
                                width: "100%",
                                padding: "14px 15px",
                                border: "1px solid #e3d8f3",
                                borderRadius: "10px",
                                fontSize: "14px",
                                outlineColor: "#7c3aed",
                                backgroundColor: "#fdfcff",
                                color: "#1e293b",
                            }}
                        />
                    </div>

                    <SubmitButton />
                </form>

                <p
                    style={{
                        textAlign: "center",
                        color: "#94a3b8",
                        fontSize: "12px",
                        marginTop: "24px",
                        marginBottom: 0,
                    }}
                >
                    Preencha todos os campos obrigatórios.
                </p>
            </section>

            <footer
                style={{
                    textAlign: "center",
                    color: "#a39ab5",
                    fontSize: "12px",
                    marginTop: "35px",
                }}
            >
                ProductHub · Sistema de gerenciamento de produtos
            </footer>
        </main>
    );
}
