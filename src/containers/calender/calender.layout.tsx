import React, { useContext } from 'react';
import { calenderContext } from '../../Context/calender.context';
import { CALENDER_VIEW } from '../../constants';
import { months } from '../../constants/index';
import { Flexbox } from '../../elements/Flexbox';
import * as H from './style';

interface actionTypes {
  type: string;
  data?: number | string;
}

interface CalenderLayoutProps {
  handleActionProcced?: actionTypes;
  handleActionBack?: actionTypes;
}

const CalenderLayout: React.FC<CalenderLayoutProps> = ({
  children,
  handleActionProcced,
  handleActionBack
}) => {
  const contextTesting = useContext(calenderContext);
  const {state, dispatch} = contextTesting as any;
  return (
    <H.Container>
      <Flexbox className="card-top" flexRow>
        <h3 style={{fontSize: 20}} color="white">
          Events schedule  <span style={{ color:'#333333' }}> {months[state.month - 1]} {state.year}</span>
        </h3>
        <Flexbox flexRow className="card-top-inner">
          <Flexbox
            justifyCenter
            alignCenter
            className="card-top-inner-item"
            onClick={() => dispatch(handleActionBack)}
          >
            {'\u2190'}
          </Flexbox>
          <Flexbox
            justifyCenter
            alignCenter
            className={`card-top-inner-item ${
              state.index !== CALENDER_VIEW && 'card-top-inner-item__disabled'
            }`}
            onClick={() => dispatch(handleActionProcced)}
          >
            {'\u2192'}
          </Flexbox>
        </Flexbox>
      </Flexbox>
      {children}
    </H.Container>
  );
};

export default CalenderLayout;
