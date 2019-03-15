import React from 'react';


import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import App from '../App';
import Chart from '../Components/chart';
import Camembert from '../Components/doughnut';
import Scatter from '../Components/points';
import Line from './Components/line'; 
import meteo from './Components/meteo'; 
import Heure from './Components/heure';

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
  .add('Altitude skiable la plus haute', () => <Scatter />)
  .add('Ché pas', () => <Line/>)
  .add('meteo', () => <Weather/> )
  .add('heure', () => <Heure/> )
  .add('%domaine', () => <Camembert />);
  


