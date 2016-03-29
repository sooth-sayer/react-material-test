import { types } from '../actions/products';

const initialState = {
  products: [
    { id: 1, name: 'Some amazing product', price: '10', description: 'Do you think that if zombies had enough presence of mind to cook, that they\'d bake things out of brains? We can imagine there being zombie bakeries, where they whip up brain-shaped cupcakes with frosting made from blended parietal lobe. (Don\'t knock it until you\'ve tried it. It really adds a certain zing to cream cheese frosting. Way better than nutmeg, IMNSHO.) And of course, there\'d have to be chocolate chip cookies with chunks of medulla oblongata. OMG, delish.', tag: '#kitchen', image: 'http://i1.wp.com/shechive.files.wordpress.com/2013/03/a-products-exist-13.jpg?resize=500%2C375', previewImage: 'http://i1.wp.com/shechive.files.wordpress.com/2013/03/a-products-exist-13.jpg?resize=500%2C375' },
    { id: 2, name: 'Boeing 737', price: '1000' },
    { id: 3, name: 'New Zeland', price: '10000', description: 'New Zealand was one of the last major landmasses settled by humans. Radiocarbon dating, evidence of deforestation[22] and mitochondrial DNA variability within Māori populations[23] suggest New Zealand was first settled by Eastern Polynesians between 1250 and 1300,[17][24] concluding a long series of voyages through the southern Pacific islands.', tag: '#island',  previewImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Coat_of_arms_of_New_Zealand.svg/85px-Coat_of_arms_of_New_Zealand.svg.png', image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT1l9wUwGOmtDgi7ivJMtsys66jdS7ou8tdW1SdtwzmkTGOpFCW' },
    { id: 4, name: 'Matches', price: '1' },
    { id: 5, name: 'Cayo Iguano', price: '1000000' },
    { id: 6, name: 'Lamborgini', price: '1000000' },
    { id: 7, name: 'Gibson', price: '10000' },
  ],
  sortColumn: 'id',
  sortOrder: 'asc',
};

function products(state = initialState, action) {
  switch(action.type) {
  case types.CREATE:
    return Object.assign({}, {
      ...state,
      products: state.products.concat([ action.product ]),
    });

  case types.SORT:
    const column = action.column;
    return Object.assign({}, {
      ...state,
      sortColumn: column,
      sortOrder: getSortOrder(state, column),
    });

  default:
    return state;
  }
}

function getSortOrder(state, column) {
  const columnChanged = state.sortColumn !== column;
  if (columnChanged) {
    return 'asc';
  } else {
    return state.sortOrder === 'asc' ? 'desc' : 'asc';
  }
}

export default products;
