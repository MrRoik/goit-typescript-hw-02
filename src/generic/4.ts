/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface some {
  some: string;
}

class Component<T> {
  constructor (public props:T) {

  }
}

class Page extends Component {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};