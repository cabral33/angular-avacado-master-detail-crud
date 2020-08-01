import { InMemoryDbService } from 'angular-in-memory-web-api'

import { Category } from './pages/categories/shared/category.model'
import { Entry } from "./pages/entries/shared/entry.model";

export class InMemoryDatabase implements InMemoryDbService {
    createDb(){
        const categories: Category[] = [
            {id: 1, name:"Moradia", description:"Pagamentos de contas da casa"},
            {id: 2, name:"Saúde", description:"Plano de saúde e Remédios"},
            {id: 3, name:"Lazer", description:"Cinema, Parques, Etc"},
            {id: 4, name:"Salário", description:"Recebimento de Salário "},
            {id: 5, name:"Freelas", description:"Trabalhos como Freelancer"},
        ]

        const entries: Entry[] = [
            {id: 1, name: "Gás de Cozinha", categoryId: categories[0].id, category: categories[0], paid: true, date: '14/10/2018', amount: '70,80', type: 'expense', description: "Qualquer descrição para essa despesa"} as Entry,
            {id: 2, name: "Suplementos", categoryId: categories[1].id, category: categories[1], paid: false, date: '10/10/2018', amount: '100,80', type: 'revenue'} as Entry,
            {id: 3, name: "Salario da Empresa X", categoryId: categories[3].id, category: categories[3], paid: true, date: '24/10/2018', amount: '50,80', type: 'expense'} as Entry,
            {id: 4, name: "Aluguel de Filme", categoryId: categories[2].id, category: categories[2], paid: false, date: '15/10/2018', amount: '70,80', type: 'revenue'} as Entry,
            {id: 5, name: "Suplementos", categoryId: categories[1].id, category: categories[1], paid: true, date: '28/10/2018', amount: '20,80', type: 'revenue'} as Entry,
            {id: 6, name: "VideoGame na Fila", categoryId: categories[2].id, category: categories[2], paid: true, date: '5/10/2018', amount: '200,80', type: 'expense'} as Entry,
            {id: 11, name: "Uber", categoryId: categories[1].id, category: categories[1], paid: false, date: '14/11/2018', amount: '7,80', type: 'revenue'} as Entry,
            {id: 12, name: "Aluguel", categoryId: categories[2].id, category: categories[2], paid: false, date: '13/10/2018', amount: '50,80', type: 'expense'} as Entry,
            {id: 13, name: "Gás de Cozinha", categoryId: categories[1].id, category: categories[1], paid: true, date: '1/10/2018', amount: '110,80', type: 'revenue'} as Entry,
            {id: 14, name: "Pagamento pelo Projeto xyz", categoryId: categories[4].id, category: categories[4], paid: true, date: '11/10/2018', amount: '100,80', type: 'revenue'} as Entry,
            {id: 19, name: "Aluguel de Filme", categoryId: categories[2].id, category: categories[2], paid: false, date: '9/10/2018', amount: '150,80', type: 'expense'} as Entry,
            {id: 21, name: "VideoGame na Fila", categoryId: categories[1].id, category: categories[1], paid: true, date: '15/10/2018', amount: '80,80', type: 'revenue'} as Entry,
            {id: 22, name: "Cinema", categoryId: categories[2].id, category: categories[2], paid: true, date: '16/10/2018', amount: '70,80', type: 'expense'} as Entry,
            {id: 23, name: "Jiu Jitsu", categoryId: categories[1].id, category: categories[1], paid: false, date: '17/10/2018', amount: '20,80', type: 'expense'} as Entry,
            {id: 44, name: "Uber", categoryId: categories[2].id, category: categories[2], paid: true, date: '18/10/2018', amount: '10,80', type: 'revenue'} as Entry,
            {id: 55, name: "Cinema", categoryId: categories[1].id, category: categories[1], paid: true, date: '19/10/2018', amount: '90,80', type: 'expense'} as Entry,

        ]

        return {categories, entries}
    }
}