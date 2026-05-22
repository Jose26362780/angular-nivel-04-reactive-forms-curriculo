# ✅ Cadastro de Currículo | Gerenciador de Currículo Angular 21

Projeto desenvolvido durante a formação Angular da `Rocketseat`.

Uma aplicação web moderna para criação e gerenciamento de currículos com formulários reativos, validações em tempo real e integração com API de localização. Focada em arquitetura escalável, gerenciamento de estado com Signals, validações customizadas e experiência do usuário otimizada. Utiliza Angular 21 com componentes standalone, Reactive Forms avançados, signals (nova geração reativa do Angular) e integração com API pública de estados e cidades brasileiras.

Durante o desenvolvimento, foco em:

- Arquitetura moderna Angular (Standalone components).
- Reactive Forms com validações complexas e customizadas.
- Gerenciamento de estado com Signals e RxResource.
- Integração com API pública (CountriesNow) para estados e cidades.
- Validação em tempo real com feedback visual.
- Diretivas customizadas para validação de inputs.
- RxJS e Reactive Programming (Signals, toSignal, rxResource).
- Separação clara entre camadas (core, features, shared).
- Formulários multi-etapas com navegação entre abas.

---

## 🚀 Tecnologias Utilizadas

Este projeto utiliza tecnologias modernas do ecossistema web:

![Angular](https://img.shields.io/badge/Angular%2021-DB0535?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-000000?style=for-the-badge&logo=reactivex&logoColor=E7008A)
![Tailwind_CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Reactive Forms](https://img.shields.io/badge/Reactive%20Forms-DD0031?style=for-the-badge&logo=angular&logoColor=white)

---

## 📂 Estrutura do Projeto

```bash
.
├── src/
│  ├── app/
│  │  ├── app.ts                        # Componente raiz
│  │  ├── app.html                      # Template raiz
│  │  ├── app.routes.ts                 # Definição de rotas
│  │  ├── app.config.ts                 # Configuração da aplicação
│  │  ├── app.css                       # Estilos do componente raiz
│  │  ├── core/
│  │  │  ├── services/
│  │  │  │  ├── curriculum-form-store.ts    # Store de estado do formulário
│  │  │  │  └── states-and-cities-api.ts    # Integração com API de localização
│  │  ├── features/
│  │  │  └── user-informations/
│  │  │     └── pages/
│  │  │        ├── step-personal/
│  │  │        │  ├── step-personal.ts      # Componente de informações pessoais
│  │  │        │  └── step-personal.html    # Template de informações pessoais
│  │  │        ├── step-professional/
│  │  │        │  ├── step-professional.ts  # Componente de informações profissionais
│  │  │        │  └── step-professional.html
│  │  │        └── resume-informations/
│  │  │           ├── resume-informations.ts # Componente de resumo final
│  │  │           └── resume-informations.html
│  │  ├── shared/
│  │  │  ├── directives/
│  │  │  │  └── input-validation-directive.ts # Diretiva customizada de validação
│  │  │  └── models/
│  │  │     ├── cities-response.ts       # Modelo de resposta de cidades
│  │  │     └── states-response.ts       # Modelo de resposta de estados
│  ├── main.ts                           # Entry point
│  ├── index.html                        # HTML raiz
│  └── styles.css                        # Estilos globais
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## 🔄 Fluxo da Aplicação

1. **Página Inicial**: Redirecionamento para etapa de informações pessoais.
2. **Etapa 1 - Informações Pessoais**: Usuário preenche dados pessoais, seleciona estado e cidade.
3. **Validação em Tempo Real**: Feedback visual imediato para campos inválidos.
4. **Etapa 2 - Informações Profissionais**: Adição de experiências profissionais (posição, empresa, descrição).
5. **Múltiplas Experiências**: Possibilidade de adicionar/remover múltiplas experiências.
6. **Etapa 3 - Resumo**: Visualização de todas as informações preenchidas.
7. **Salvamento**: Dados persistidos no estado da aplicação.

## ✨ Funcionalidades Principais

✅ Formulário multi-etapas com navegação entre abas  
✅ Validações de formulário em tempo real com feedback visual  
✅ Integração com API pública de estados e cidades brasileiras  
✅ Carregamento dinâmico de cidades ao selecionar estado  
✅ Diretiva customizada para exibir mensagens de validação  
✅ Reactive Forms com FormArray para experiências profissionais  
✅ Gerenciamento de estado com Signals e RxResource  
✅ Componentes standalone sem NgModules  
✅ Validações customizadas (email, idade mínima 18, padrão de endereço)  
✅ Resumo consolidado das informações preenchidas  
✅ Interface responsiva com Tailwind CSS  
✅ Padrões de Reactive Programming (RxJS, Signals)

## 🛠️ Como Rodar o Projeto Localmente

Siga os passos abaixo para rodar a aplicação:

```bash
# 1. Clonar o repositório
git clone <URL_DO_REPOSITORIO>
cd angular-nivel-04-reactive-forms-curriculo

# 2. Instalar dependências
npm install

# 3. Rodar a aplicação em desenvolvimento
npm start

# 4. Acessar no navegador
# http://localhost:4200
```

## 📦 Scripts Disponíveis

```bash
npm start          # Inicia o servidor de desenvolvimento Angular
npm run build      # Compila o projeto para produção
npm run watch      # Compila em modo watch durante desenvolvimento
npm test           # Executa testes unitários
```

## 🏗️ Arquitetura e Padrões

### Componentes Standalone

Todos os componentes usam `imports` diretamente, sem módulos `NgModule`:

```ts
@Component({
  selector: 'app-step-personal',
  imports: [ReactiveFormsModule, InputValidationDirective],
  templateUrl: './step-personal.html',
})
export class StepPersonal {}
```

### Signals para Estado Reativo

Uso de `signal()`, `computed()`, `toSignal()` e `rxResource()` para reatividade moderna:

```ts
selectedState = toSignal<string>(
  this.stateControl!.valueChanges.pipe(
    tap(() => {
      this.cityControl.setValue('', { emitEvent: false });
    }),
  ),
  {
    initialValue: this.stateControl!.value || '',
  },
);

citiesResource = rxResource({
  params: () => {
    const state = this.selectedState();
    if (!state) return undefined;
    return state;
  },
  stream: ({ params }) => this._statesAndCitiesApi.getCities(params),
});
```

### Reactive Forms Avançados

Utilização de `FormGroup` e `FormArray` com validações complexas:

```ts
private readonly curriculumForm = new FormGroup({
  personal: new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required, Validators.min(18)]),
    address: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[^,]+,\s*[^,]+,\s*[^,]+$/),
    ]),
    state: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    maritalStatus: new FormControl('', [Validators.required]),
  }),
  professional: new FormArray([
    new FormGroup({
      position: new FormControl('', [Validators.required]),
      company: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    }),
  ]),
});
```

### Diretivas Customizadas

Diretiva para validação em tempo real com feedback visual:

```ts
@Directive({
  selector: '[appInputValidation]',
})
export class InputValidationDirective {
  @Input() errorMessage = 'Campo Inválido';

  // Adiciona/remove classe de erro visualmente
  // Exibe mensagem de erro ao lado do input
}
```

### Integração com API Externa

Uso de `HttpClient` para integração com CountriesNow API:

```ts
getStates(): Observable<StatesListResponse> {
  return this._httpClient
    .post<IStateResponse>('https://countriesnow.space/api/v0.1/countries/states', {
      country: 'Brazil',
    })
    .pipe(map((statesResponse) => statesResponse.data.states));
}

getCities(state: string): Observable<CitiesListResponse> {
  return this._httpClient
    .post<ICitiesResponse>('https://countriesnow.space/api/v0.1/countries/state/cities', {
      country: 'Brazil',
      state,
    })
    .pipe(map((citiesResponse) => citiesResponse.data));
}
```

---

## 📡 Gerenciamento de Estado com Signals

Este projeto foca na implementação moderna de Signals como mecanismo principal de reatividade no Angular 21.

**Padrões utilizados**:

- ✅ **RxResource** para requisições HTTP com loading/erro automático
- ✅ **toSignal** para converter Observables (valueChanges) em Signals
- ✅ **Reactive Parameters** em rxResource para reatividade automática
- ✅ **State Services** (CurriculumFormStore) para gerenciamento global
- ✅ **Integração RxJS + Signals** para máxima compatibilidade

---

## 🔐 Validações

O projeto implementa múltiplas camadas de validação:

1. **Validadores Built-in**:
   - `required`: Campo obrigatório
   - `email`: Validação de email
   - `min(18)`: Idade mínima de 18 anos
   - `pattern()`: Validação de padrão (ex: endereço com vírgulas)

2. **Validadores de Array**:
   - Validação de FormArray não vazio (mínimo 1 experiência profissional)

3. **Feedback Visual**:
   - Exibição de mensagens de erro personalizadas
   - Classes CSS para indicar campos inválidos
   - Validação em tempo real enquanto o usuário digita

---

## 📸 Fluxo de Experiência Pessoal

1. **Carregamento**: Componente carrega lista de estados ao inicializar
2. **Seleção de Estado**: Usuário seleciona estado
3. **Atualização de Cidades**: Lista de cidades é carregada automaticamente
4. **Preenchimento**: Usuário preenche dados pessoais
5. **Navegação**: Clica em "Próximo" para ir à etapa profissional
6. **Adição de Experiências**: Adiciona múltiplas experiências
7. **Revisão**: Visualiza todas as informações no resumo final

---

## 💻 Sobre o Autor 😄

Engenheiro de Software com foco em desenvolvimento front-end rumo ao full stack. Dedicado a criar experiências digitais inovadoras que impactam o mundo através da tecnologia.

## 🔗 Contato

- [![linkedin](https://img.shields.io/badge/Linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jose-martinez-352032222/)
- [![gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:juniorjose1925@gmail.com)
- [![portfolio](https://img.shields.io/badge/Jose.Dev-0A0A03?style=for-the-badge&logo=react&logoColor=white)](https://my-portfolio-jose-martinez.netlify.app/)

---

## 📚 Referências

- [Angular Documentation](https://angular.io/docs)
- [Angular Signals](https://angular.io/guide/signals)
- [Reactive Forms Guide](https://angular.io/guide/reactive-forms)
- [RxJS Documentation](https://rxjs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [CountriesNow API](https://countriesnow.space/)
- [Netlify Documentation](https://docs.netlify.com/)

---

**Desenvolvido com ❤️ durante a formação Angular da Rocketseat**
