

"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      style={{
        width: "100%",
        padding: "15px",
        border: "none",
        borderRadius: "10px",
        backgroundColor: pending ? "#c4b5fd" : "#7c3aed",
        color: "#ffffff",
        fontSize: "15px",
        fontWeight: "bold",
        cursor: pending ? "not-allowed" : "pointer",
        boxShadow: "0 5px 12px rgba(124, 58, 237, 0.18)",
        transition: "background-color 0.2s",
      }}
    >
      {pending ? "Cadastrando..." : "Cadastrar produto →"}
    </button>
  );
}
