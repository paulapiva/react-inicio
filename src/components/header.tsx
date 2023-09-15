import User from './users';

function Header() {
  return (
    <div>
      <h1 className="greeting">
        Olá
        {' '}
        <User />
        <img src="https://i.imgur.com/rqvLd3q.png" alt="" />
      </h1>
    </div>
  );
}

export default Header;
