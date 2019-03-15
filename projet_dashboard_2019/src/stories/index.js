import React from 'react';


import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import App from '../App';
import Chart from '../Components/chart';
import Camembert from '../Components/doughnut';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

  storiesOf('App', module).add('La Base', () => 
  <App />
  ) ;

  storiesOf('Ski', module)
  .add('Frequentations', () => <Chart />)
  .add('%domaine', () => <Camembert />);
  


