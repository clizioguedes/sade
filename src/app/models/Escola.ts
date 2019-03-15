// import { HistoricoEscolar } from './Historico';
export interface Aluno {
    id?: string;
    dataCadastro?: Date;
    inep?: string;
    nome?: string;
    dataDeNascimento?: Date;
    nomeDoPai?: string;
    nomeDaMae?: string;
    sexo?: string;
    naturalidade?: string;
    ufNaturalidade?: string;
    rg: string;
    orgaoEmissorRg?: string;
    ufRg?: string;
    dataExpedicaoRg?: string;
    cpf?: string;
    nis?: string;
    sus?: string;
    endereco?: string;
    numero?: number;
    bairro?: string;
    cidade?: string;
    estado?: string;
    email?: string;
    celular?: string;
    idTurma?: string;
    situacao?: string; // Matricula Cancelada, Transferido, Cursando, Esperando Matricula
}

export interface Turma {
    id?: string;
    dataCadastro?: string;
    nome?: string;
    periodo?: string;
    nivel?: string;
    modalidade?: string;
    disciplinas?: Disciplina[];
}

export interface Disciplina {
    id?: string;
    idTurma?: string;
    dataCadastro?: string;
    nome?: string;
    professor?: Professor;
}

export interface Professor {
    id?: string;
    dataCadastro: string;
    nomeCompleto?: string;
    dataNascimento?: string;
    sexo?: string;
    naturalidade?: string;
    ufNaturalidade?: string;
    rg: string;
    orgaoEmissorRg?: string;
    ufRg?: string;
    dataExpedicaoRg?: string;
    cpf?: string;
    nis?: string;
    sus?: string;
    endereco?: string;
    numero?: string;
    bairro?: string;
    cidade?: string;
    estado?: string;
    email?: string;
    celular?: string;
    instituicao?: string;
    anoFormacao?: number;
    curso?: string;
    nivel?: string;
    turmas?: Turma[];
}

export interface Escola {
    id: string;
    nome: string;
    endereco: Endereco;
    cnpj: string;
    inep: string;
    email: string;
    telefone: string;
    anoLetivo: number;
}

export interface Documentacao {
    identidade?: {
        rg: string;
        orgaoEmissorRg?: string;
        ufRg?: string;
        dataExpedicaoRg?: string;
    };
    cpf?: string;
    nis?: string;
    sus?: string;
}

export interface Boletim {
    dataCadastro?: string;
    id?: string;
    nota1?: number;
    nota2?: number;
    nota3?: number;
    media?: number;
}

export interface Faltas {
    dataCadastro?: string;
    data?: string;
    quantidade?: number;
    total?: number;
}

export interface Endereco {
    enredeco?: string;
    numero?: number;
    bairro?: string;
    cidade?: string;
    estado?: string;
    complemento?: string;
}
