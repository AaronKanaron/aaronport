import './App.scss';

import Header from './components/molecules/header';
import Cursor from './components/atoms/cursor';
import CanvasComponent from './components/atoms/canvasOLDtest';
import SVGmorph from './components/atoms/svgmorph';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <section className='hero'>
        <p> Hello, I'm</p>
        <div className='hero__container'>
          <h1 className='name'> Aaron<br/> Alexander Clauss </h1>
          {/* <h2 className='title'>Frontend dev,</h2> */}
        </div>
        {/* <p>From Stockholm, Sweden</p> */}
      </section>
      <section>
        <h2>Projects</h2>
        <p>
          Labore nostrud aliquip ad ex cupidatat. Voluptate aliquip fugiat nisi laborum tempor ullamco. Voluptate ex fugiat incididunt cupidatat commodo ullamco elit commodo velit id non commodo sunt laborum. Qui velit ullamco qui ullamco. Consequat eu velit enim do consectetur do.
<br/>
Do commodo exercitation deserunt in anim laboris ut fugiat enim. Elit in aute sunt eu excepteur aliqua. Velit ex enim commodo consequat ad. Non cupidatat adipisicing aliquip fugiat ipsum reprehenderit aute nisi in nisi aliqua quis laboris. Nulla anim non esse minim. Eu velit eiusmod magna deserunt. Irure deserunt cupidatat excepteur tempor.
<br/>

Non amet enim nostrud fugiat ad tempor proident. Consectetur id elit et cillum non consequat velit anim. Irure quis fugiat commodo dolor mollit do excepteur sit consectetur pariatur exercitation aliqua ut. Minim mollit consequat tempor pariatur adipisicing est nisi minim nisi aute qui. Eiusmod voluptate esse enim est ea qui id ipsum Lorem cupidatat laborum ea id.
<br/>

Do irure nulla laborum pariatur sit voluptate est qui et ut ea. Laboris Lorem qui sint magna nostrud exercitation deserunt tempor. Cillum ex nostrud ex consectetur in deserunt occaecat ea excepteur do minim culpa. Quis nostrud aute eiusmod sit ad exercitation dolore eiusmod qui. Minim elit et laboris sunt incididunt voluptate aliquip pariatur incididunt qui commodo. Esse et quis anim fugiat cupidatat dolore esse cupidatat occaecat et dolor sit. Aliquip eiusmod enim ullamco laboris laborum reprehenderit non tempor sunt nisi reprehenderit.
<br/>

Minim minim proident magna consequat mollit pariatur ad reprehenderit duis tempor. Deserunt magna pariatur fugiat aliqua dolore cupidatat do adipisicing laboris et fugiat eu. Et dolore amet duis et esse proident ullamco. Ullamco consequat id adipisicing fugiat cupidatat laboris Lorem laborum Lorem. Nulla occaecat quis velit sint ipsum ex et officia. Irure non exercitation est labore ex eiusmod ut nostrud incididunt qui. Fugiat sunt consequat irure mollit deserunt ex incididunt eu sint aliquip consectetur duis.
<br/>

Occaecat eiusmod enim esse commodo do deserunt veniam fugiat. Quis magna incididunt sint commodo consequat consequat consequat amet. Sit aute nisi reprehenderit dolor laboris et cupidatat occaecat occaecat. Deserunt ad laborum ea dolore. Fugiat ipsum irure culpa quis labore.
<br/>

Adipisicing ea adipisicing consectetur reprehenderit tempor nulla occaecat laboris ullamco amet nostrud et anim velit. Ea est minim eiusmod in duis laborum. Nulla ut mollit ea dolore ex. Ex voluptate irure magna occaecat adipisicing voluptate labore excepteur adipisicing culpa. Ad labore irure eu proident laboris laborum id enim dolore. Aliquip velit mollit irure exercitation in ut exercitation sit mollit. Esse pariatur aute aliqua officia do consequat officia fugiat nisi sunt dolore aliqua.
<br/>
        </p>
        <p>
          Labore nostrud aliquip ad ex cupidatat. Voluptate aliquip fugiat nisi laborum tempor ullamco. Voluptate ex fugiat incididunt cupidatat commodo ullamco elit commodo velit id non commodo sunt laborum. Qui velit ullamco qui ullamco. Consequat eu velit enim do consectetur do.
<br/>
Do commodo exercitation deserunt in anim laboris ut fugiat enim. Elit in aute sunt eu excepteur aliqua. Velit ex enim commodo consequat ad. Non cupidatat adipisicing aliquip fugiat ipsum reprehenderit aute nisi in nisi aliqua quis laboris. Nulla anim non esse minim. Eu velit eiusmod magna deserunt. Irure deserunt cupidatat excepteur tempor.
<br/>

Non amet enim nostrud fugiat ad tempor proident. Consectetur id elit et cillum non consequat velit anim. Irure quis fugiat commodo dolor mollit do excepteur sit consectetur pariatur exercitation aliqua ut. Minim mollit consequat tempor pariatur adipisicing est nisi minim nisi aute qui. Eiusmod voluptate esse enim est ea qui id ipsum Lorem cupidatat laborum ea id.
<br/>

Do irure nulla laborum pariatur sit voluptate est qui et ut ea. Laboris Lorem qui sint magna nostrud exercitation deserunt tempor. Cillum ex nostrud ex consectetur in deserunt occaecat ea excepteur do minim culpa. Quis nostrud aute eiusmod sit ad exercitation dolore eiusmod qui. Minim elit et laboris sunt incididunt voluptate aliquip pariatur incididunt qui commodo. Esse et quis anim fugiat cupidatat dolore esse cupidatat occaecat et dolor sit. Aliquip eiusmod enim ullamco laboris laborum reprehenderit non tempor sunt nisi reprehenderit.
<br/>

Minim minim proident magna consequat mollit pariatur ad reprehenderit duis tempor. Deserunt magna pariatur fugiat aliqua dolore cupidatat do adipisicing laboris et fugiat eu. Et dolore amet duis et esse proident ullamco. Ullamco consequat id adipisicing fugiat cupidatat laboris Lorem laborum Lorem. Nulla occaecat quis velit sint ipsum ex et officia. Irure non exercitation est labore ex eiusmod ut nostrud incididunt qui. Fugiat sunt consequat irure mollit deserunt ex incididunt eu sint aliquip consectetur duis.
<br/>

Occaecat eiusmod enim esse commodo do deserunt veniam fugiat. Quis magna incididunt sint commodo consequat consequat consequat amet. Sit aute nisi reprehenderit dolor laboris et cupidatat occaecat occaecat. Deserunt ad laborum ea dolore. Fugiat ipsum irure culpa quis labore.
<br/>

Adipisicing ea adipisicing consectetur reprehenderit tempor nulla occaecat laboris ullamco amet nostrud et anim velit. Ea est minim eiusmod in duis laborum. Nulla ut mollit ea dolore ex. Ex voluptate irure magna occaecat adipisicing voluptate labore excepteur adipisicing culpa. Ad labore irure eu proident laboris laborum id enim dolore. Aliquip velit mollit irure exercitation in ut exercitation sit mollit. Esse pariatur aute aliqua officia do consequat officia fugiat nisi sunt dolore aliqua.
<br/>
        </p>
        <p>
          Labore nostrud aliquip ad ex cupidatat. Voluptate aliquip fugiat nisi laborum tempor ullamco. Voluptate ex fugiat incididunt cupidatat commodo ullamco elit commodo velit id non commodo sunt laborum. Qui velit ullamco qui ullamco. Consequat eu velit enim do consectetur do.
<br/>
Do commodo exercitation deserunt in anim laboris ut fugiat enim. Elit in aute sunt eu excepteur aliqua. Velit ex enim commodo consequat ad. Non cupidatat adipisicing aliquip fugiat ipsum reprehenderit aute nisi in nisi aliqua quis laboris. Nulla anim non esse minim. Eu velit eiusmod magna deserunt. Irure deserunt cupidatat excepteur tempor.
<br/>

Non amet enim nostrud fugiat ad tempor proident. Consectetur id elit et cillum non consequat velit anim. Irure quis fugiat commodo dolor mollit do excepteur sit consectetur pariatur exercitation aliqua ut. Minim mollit consequat tempor pariatur adipisicing est nisi minim nisi aute qui. Eiusmod voluptate esse enim est ea qui id ipsum Lorem cupidatat laborum ea id.
<br/>

Do irure nulla laborum pariatur sit voluptate est qui et ut ea. Laboris Lorem qui sint magna nostrud exercitation deserunt tempor. Cillum ex nostrud ex consectetur in deserunt occaecat ea excepteur do minim culpa. Quis nostrud aute eiusmod sit ad exercitation dolore eiusmod qui. Minim elit et laboris sunt incididunt voluptate aliquip pariatur incididunt qui commodo. Esse et quis anim fugiat cupidatat dolore esse cupidatat occaecat et dolor sit. Aliquip eiusmod enim ullamco laboris laborum reprehenderit non tempor sunt nisi reprehenderit.
<br/>

Minim minim proident magna consequat mollit pariatur ad reprehenderit duis tempor. Deserunt magna pariatur fugiat aliqua dolore cupidatat do adipisicing laboris et fugiat eu. Et dolore amet duis et esse proident ullamco. Ullamco consequat id adipisicing fugiat cupidatat laboris Lorem laborum Lorem. Nulla occaecat quis velit sint ipsum ex et officia. Irure non exercitation est labore ex eiusmod ut nostrud incididunt qui. Fugiat sunt consequat irure mollit deserunt ex incididunt eu sint aliquip consectetur duis.
<br/>

Occaecat eiusmod enim esse commodo do deserunt veniam fugiat. Quis magna incididunt sint commodo consequat consequat consequat amet. Sit aute nisi reprehenderit dolor laboris et cupidatat occaecat occaecat. Deserunt ad laborum ea dolore. Fugiat ipsum irure culpa quis labore.
<br/>

Adipisicing ea adipisicing consectetur reprehenderit tempor nulla occaecat laboris ullamco amet nostrud et anim velit. Ea est minim eiusmod in duis laborum. Nulla ut mollit ea dolore ex. Ex voluptate irure magna occaecat adipisicing voluptate labore excepteur adipisicing culpa. Ad labore irure eu proident laboris laborum id enim dolore. Aliquip velit mollit irure exercitation in ut exercitation sit mollit. Esse pariatur aute aliqua officia do consequat officia fugiat nisi sunt dolore aliqua.
<br/>
        </p>
        <p>
          Labore nostrud aliquip ad ex cupidatat. Voluptate aliquip fugiat nisi laborum tempor ullamco. Voluptate ex fugiat incididunt cupidatat commodo ullamco elit commodo velit id non commodo sunt laborum. Qui velit ullamco qui ullamco. Consequat eu velit enim do consectetur do.
<br/>
Do commodo exercitation deserunt in anim laboris ut fugiat enim. Elit in aute sunt eu excepteur aliqua. Velit ex enim commodo consequat ad. Non cupidatat adipisicing aliquip fugiat ipsum reprehenderit aute nisi in nisi aliqua quis laboris. Nulla anim non esse minim. Eu velit eiusmod magna deserunt. Irure deserunt cupidatat excepteur tempor.
<br/>

Non amet enim nostrud fugiat ad tempor proident. Consectetur id elit et cillum non consequat velit anim. Irure quis fugiat commodo dolor mollit do excepteur sit consectetur pariatur exercitation aliqua ut. Minim mollit consequat tempor pariatur adipisicing est nisi minim nisi aute qui. Eiusmod voluptate esse enim est ea qui id ipsum Lorem cupidatat laborum ea id.
<br/>

Do irure nulla laborum pariatur sit voluptate est qui et ut ea. Laboris Lorem qui sint magna nostrud exercitation deserunt tempor. Cillum ex nostrud ex consectetur in deserunt occaecat ea excepteur do minim culpa. Quis nostrud aute eiusmod sit ad exercitation dolore eiusmod qui. Minim elit et laboris sunt incididunt voluptate aliquip pariatur incididunt qui commodo. Esse et quis anim fugiat cupidatat dolore esse cupidatat occaecat et dolor sit. Aliquip eiusmod enim ullamco laboris laborum reprehenderit non tempor sunt nisi reprehenderit.
<br/>

Minim minim proident magna consequat mollit pariatur ad reprehenderit duis tempor. Deserunt magna pariatur fugiat aliqua dolore cupidatat do adipisicing laboris et fugiat eu. Et dolore amet duis et esse proident ullamco. Ullamco consequat id adipisicing fugiat cupidatat laboris Lorem laborum Lorem. Nulla occaecat quis velit sint ipsum ex et officia. Irure non exercitation est labore ex eiusmod ut nostrud incididunt qui. Fugiat sunt consequat irure mollit deserunt ex incididunt eu sint aliquip consectetur duis.
<br/>

Occaecat eiusmod enim esse commodo do deserunt veniam fugiat. Quis magna incididunt sint commodo consequat consequat consequat amet. Sit aute nisi reprehenderit dolor laboris et cupidatat occaecat occaecat. Deserunt ad laborum ea dolore. Fugiat ipsum irure culpa quis labore.
<br/>

Adipisicing ea adipisicing consectetur reprehenderit tempor nulla occaecat laboris ullamco amet nostrud et anim velit. Ea est minim eiusmod in duis laborum. Nulla ut mollit ea dolore ex. Ex voluptate irure magna occaecat adipisicing voluptate labore excepteur adipisicing culpa. Ad labore irure eu proident laboris laborum id enim dolore. Aliquip velit mollit irure exercitation in ut exercitation sit mollit. Esse pariatur aute aliqua officia do consequat officia fugiat nisi sunt dolore aliqua.
<br/>
        </p>
      </section>

      {/* <Cursor /> */}
      <CanvasComponent />
      {/* <SVGmorph /> */}
      {/* <SVGMask /> */}
    </div>
  );
}

export default App;
