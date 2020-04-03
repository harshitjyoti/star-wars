import React from 'react';
import { Collapse, Badge } from 'antd';
import { getColor } from '../../helpers';

const getExtra = (population, color) => <Badge style={{ backgroundColor: color }} count={parseInt(population).toLocaleString()} />

const getHeader = (name, color) => <span style={{ color, fontWeight: 'bold', textDecoration: "underline" }} >{name}</span>
const Pannel = ({ planets }) => {
  return planets.map((item) => {
    const color = getColor(item.population)
    return <Collapse>
      <Collapse.Panel header={getHeader(item.name, color)} key="1" extra={getExtra(item.population, color)}>
        {Object.keys(item).map((i) => (
          <><b>{i.replace(/_/g, ' ').toUpperCase()}</b> : {item[i]}<hr /></>
        ))}
      </Collapse.Panel>
    </Collapse>
  }
  )
}

export default Pannel;