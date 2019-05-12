// import { HistoricoEscolar } from './Historico';
export interface Student {
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
    status?: string; // ativo / inativo
    idTurma?: string;
}

export interface Class {
    id?: string;
    dataCadastro?: string;
    dataEditado?: string;
    nome?: string;
    periodo?: string;
    nivel?: string;
    modalidade?: string;
    disciplinas?: Matter[];
}

export interface Matter {
    id?: string; // ok
    dataCadastro?: string; // ok
    nome?: string; // ok
    idTurma?: string; // ok
    idProfessor?: string; // ok
}

export interface Teacher {
    id?: string; // ok
    dataCadastro: string; // ok
    dataEditado: string; // ok
    nome?: string; // ok
    dataNascimento?: string; // ok
    sexo?: string; // ok
    naturalidade?: string; // ok
    ufNaturalidade?: string; // ok
    rg: string; // ok
    orgaoEmissorRg?: string; // ok
    ufRg?: string; // ok
    dataExpedicaoRg?: string; // ok
    cpf?: string; // ok
    nis?: string; // ok
    sus?: string; // ok
    endereco?: string; // ok
    numero?: string; // ok
    bairro?: string; // ok
    cidade?: string; // ok
    estado?: string; // ok
    email?: string; // ok
    celular?: string; // ok
    matricula?: string; // ok
    instituicaoFormacao?: string; // ok
    anoFormacao?: number; // ok
    cursoFormacao?: string; // ok
    nivelFormacao?: string; // ok
    inep?: string; // ok
}

export interface School {
    id: string; // ok
    nome?: string; // ok
    inep?: string; // ok
    anoLetivo?: string; // ok
    inicioAnoLetivo?: Date; // ok
    fimAnoLetivo?: Date; // ok
    endereco?: string; // ok
    numero?: string; // ok
    bairro?: string; // ok
    cidade?: string; // ok
    estado?: string; // ok
    email?: string; // ok
    telefone?: string; // ok
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
    id?: string;
    idEscola?: string;
    idTurma?: string;
    frequencia?: number;
    m1?: number;
    m2?: number;
    m3?: number;
    m4?: number;
    mf?: number;
    rec?: number;
    totalFaltas?: number;
}

export interface Diario {
    dataCadastro?: string;
    data?: string;
    quantidade?: number;
}

export interface Endereco {
    enredeco?: string;
    numero?: number;
    bairro?: string;
    cidade?: string;
    estado?: string;
    complemento?: string;
}
