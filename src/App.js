import logo from './logo.svg';
import './App.css';
import Cards from './components/cards/cards.component';

const App = () => {
  const users = [
    {
      id: 1,
      name: 'Juan',
      paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
      imageUrl:'https://previews.123rf.com/images/phaianalog/phaianalog1711/phaianalog171100102/89870777-vector-de-fondo-formas-geom%C3%A9tricas-dise%C3%B1o-moderno-en-el-concepto-de-arte.jpg'
    },
    {
      id: 2,
      name: 'Simon',
      paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
      imageUrl:'https://previews.123rf.com/images/phaianalog/phaianalog1711/phaianalog171100102/89870777-vector-de-fondo-formas-geom%C3%A9tricas-dise%C3%B1o-moderno-en-el-concepto-de-arte.jpg'
    },
    {
      id: 3,
      name: 'Lolo',
      paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
      imageUrl:'https://previews.123rf.com/images/phaianalog/phaianalog1711/phaianalog171100102/89870777-vector-de-fondo-formas-geom%C3%A9tricas-dise%C3%B1o-moderno-en-el-concepto-de-arte.jpg'
    },
  ]
  return (
    <Cards users={users} />
  )
}
export default App