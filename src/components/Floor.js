import React, { Component } from 'react';
import Block from './Block';
import MatchedBlock from './MatchedBlock';

class Floor extends Component {
  render() {
    const { grid, matched, scanned } = this.props;
    return (
      <g>
        <g>
          {grid.map((blocks, i) => (
            <g key={i}>
              {blocks.map(
                (block, j) =>
                  block ? (
                    <Block
                      key={j}
                      color={block.color}
                      x={block.x}
                      y={block.y}
                    />
                  ) : null,
              )}
            </g>
          ))}
        </g>
        <g>
          {matched
            .filter(block => block.left)
            .map((block, i) => (
              <MatchedBlock
                key={i}
                color={block.color}
                x={block.x}
                y={block.y}
              />
            ))}
        </g>
        <g>
          {scanned.map((block, i) => (
            <Block
              key={i}
              color={block.color}
              x={block.x}
              y={block.y}
              scanned
            />
          ))}
        </g>
      </g>
    );
  }
}

export default Floor;
