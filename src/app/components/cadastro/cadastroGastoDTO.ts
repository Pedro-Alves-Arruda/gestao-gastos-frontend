export interface NotaFiscalDTO {
    valor: string;
    estabelecimento: string;
    data: Date; // ou Date, mas melhor como string no formato ISO
    usuario: string;
}