import React from 'react';
import Button from '../components/Button';

import '../style/style.scss';

function StartPage() {
  return (
    <>
      <div className="container">
        <nav>
          <Button className="inverted" path="/connect-wallet">
            Подключить кошелёк
          </Button>
        </nav>
        <Button path="/buy">Купить билет</Button>
        <Button path="/check">Проверить QR-код</Button>
      </div>
    </>
  );
}

export default StartPage;
